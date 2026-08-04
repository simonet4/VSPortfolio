// ============================================================================
// Génère docs/CV_Victor_Simonet.pdf et docs/Lettre_Motivation_Victor_Simonet.pdf
//
//   npm install pdf-lib      (une fois)
//   node tools/build-cv.js
//
// Le contenu vit dans tools/cv-data.js. Pour changer la photo, remplacez
// docs/photo.png (carrée de préférence) et relancez.
// ============================================================================
const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');
const D = require('./cv-data');

// Inter embarquée (OFL) — même police que le portfolio, et rendu identique
// dans tous les lecteurs, contrairement aux polices standard non embarquées.
//
// tools/fonts/*.ttf est versionné : le build n'a donc besoin de rien d'autre.
// Si ces fichiers manquent (dossier supprimé, dépôt fraîchement cloné sans
// eux), on les reconstruit à la volée depuis @fontsource/inter s'il est
// installé — sinon on s'arrête avec la marche à suivre, plutôt que de
// produire un PDF à la typographie différente sans prévenir.
const FONT_DIR = path.join(__dirname, 'fonts');
const FONT_FILES = {
    reg: ['Inter-Regular.ttf', 'inter-latin-400-normal.woff'],
    semi: ['Inter-SemiBold.ttf', 'inter-latin-600-normal.woff'],
    bold: ['Inter-Bold.ttf', 'inter-latin-700-normal.woff'],
    obl: ['Inter-Italic.ttf', 'inter-latin-400-italic.woff']
};

function ensureFonts() {
    const manquants = Object.values(FONT_FILES)
        .filter(([ttf]) => !fs.existsSync(path.join(FONT_DIR, ttf)));
    if (!manquants.length) return;

    const src = path.join(__dirname, '..', 'node_modules', '@fontsource', 'inter', 'files');
    if (!fs.existsSync(src)) {
        throw new Error(
            `polices absentes de tools/fonts (${manquants.map(m => m[0]).join(', ')}).\n` +
            `  Restaurez-les avec :  npm install  &&  node tools/build-cv.js\n` +
            `  (le paquet @fontsource/inter sert uniquement à les regénérer)`
        );
    }
    const { woffToTtf } = require('./woff2ttf');
    fs.mkdirSync(FONT_DIR, { recursive: true });
    for (const [ttf, woff] of manquants) {
        fs.writeFileSync(path.join(FONT_DIR, ttf), woffToTtf(fs.readFileSync(path.join(src, woff))));
        console.log(`  police reconstruite : tools/fonts/${ttf}`);
    }
}

async function loadFonts(pdf) {
    ensureFonts();
    pdf.registerFontkit(fontkit);
    const f = n => fs.readFileSync(path.join(FONT_DIR, n));
    const out = {};
    for (const [cle, [ttf]] of Object.entries(FONT_FILES)) {
        out[cle] = await pdf.embedFont(f(ttf), { subset: true });
    }
    return out;
}

const ROOT = path.join(__dirname, '..');
const A4 = { w: 595.28, h: 841.89 };

const SIDEBAR_W = 196;
const NAVY = rgb(0.176, 0.239, 0.333);
const SIDE_BG = rgb(0.855, 0.886, 0.925);
const PAGE_BG = rgb(0.992, 0.992, 0.992);
const INK = rgb(0.13, 0.14, 0.16);
const MUTED = rgb(0.36, 0.39, 0.43);
const RULE = rgb(0.72, 0.76, 0.82);

// Inter couvre le latin etendu, mais pas les exposants typographiques.
function safe(s) {
    return String(s)
        .replace(/ᵉ/g, 'e')      // exposant e  ->  e
        .replace(/ /g, ' ');     // espace insecable -> espace
}

// --------------------------------------------------------------------------
// Petit moteur de flux : écrit du texte avec retour à la ligne, gère la
// pagination et renvoie la nouvelle ordonnée.
// --------------------------------------------------------------------------
class Doc {
    constructor(pdf, fonts) {
        this.pdf = pdf;
        this.f = fonts;
        this.pages = [];
        this.newPage();
    }
    newPage() {
        const p = this.pdf.addPage([A4.w, A4.h]);
        p.drawRectangle({ x: 0, y: 0, width: A4.w, height: A4.h, color: PAGE_BG });
        p.drawRectangle({ x: 0, y: 0, width: SIDEBAR_W, height: A4.h, color: SIDE_BG });
        this.pages.push(p);
        this.page = p;
        return p;
    }
    wrap(text, font, size, maxW) {
        const out = [];
        for (const para of safe(text).split('\n')) {
            let line = '';
            for (const word of para.split(/\s+/)) {
                const t = line ? line + ' ' + word : word;
                if (font.widthOfTextAtSize(t, size) > maxW && line) { out.push(line); line = word; }
                else line = t;
            }
            out.push(line);
        }
        return out;
    }
    text(str, { x, y, size = 8.5, font = this.f.reg, color = INK, maxW = 340, lh = 1.35, align = 'left' }) {
        const lines = this.wrap(str, font, size, maxW);
        for (const ln of lines) {
            let dx = x;
            if (align === 'center') dx = x + (maxW - font.widthOfTextAtSize(ln, size)) / 2;
            this.page.drawText(ln, { x: dx, y, size, font, color });
            y -= size * lh;
        }
        return y;
    }
}

