// ============================================================================
// Contenu du CV et de la lettre de motivation.
// Éditez ce fichier, puis relancez :  node tools/build-cv.js
// La mise en page est dans build-cv.js — ici, uniquement du texte.
// ============================================================================

const contact = {
    nom: 'VICTOR SIMONET',
    titre: 'Alternant Développeur Odoo — Data & IA',
    tel: '+33 6 37 26 54 89',
    mail: 'contact@victorsimonet.com',
    site: 'victorsimonet.com',
    linkedin: 'linkedin.com/in/victorsimonet',
    github: 'github.com/simonet4',
    photo: 'docs/photo.png'
};

const profil =
    "Alternant chez Gembaware, intégrateur Odoo, où je développe des modules et des " +
    "connecteurs Odoo en Python et où j'y branche de l'IA appliquée. DUT Informatique " +
    "obtenu, je poursuis une troisième année pour le BUT, parcours administration et " +
    "exploitation des données. À l'aise de la base de données à l'application mobile.";

const competences = [
    { titre: 'Odoo & ERP', items: 'Modules Python/XML, API REST, connecteur ShippingBo, étiquettes ZPL, Postman' },
    { titre: 'Data & IA', items: 'Python (pandas, matplotlib), Power BI, Knime, RAG, Qdrant, Mistral AI, n8n, Ollama' },
    { titre: 'Bases de données', items: 'Oracle SQL, PL/SQL, Oracle APEX, HeidiSQL, Access' },
    { titre: 'Langages', items: 'Java, C, C++, ADA, PHP, JavaScript, Dart, HTML/CSS, Bash' },
    { titre: 'Outils', items: 'Git, Docker, Linux, Agile/Scrum, Eclipse, VS Code, VirtualBox, Flutter, WinDev' }
];

const langues = [
    ['Français', 'langue maternelle'],
    ['Portugais', 'bilingue'],
    ['Anglais', 'B2'],
    ['Espagnol', 'B2']
];

const formations = [
    {
        date: '2026 — 2027',
        titre: '3ᵉ année de BUT Informatique',
        lieu: 'IUT Paul Sabatier, Toulouse',
        detail: "Parcours AGED — administration, gestion et exploitation des données. En cours."
    },
    {
        date: '2026',
        titre: 'DUT Informatique — obtenu',
        lieu: 'IUT Paul Sabatier, Toulouse',
        detail: "Diplôme validé à l'issue des deux premières années."
    },
    {
        date: '2022 — 2024',
        titre: 'Baccalauréat STI2D, mention',
        lieu: 'Lycée Déodat de Séverac, Toulouse',
        detail: "Spécialité SIN — Systèmes d'Information et Numérique."
    },
    {
        date: '2023',
        titre: 'BAFA',
        lieu: 'Assistant sanitaire, PSC 1',
        detail: ''
    }
];

const experiences = [
    {
        poste: 'Développeur Odoo',
        entreprise: 'Gembaware — intégrateur Odoo',
        date: 'Alternance juil. 2026 – août 2027 · Stage avr. – juil. 2026',
        points: [
            "Développement de modules Odoo en Python et XML pour plusieurs clients : conception, " +
            "configuration et mise en production.",
            "Connecteur API entre ShippingBo et Odoo pour un client vendant sur plusieurs " +
            "plateformes, et génération d'étiquettes ZPL imprimées sur imprimantes industrielles.",
            "Application mobile Flutter adossée à un back-end Odoo : messagerie temps réel, " +
            "notifications push, fil d'actualités alimenté par scraping et support client.",
            "Assistant de devis par IA intégré à Odoo : RAG sur Qdrant et Mistral AI orchestrés " +
            "avec n8n, estimation de la probabilité de vente selon le prix et l'historique.",
            "Audit de performances : analyse des logs et des requêtes SQL lentes en Python, " +
            "tests d'API sous Postman, restitution des causes et des correctifs au client."
        ]
    }
];

const distinctions = [
    "2ᵉ prix Capgemini — visualisation audio, Nuit de l'Informatique 2025 (équipe de 10).",
    "Prix de la télécommunication — Olympiades Paul Sabatier 2022, robot sumo télécommandé.",
    "Proximars — serre à environnement contrôlé présentée au CNES de Toulouse."
];

