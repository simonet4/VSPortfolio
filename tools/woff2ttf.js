// ============================================================================
// Convertit un WOFF en TTF. Le WOFF n'est qu'un conteneur SFNT dont chaque
// table est compressée en zlib : on décompresse table par table et on
// reconstruit l'en-tête SFNT. Utilisé une seule fois pour produire
// tools/fonts/*.ttf à partir du paquet @fontsource/inter.
//
//   node tools/woff2ttf.js entree.woff sortie.ttf
// ============================================================================
const fs = require('fs');
const zlib = require('zlib');

function woffToTtf(buf) {
    if (buf.toString('latin1', 0, 4) !== 'wOFF') throw new Error('signature wOFF absente');

    const flavor = buf.readUInt32BE(4);
    const numTables = buf.readUInt16BE(12);

    const tables = [];
    for (let i = 0; i < numTables; i++) {
        const o = 44 + i * 20;
        const tag = buf.toString('latin1', o, o + 4);
        const offset = buf.readUInt32BE(o + 4);
        const compLength = buf.readUInt32BE(o + 8);
        const origLength = buf.readUInt32BE(o + 12);
        const origChecksum = buf.readUInt32BE(o + 16);

        let data = buf.subarray(offset, offset + compLength);
        if (compLength < origLength) data = zlib.inflateSync(data);
        if (data.length !== origLength) throw new Error(`table ${tag}: taille inattendue`);
        tables.push({ tag, data, origChecksum });
    }

    tables.sort((a, b) => (a.tag < b.tag ? -1 : a.tag > b.tag ? 1 : 0));

    // en-tête SFNT + répertoire des tables
    const head = Buffer.alloc(12);
    head.writeUInt32BE(flavor, 0);
    head.writeUInt16BE(numTables, 4);
    const maxPow2 = Math.pow(2, Math.floor(Math.log2(numTables)));
    head.writeUInt16BE(maxPow2 * 16, 6);                       // searchRange
    head.writeUInt16BE(Math.floor(Math.log2(maxPow2)), 8);     // entrySelector
    head.writeUInt16BE(numTables * 16 - maxPow2 * 16, 10);     // rangeShift

    const dir = Buffer.alloc(numTables * 16);
    let offset = 12 + numTables * 16;
    const blocks = [];

    tables.forEach((t, i) => {
        const o = i * 16;
        dir.write(t.tag, o, 4, 'latin1');
        dir.writeUInt32BE(t.origChecksum, o + 4);
        dir.writeUInt32BE(offset, o + 8);
        dir.writeUInt32BE(t.data.length, o + 12);
        blocks.push(t.data);
        const pad = (4 - (t.data.length % 4)) % 4;
        if (pad) blocks.push(Buffer.alloc(pad));
        offset += t.data.length + pad;
    });

    return Buffer.concat([head, dir, ...blocks]);
}

if (require.main === module) {
    const out = woffToTtf(fs.readFileSync(process.argv[2]));
    fs.writeFileSync(process.argv[3], out);
    console.log(`${process.argv[3]} — ${out.length} octets`);
}

module.exports = { woffToTtf };