// --------------------------------------------------------------------------
// Masque circulaire : on pose par-dessus l'image un carré troué d'un disque,
// rempli de la couleur du bandeau. Marche avec n'importe quelle image.
// --------------------------------------------------------------------------
// Rectangle w x h percé d'un disque de rayon r centré en (cx, cy).
// Rempli en règle "evenodd", il masque tout sauf le disque — le rectangle
// couvre toute l'image, donc rien ne déborde du cercle.
function circleMaskPath(w, h, cx, cy, r) {
    const k = 0.5523 * r;
    return [
        `M 0 0 L ${w} 0 L ${w} ${h} L 0 ${h} Z`,
        `M ${cx} ${cy - r}`,
        `C ${cx - k} ${cy - r} ${cx - r} ${cy - k} ${cx - r} ${cy}`,
        `C ${cx - r} ${cy + k} ${cx - k} ${cy + r} ${cx} ${cy + r}`,
        `C ${cx + k} ${cy + r} ${cx + r} ${cy + k} ${cx + r} ${cy}`,
        `C ${cx + r} ${cy - k} ${cx + k} ${cy - r} ${cx} ${cy - r} Z`
    ].join(' ');
}

// Trouve la photo quel que soit son format et l'embarque selon ses octets
// d'en-tête, pas selon son extension : déposer un JPEG nommé "photo.png"
// reste ainsi sans conséquence.
async function embedPhoto(pdf) {
    const candidats = ['photo.png', 'photo.jpg', 'photo.jpeg', 'photo.PNG', 'photo.JPG'];
    const explicite = D.contact.photo ? [path.basename(D.contact.photo)] : [];
    for (const nom of [...explicite, ...candidats]) {
        const f = path.join(ROOT, 'docs', nom);
        if (!fs.existsSync(f)) continue;
        const b = fs.readFileSync(f);
        const estPng = b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47;
        const estJpg = b[0] === 0xff && b[1] === 0xd8;
        if (estPng) return { img: await pdf.embedPng(b), nom };
        if (estJpg) return { img: await pdf.embedJpg(b), nom };
        console.warn(`  ! ${nom} n'est ni PNG ni JPEG (WebP/HEIC non gérés) — ignoré`);
    }
    return null;
}