const projets = [
    {
        titre: 'Data & IA',
        points: [
            "Sam — assistant IA 100 % local : Gemma via Ollama sur GPU AMD (ROCm), mémoire " +
            "persistante par embeddings dans Qdrant et rappel sémantique (RAG).",
            "OpenFoodFacts — traitement et visualisation sous Power BI et Knime, estimation du " +
            "Nutri-Score des produits mal renseignés via un pipeline n8n.",
            "Dashboard analytique Oracle APEX sur les champions de League of Legends (PL/SQL)."
        ]
    },
    {
        titre: 'Développement & mobile',
        points: [
            "Vicrasti — application mobile de gestion du temps avec assistant IA intégré.",
            "Site de gestion d'équipe sportive en PHP avec APIs tierces ; webdocumentaire " +
            "interactif sur les vignerons du sud de la France.",
            "Applications Java de gestion (WindowBuilder, Oracle, JUnit, Agile/Scrum) et prise " +
            "de rendez-vous vétérinaire sous WinDev."
        ]
    },
    {
        titre: 'Systèmes & infrastructure',
        points: [
            "Serveur mail et sites web auto-hébergés sur Raspberry Pi (Docker, Linux, TLS, Cloudflare).",
            "Proximars — serre pilotée par Arduino ; robot sumo télécommandé par application mobile.",
            "Proxy FTP multi-client en C ; Sudoku et gestion de parking en ADA."
        ]
    }
];

const engagement = [
    "Bénévole aux Restos du Cœur — logistique alimentaire et macro Excel de suivi des stocks.",
    "Animateur BAFA — Arboucalot 2023 (15 adolescents) et TUC Vacances 2024 ; tutorat SOCRATE 2021."
];

// ---------------------------------------------------------------------------
// Lettre de motivation
// ---------------------------------------------------------------------------
const lettre = {
    objet: "Candidature — alternance / poste de développeur Odoo, data & IA",
    lieu: 'Toulouse',
    corps: [
        "Madame, Monsieur,",

        "Actuellement en alternance chez Gembaware, intégrateur Odoo, je prépare une " +
        "troisième année de BUT Informatique à l'IUT Paul Sabatier de Toulouse, après " +
        "avoir obtenu mon DUT. Mon parcours AGED est orienté administration et " +
        "exploitation des données, et c'est exactement le terrain sur lequel je travaille " +
        "au quotidien.",

        "Chez Gembaware, je développe des modules Odoo en Python pour plusieurs clients. " +
        "J'ai construit un connecteur API entre ShippingBo et Odoo pour une entreprise " +
        "vendant sur plusieurs plateformes, mis en place la génération d'étiquettes ZPL " +
        "vers des imprimantes industrielles, et livré une application mobile Flutter " +
        "adossée à Odoo avec messagerie temps réel, notifications push et support client. " +
        "J'y ai aussi intégré un assistant de devis par IA — RAG sur Qdrant et Mistral AI " +
        "orchestrés avec n8n — capable d'estimer la probabilité de vente à partir du prix " +
        "et de l'historique. Enfin, j'ai mené un audit de performances sur les requêtes " +
        "SQL lentes, restitué au client avec les causes et les correctifs.",

        "Ce qui me motive, c'est de transformer des données et des documents bruts en " +
        "quelque chose d'utilisable. Je l'ai fait en entreprise, mais aussi de mon côté : " +
        "j'héberge mon serveur mail et mes sites sur un Raspberry Pi sous Docker, et je " +
        "développe une IA personnelle entièrement locale. Cette curiosité m'a valu deux " +
        "distinctions, dont le 2ᵉ prix Capgemini à la Nuit de l'Informatique, et m'a mené " +
        "jusqu'au CNES pour présenter une serre à environnement contrôlé.",

        "Autonome et rigoureux, habitué au travail en équipe sous méthode agile, je serais " +
        "heureux de mettre cette double compétence Odoo et data au service de vos projets. " +
        "Je me tiens à votre disposition pour en échanger.",

        "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées."
    ],
    signature: 'Victor Simonet'
};

module.exports = {
    contact, profil, competences, langues, formations,
    experiences, distinctions, projets, engagement, lettre
};