async function buildCV() {
    const pdf = await PDFDocument.create();
    const fonts = await loadFonts(pdf);
    const doc = new Doc(pdf, fonts);
    const p = doc.page;

    // ---------- bandeau titre ----------
    const HDR_X = SIDEBAR_W + 22, HDR_W = A4.w - HDR_X - 30, HDR_H = 74;
    p.drawRectangle({ x: HDR_X, y: A4.h - 34 - HDR_H, width: HDR_W, height: HDR_H, color: NAVY });
    {
        const s = 21, t = safe(D.contact.nom);
        p.drawText(t, {
            x: HDR_X + (HDR_W - fonts.bold.widthOfTextAtSize(t, s)) / 2,
            y: A4.h - 34 - 34, size: s, font: fonts.bold, color: rgb(1, 1, 1)
        });
        const s2 = 8.5, t2 = safe(D.contact.titre);
        p.drawText(t2, {
            x: HDR_X + (HDR_W - fonts.reg.widthOfTextAtSize(t2, s2)) / 2,
            y: A4.h - 34 - 55, size: s2, font: fonts.reg, color: rgb(0.85, 0.88, 0.93)
        });
    }

    // ---------- photo ----------
    let ly = A4.h - 30;
    const photo = await embedPhoto(pdf);
    if (photo) {
        const S = 104, px = (SIDEBAR_W - S) / 2, py = ly - S;
        // l'image remplit le disque sans être déformée (recadrage centré)
        const ratio = photo.img.width / photo.img.height;
        const w = ratio >= 1 ? S * ratio : S;
        const h = ratio >= 1 ? S : S / ratio;
        const ix = px - (w - S) / 2, iy = py - (h - S) / 2;
        p.drawImage(photo.img, { x: ix, y: iy, width: w, height: h });
        // masque aux dimensions exactes de l'image : aucun débordement possible
        p.drawSvgPath(circleMaskPath(w, h, w / 2, h / 2, S / 2),
            { x: ix, y: iy + h, color: SIDE_BG, fillRule: 'evenodd' });
        console.log(`  photo : docs/${photo.nom} (${photo.img.width}x${photo.img.height})`);
        ly = py - 22;
    } else {
        console.warn('  ! aucune photo trouvée — déposez docs/photo.png ou docs/photo.jpg');
        ly -= 14;
    }

    // ---------- helpers colonne gauche ----------
    const LX = 18, LW = SIDEBAR_W - 36;
    const sideHeading = (label) => {
        ly -= 4;
        const t = safe(label).toUpperCase();
        doc.page.drawText(t, { x: LX, y: ly, size: 9, font: fonts.bold, color: NAVY });
        ly -= 6;
        doc.page.drawLine({
            start: { x: LX, y: ly }, end: { x: LX + LW, y: ly },
            thickness: 0.7, color: RULE
        });
        ly -= 12;
    };

    // ---------- contact ----------
    sideHeading('Contact');
    for (const v of [D.contact.tel, D.contact.mail, D.contact.site, D.contact.linkedin, D.contact.github]) {
        ly = doc.text(v, { x: LX, y: ly, size: 7.4, maxW: LW, color: MUTED, lh: 1.5 });
        ly -= 1.5;
    }
    ly -= 8;

    // ---------- compétences ----------
    sideHeading('Compétences');
    for (const c of D.competences) {
        doc.page.drawText(safe(c.titre), { x: LX, y: ly, size: 7.8, font: fonts.bold, color: INK });
        ly -= 10.5;
        ly = doc.text(c.items, { x: LX, y: ly, size: 7.2, maxW: LW, color: MUTED, lh: 1.4 });
        ly -= 7;
    }
    ly -= 2;

    // ---------- langues ----------
    sideHeading('Langues');
    for (const [nom, niv] of D.langues) {
        doc.page.drawText(safe(nom), { x: LX, y: ly, size: 7.6, font: fonts.bold, color: INK });
        const nt = safe(niv);
        doc.page.drawText(nt, {
            x: LX + LW - fonts.reg.widthOfTextAtSize(nt, 7.2), y: ly,
            size: 7.2, font: fonts.reg, color: MUTED
        });
        ly -= 12;
    }
    ly -= 6;

    // ---------- formations ----------
    sideHeading('Formations');
    for (const f of D.formations) {
        doc.page.drawText(safe(f.date), { x: LX, y: ly, size: 7.2, font: fonts.bold, color: NAVY });
        ly -= 10;
        ly = doc.text(f.titre, { x: LX, y: ly, size: 7.8, font: fonts.bold, maxW: LW, lh: 1.3 });
        ly = doc.text(f.lieu, { x: LX, y: ly - 1, size: 7.1, maxW: LW, color: MUTED, lh: 1.3 });
        if (f.detail) ly = doc.text(f.detail, { x: LX, y: ly - 1, size: 7.1, maxW: LW, color: MUTED, lh: 1.3 });
        ly -= 9;
    }

    // ---------- colonne droite ----------
    const RX = SIDEBAR_W + 24, RW = A4.w - RX - 32;
    let ry = A4.h - 34 - HDR_H - 26;

    const section = (label) => {
        ry -= 9;
        if (ry < 70) { doc.newPage(); ry = A4.h - 56; }
        const t = safe(label).toUpperCase();
        doc.page.drawText(t, { x: RX, y: ry, size: 9.6, font: fonts.bold, color: NAVY });
        ry -= 6.5;
        doc.page.drawLine({
            start: { x: RX, y: ry }, end: { x: RX + RW, y: ry },
            thickness: 0.8, color: RULE
        });
        ry -= 13;
    };
    const bullet = (txt, size = 8) => {
        if (ry < 60) { doc.newPage(); ry = A4.h - 56; }
        doc.page.drawText('•', { x: RX + 2, y: ry, size, font: fonts.reg, color: NAVY });
        ry = doc.text(txt, { x: RX + 12, y: ry, size, maxW: RW - 12, color: MUTED, lh: 1.32 });
        ry -= 3;
    };

    section('Profil');
    ry = doc.text(D.profil, { x: RX, y: ry, size: 8.2, maxW: RW, color: MUTED, lh: 1.38 });
    ry -= 3;

    section('Expérience professionnelle');
    for (const e of D.experiences) {
        doc.page.drawText(safe(e.poste), { x: RX, y: ry, size: 9.4, font: fonts.bold, color: INK });
        ry -= 10.5;
        doc.page.drawText(safe(e.entreprise), { x: RX, y: ry, size: 8.4, font: fonts.bold, color: NAVY });
        ry -= 9.5;
        doc.page.drawText(safe(e.date), { x: RX, y: ry, size: 7.6, font: fonts.obl, color: MUTED });
        ry -= 13;
        for (const pt of e.points) bullet(pt);
        ry -= 2;
    }

    section('Distinctions');
    for (const d of D.distinctions) bullet(d);
    ry -= 1;

    section('Projets');
    for (const g of D.projets) {
        if (ry < 70) { doc.newPage(); ry = A4.h - 56; }
        doc.page.drawText(safe(g.titre), { x: RX, y: ry, size: 8.3, font: fonts.semi, color: INK });
        ry -= 11;
        for (const pt of g.points) bullet(pt, 7.9);
        ry -= 2;
    }

    section('Engagement & animation');
    for (const e of D.engagement) bullet(e, 7.9);

    const out = path.join(ROOT, 'docs', 'CV_Victor_Simonet.pdf');
    fs.writeFileSync(out, await pdf.save());
    console.log(`CV écrit : ${out} (${doc.pages.length} page(s))`);
}

async function buildLettre() {
    const pdf = await PDFDocument.create();
    const fonts = await loadFonts(pdf);
    const page = pdf.addPage([A4.w, A4.h]);
    page.drawRectangle({ x: 0, y: 0, width: A4.w, height: A4.h, color: PAGE_BG });

    const M = 64, W = A4.w - M * 2;
    let y = A4.h - 66;

    const wrap = (t, f, s, w) => {
        const out = [];
        for (const para of safe(t).split('\n')) {
            let line = '';
            for (const word of para.split(/\s+/)) {
                const c = line ? line + ' ' + word : word;
                if (f.widthOfTextAtSize(c, s) > w && line) { out.push(line); line = word; }
                else line = c;
            }
            out.push(line);
        }
        return out;
    };
    const put = (t, { size = 10, font = fonts.reg, color = INK, lh = 1.5, x = M, w = W }) => {
        for (const ln of wrap(t, font, size, w)) {
            page.drawText(ln, { x, y, size, font, color });
            y -= size * lh;
        }
    };

    // en-tête
    page.drawText(safe(D.contact.nom), { x: M, y, size: 16, font: fonts.bold, color: NAVY });
    y -= 18;
    page.drawText(safe(D.contact.titre), { x: M, y, size: 9, font: fonts.reg, color: MUTED });
    y -= 13;
    page.drawText(safe(`${D.contact.mail}  ·  ${D.contact.tel}  ·  ${D.contact.site}`),
        { x: M, y, size: 8.5, font: fonts.reg, color: MUTED });
    y -= 10;
    page.drawLine({ start: { x: M, y }, end: { x: M + W, y }, thickness: 0.8, color: RULE });
    y -= 30;

    // date
    const d = new Date();
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
        'août', 'septembre', 'octobre', 'novembre', 'décembre'][d.getMonth()];
    const dateStr = safe(`${D.lettre.lieu}, le ${d.getDate()} ${mois} ${d.getFullYear()}`);
    page.drawText(dateStr, {
        x: M + W - fonts.reg.widthOfTextAtSize(dateStr, 9.5), y, size: 9.5,
        font: fonts.reg, color: MUTED
    });
    y -= 34;

    put('Objet : ' + D.lettre.objet, { size: 10, font: fonts.bold });
    y -= 18;

    for (const para of D.lettre.corps) {
        put(para, { size: 9.8, lh: 1.55, color: rgb(0.2, 0.21, 0.24) });
        y -= 12;
    }

    y -= 10;
    page.drawText(safe(D.lettre.signature), {
        x: M + W - fonts.bold.widthOfTextAtSize(safe(D.lettre.signature), 10.5),
        y, size: 10.5, font: fonts.bold, color: NAVY
    });

    const out = path.join(ROOT, 'docs', 'Lettre_Motivation_Victor_Simonet.pdf');
    fs.writeFileSync(out, await pdf.save());
    console.log(`Lettre écrite : ${out}`);
}

(async () => { await buildCV(); await buildLettre(); })()
    .catch(e => { console.error('ERREUR :', e.message); process.exit(1); });
