// translations.js — Portfolio Victor Simonet
// Languages: FR, EN, PT
//
// Chaque item de `experiences.items` accepte :
//   icon, cat ('pro' | 'study' | 'perso'), date, title, context, desc, tags
//   award      (optionnel) — distinction, affichée en badge
//   link/linkLabel (optionnels) — lien externe en bas de carte

translations = {
    fr: {
        btn: "FR",
        htmlLang: "fr",
        locale: "fr-FR",
        nav: {
            about: "À propos",
            work: "Parcours",
            now: "En ce moment",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            status: "DUT en poche · en alternance chez Gembaware, intégrateur Odoo",
            h1: "Sam, mon IA 100 % locale",
            h2: "Alternant développeur Odoo",
            h3: "Proximars présenté au CNES",
            desc: "Étudiant en BUT Informatique à Toulouse, DUT en poche. En alternance chez Gembaware, intégrateur Odoo, je développe des modules et des connecteurs Odoo en Python, une application mobile Flutter adossée à l'ERP, et j'y branche de l'IA appliquée (RAG sur Qdrant, Mistral AI). Ce qui me fait vibrer : transformer des données et des documents bruts en quelque chose d'utile.",
            cta: "Voir mes projets",
            cv: "Télécharger CV",
            letter: "Télécharger lettre de motivation"
        },
        about: {
            label: "À propos",
            bio: "J'ai obtenu mon DUT Informatique à l'IUT Paul Sabatier (Toulouse) et je poursuis en 3ᵉ année pour décrocher le BUT, parcours AGED — administration, gestion et exploitation des données. Depuis avril 2026 je suis chez Gembaware, intégrateur Odoo : d'abord en stage, puis en alternance jusqu'à la fin de mon diplôme. J'y développe des modules et des connecteurs Odoo en Python pour plusieurs clients — connecteur ShippingBo, étiquettes ZPL — une application mobile Flutter adossée à l'ERP, et j'y branche de l'IA appliquée : un assistant de devis en RAG sur Qdrant avec Mistral AI et n8n. Avant ça : un bac STI2D spécialité SIN avec mention, deux projets primés (Olympiades Paul Sabatier, Nuit de l'Informatique) et une serre martienne présentée au CNES. À la maison, un Raspberry Pi héberge mon serveur mail et mes sites, et Sam — mon IA 100 % locale — tourne sur mon GPU. Ce qui me motive : passer de la donnée brute à quelque chose d'utile.",
            stack_title: "Ma boîte à outils",
            stack: [
                {
                    label: "Data & IA",
                    tags: ["Python", "Pandas", "Matplotlib", "Power BI", "Knime", "RAG", "Qdrant", "Mistral AI", "Ollama", "n8n"]
                },
                {
                    label: "Bases de données",
                    tags: ["Oracle SQL", "PL/SQL", "Oracle APEX", "HeidiSQL", "Access", "Odoo / ERP"]
                },
                {
                    label: "Langages",
                    tags: ["Java", "C", "C++", "ADA", "PHP", "JavaScript", "HTML/CSS", "Bash"]
                },
                {
                    label: "Applicatif & embarqué",
                    tags: ["Flutter / Dart", "Android Studio", "Arduino", "ZPL", "WindowBuilder", "WinDev"]
                },
                {
                    label: "Outils & Infra",
                    tags: ["Git", "Docker", "Linux", "VirtualBox", "Postman", "Agile / Scrum", "VS Code", "Eclipse", "JUnit", "Blender / FreeCAD"]
                }
            ],
            job2_date: "Juillet 2026 — Août 2027",
            job2_title: "Alternance chez Gembaware",
            job2_desc: "Développement Odoo pour plusieurs clients, application mobile Flutter et IA appliquée à l'ERP.",
            job_date: "Avril 2026 — Juillet 2026",
            job_title: "Stage chez Gembaware",
            job_desc: "Premier contact avec le métier au sein d'une vraie équipe : Odoo, API, IA et analyse de données.",
            step1_date: "2024 — 2027",
            step1_title: "3ᵉ année de BUT — Paul Sabatier, Toulouse",
            step1_desc: "DUT Informatique obtenu en 2026 ; je poursuis en 3ᵉ année pour le BUT, parcours AGED (données).",
            step2_date: "2022 — 2024",
            step2_title: "Baccalauréat STI2D — Lycée Déodat de Séverac",
            step2_desc: "Spécialité SIN (Systèmes d'Information et Numérique). Obtenu avec mention.",
            step3_date: "2020",
            step3_title: "Débuts en programmation",
            step3_desc: "Apprentissage autodidacte : C, Arduino, développement Web.",
            langs_title: "Langues",
            langs: [
                { name: "Français", level: "Langue maternelle" },
                { name: "Portugais", level: "Bilingue" },
                { name: "Anglais", level: "B2" },
                { name: "Espagnol", level: "B2" }
            ],
            extras_title: "En dehors du code",
            extras: [
                { icon: "fa-solid fa-hand-holding-heart", text: "Bénévole régulier aux Restos du Cœur" },
                { icon: "fa-solid fa-children", text: "BAFA (2023) — colonies, centres de loisirs, tutorat" },
                { icon: "fa-solid fa-kit-medical", text: "Assistant sanitaire, formation PSC 1" },
                { icon: "fa-solid fa-cube", text: "Modélisation et impression 3D" }
            ]
        },
        experiences: {
            title: "Parcours & Réalisations",
            subtitle: "Mon alternance, mes projets de cours, mes compètes et ce que je bricole de mon côté. Voici l'essentiel — les filtres ouvrent le reste.",
            filters: {
                top: "L'essentiel",
                pro: "Professionnel",
                study: "Études",
                perso: "Perso",
                award: "Distinctions",
                all: "Tout voir"
            },
            seeAll: "Voir les {n} réalisations",
            empty: "Aucun projet dans cette catégorie.",
            items: [
                {
                    icon: "fa-solid fa-mobile-screen-button",
                    cat: "pro",
                    featured: true,
                    date: "2026 — Gembaware",
                    title: "Application mobile Flutter × Odoo",
                    context: "Gembaware — Alternance",
                    desc: "Application mobile complète en Flutter adossée à un back-end Odoo : messagerie instantanée (chatter temps réel), notifications push, fil d'actualités alimenté par scraping du site officiel et module de support client. Beaucoup d'API à concevoir, consommer et fiabiliser.",
                    tags: ["Flutter", "Dart", "Odoo", "API REST", "Push"]
                },
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    cat: "pro",
                    featured: true,
                    date: "2026 — Gembaware",
                    title: "Assistant de devis par IA (RAG)",
                    context: "Gembaware — Alternance",
                    desc: "IA branchée à Odoo qui répertorie les produits, retrouve les références similaires (RAG sur Qdrant, Mistral AI, orchestration n8n) et estime la probabilité de vente selon le prix et l'historique — jusqu'à générer le devis.",
                    tags: ["Mistral AI", "RAG", "Qdrant", "n8n", "Odoo"]
                },
                {
                    icon: "fa-solid fa-chart-line",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "Audit de performances & diagnostic client",
                    context: "Gembaware — Stage",
                    desc: "Analyse des logs applicatifs et des requêtes SQL lentes : traitement en Python, graphiques pour isoler les anomalies, tests d'API sous Postman. Restitution au client avec les causes identifiées et plusieurs pistes de correction.",
                    tags: ["Python", "Pandas", "SQL", "Postman", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-cubes",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "Connecteur ShippingBo & étiquettes ZPL",
                    context: "Gembaware — Stage",
                    desc: "Intégration entre ShippingBo et Odoo pour un client vendant sur plusieurs plateformes : synchronisation des commandes par API. En parallèle, génération d'étiquettes en ZPL (Zebra Programming Language) imprimées directement sur des imprimantes industrielles depuis Odoo.",
                    tags: ["Python", "Odoo", "API REST", "ZPL", "XML"]
                },
                {
                    icon: "fa-solid fa-wave-square",
                    cat: "study",
                    featured: true,
                    date: "2025 — Nuit de l'Informatique",
                    title: "Devier — visualisation audio temps réel",
                    context: "Hackathon Paul Sabatier — Équipe de 10",
                    award: "2ᵉ prix Capgemini — Visualisation audio",
                    desc: "Une nuit blanche, une équipe de 10, un site à livrer pour expliquer le NIRD. À deux, nous avons pris en charge la visualisation audio : des formes qui réagissent au son en direct dans le navigateur.",
                    link: "https://lycee-lovelace-nird.alwaysdata.net/",
                    linkLabel: "Voir le site",
                    tags: ["JavaScript", "Web Audio", "HTML/CSS", "Git"]
                },
                {
                    icon: "fa-solid fa-magnifying-glass-chart",
                    cat: "study",
                    featured: true,
                    date: "2025 — 2026",
                    title: "OpenFoodFacts — Nutri-Score estimé par IA",
                    context: "BUT Informatique — Projet SAE",
                    desc: "Traitement et visualisation des données OpenFoodFacts sous Power BI et Knime, puis un pipeline n8n qui estime le Nutri-Score des produits mal renseignés à partir d'aliments comparables. De la donnée brute et trouée jusqu'au tableau de bord exploitable.",
                    tags: ["Power BI", "Knime", "n8n", "IA", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-database",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Dashboard Oracle APEX — League of Legends",
                    context: "BUT Informatique — Projet SAE",
                    desc: "Application analytique low-code sur Oracle APEX : modélisation relationnelle et tableaux de bord statistiques sur les champions de League of Legends, avec requêtes PL/SQL avancées.",
                    tags: ["Oracle APEX", "PL/SQL", "SQL", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-globe",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Web — équipe sportive & webdocumentaire",
                    context: "BUT Informatique — Projets SAE",
                    desc: "Un site de gestion d'équipe sportive en PHP avec intégration d'API tierces, et un webdocumentaire interactif consacré aux vignerons du sud de la France.",
                    tags: ["PHP", "API", "HTML/CSS", "JavaScript"]
                },
                {
                    icon: "fa-solid fa-terminal",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Programmation système — proxy FTP en C & ADA",
                    context: "BUT Informatique — Projets SAE",
                    desc: "Un proxy FTP multi-client en C (sockets, parsing du protocole, gestion de la concurrence), puis un jeu de Sudoku et un système de gestion de parking en ADA — un langage à typage fort où rien ne compile sans rigueur.",
                    tags: ["C", "ADA", "Sockets", "Réseau"]
                },
                {
                    icon: "fa-solid fa-laptop-code",
                    cat: "study",
                    date: "2024 — 2025",
                    title: "Applications de gestion — Java & WinDev",
                    context: "BUT Informatique — 1ʳᵉ année",
                    desc: "En équipe de 5 (Agile/Scrum, Git) : une application de vente de graines de tomates et une application de gestion de biens immobiliers en Java (WindowBuilder sous Eclipse), base Oracle et tests JUnit. En solo : une application de prise de rendez-vous vétérinaire sous WinDev.",
                    tags: ["Java", "WindowBuilder", "WinDev", "Oracle SQL", "JUnit", "Agile/Scrum"]
                },
                {
                    icon: "fa-solid fa-satellite",
                    cat: "study",
                    featured: true,
                    date: "2023 — 2024",
                    title: "Proximars — serre à environnement contrôlé",
                    context: "Terminale STI2D SIN — Équipe de 5",
                    award: "Présenté au CNES (Toulouse) devant une centaine de personnes",
                    desc: "Serre pilotée pour maintenir un environnement viable — chauffage, éclairage, arrosage — avec l'hypothèse de faire pousser des plantes sur Mars. Seul informaticien et électricien de l'équipe : Arduino Uno/Mega, capteurs, régulation calée sur les consignes de mes camarades en spécialité développement durable, et une application mobile pour suivre les mesures et régler la serre à distance.",
                    link: "https://www.youtube.com/watch?v=ktuTW-eHiIU",
                    linkLabel: "Voir la vidéo",
                    tags: ["C/C++", "Arduino", "Capteurs", "IoT", "App mobile"]
                },
                {
                    icon: "fa-solid fa-robot",
                    cat: "study",
                    featured: true,
                    date: "2022 — 2023",
                    title: "Robot Sumo télécommandé",
                    context: "Première STI2D SIN — Équipe de 5",
                    award: "Prix de la télécommunication — Olympiades Paul Sabatier 2022",
                    desc: "Robot Arduino piloté à distance, capable aussi de suivre une ligne grâce à ses capteurs. Seul sur la partie informatique et électricité de l'équipe, j'ai conçu la télécommande : une application mobile avec joystick et boutons, reliée au robot sans fil.",
                    tags: ["Arduino", "C/C++", "App mobile", "Capteurs", "Électronique"]
                },
                {
                    icon: "fa-solid fa-server",
                    cat: "perso",
                    date: "2024 — Présent",
                    title: "Home lab & auto-hébergement",
                    context: "Projet personnel",
                    desc: "Un Raspberry Pi sous Linux qui fait tourner, en Docker, mon serveur mail (contact@victorsimonet.com) et plusieurs sites web — dont ce portfolio, sur mon propre nom de domaine. VMs Debian/Ubuntu, DNS, reverse proxy, certificats TLS : de l'infra que j'administre pour de vrai, pas en TP.",
                    tags: ["Linux", "Docker", "Raspberry Pi", "DNS", "Self-hosting"]
                },
                {
                    icon: "fa-solid fa-cube",
                    cat: "perso",
                    date: "2024 — Présent",
                    title: "Modélisation & impression 3D",
                    context: "Projet personnel",
                    desc: "Conception de pièces sous Blender et FreeCAD, puis découpe et impression avec Bambu Studio. Pratique pour donner un boîtier propre à mes montages électroniques.",
                    tags: ["Blender", "FreeCAD", "Bambu Studio", "CAO"]
                },
                {
                    icon: "fa-solid fa-hand-holding-heart",
                    cat: "perso",
                    date: "Bénévolat",
                    title: "Macro Excel — suivi des stocks",
                    context: "Restos du Cœur",
                    desc: "Bénévole régulier aux Restos du Cœur. J'y ai développé une macro Excel qui automatise le suivi des stocks et allège la logistique du centre, en suivant le cahier des charges des responsables.",
                    tags: ["Excel", "VBA", "Automatisation"]
                }
            ]
        },
        stats: {
            repos: "Dépôts",
            languages: "Langages"
        },
        projects: {
            title: "Projets GitHub",
            more: "Voir tous les dépôts sur GitHub",
            updated: "Mis à jour le",
            demo: "Démo",
            loading: "Chargement des projets",
            featured: "Coup de cœur",
            error: "Projets temporairement indisponibles (limite GitHub atteinte).",
            errorLink: "Voir sur GitHub"
        },
        current: {
            sam_title: "Sam — IA personnelle 100 % locale",
            sam_status: "En création",
            sam_desc: "Mon assistant IA auto-hébergé, 100 % local : Gemma via Ollama sur GPU AMD (ROCm), interface Open WebUI, et une mémoire persistante maison — embeddings nomic-embed-text dans Qdrant, rappel sémantique (RAG) à chaque message. Aucune donnée ne quitte mes machines.",
            mail_title: "Serveur mail auto-hébergé",
            mail_status: "En production",
            mail_desc: "Messagerie auto-hébergée sur Raspberry Pi (docker-mailserver) : TLS Let's Encrypt, relais SMTP Brevo, exposée via Cloudflare Tunnel + Caddy. Adresse contact@victorsimonet.com.",
            vicrasti_title: "Vicrasti — gestion du temps assistée par IA",
            vicrasti_status: "En développement",
            vicrasti_desc: "Application mobile de gestion du temps avec un assistant IA intégré : catégories, priorités, suivi de progression, et une IA qui aide à planifier la journée."
        },
        now: {
            title: "En ce moment",
            subtitle: "Mes chantiers du moment, en dehors de l'alternance."
        },
        contact: {
            title: "On échange ?",
            text: "Je suis en alternance chez Gembaware jusqu'à l'été 2027, mais toujours partant pour parler tech, projets perso ou collaborations. Une question, une idée ? Écrivez-moi, je réponds vite.",
            btn: "Envoyer un email"
        },
        footer: {
            credit: "Codé par",
            sam: "épaulé par Sam, mon IA"
        },
        typing: [
            "Développeur Odoo @ Gembaware",
            "Modules, connecteurs et API",
            "De l'ERP à l'IA appliquée",
            "RAG, Odoo, Flutter et un Raspberry Pi"
        ]
    },

    en: {
        btn: "EN",
        htmlLang: "en",
        locale: "en-US",
        nav: {
            about: "About",
            work: "Background",
            now: "Right now",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            status: "Two-year degree in hand · apprentice at Gembaware, an Odoo integrator",
            h1: "Sam, my 100% local AI",
            h2: "Odoo developer apprentice",
            h3: "Proximars presented at CNES",
            desc: "CS student in Toulouse, two-year degree already in hand. On a work-study contract at Gembaware, an Odoo integrator, I build Odoo modules and connectors in Python, a Flutter mobile app on top of the ERP, and I wire applied AI into it (RAG on Qdrant, Mistral AI). What gets me going: turning raw data and documents into something useful.",
            cta: "View projects",
            cv: "Download resume",
            letter: "Download cover letter"
        },
        about: {
            label: "About",
            bio: "I earned my two-year DUT in Computer Science at IUT Paul Sabatier (Toulouse) and I'm now in the third year to complete the BUT, on the AGED track — data administration, management and exploitation. Since April 2026 I've been at Gembaware, an Odoo integrator: first as an intern, now on a work-study contract until I graduate. I build Odoo modules and connectors in Python for several clients — a ShippingBo connector, ZPL labels — a Flutter mobile app on top of the ERP, and I wire applied AI into it: a quote assistant using RAG on Qdrant with Mistral AI and n8n. Before that: a STI2D baccalaureate majoring in Information Systems, with honours, two award-winning projects (Paul Sabatier Olympiads, Nuit de l'Informatique) and a Martian greenhouse presented at CNES. At home, a Raspberry Pi hosts my mail server and my websites, and Sam — my 100% local AI — runs on my GPU. What drives me: turning raw data into something useful.",
            stack_title: "My toolbox",
            stack: [
                {
                    label: "Data & AI",
                    tags: ["Python", "Pandas", "Matplotlib", "Power BI", "Knime", "RAG", "Qdrant", "Mistral AI", "Ollama", "n8n"]
                },
                {
                    label: "Databases",
                    tags: ["Oracle SQL", "PL/SQL", "Oracle APEX", "HeidiSQL", "Access", "Odoo / ERP"]
                },
                {
                    label: "Languages",
                    tags: ["Java", "C", "C++", "ADA", "PHP", "JavaScript", "HTML/CSS", "Bash"]
                },
                {
                    label: "Apps & embedded",
                    tags: ["Flutter / Dart", "Android Studio", "Arduino", "ZPL", "WindowBuilder", "WinDev"]
                },
                {
                    label: "Tools & infra",
                    tags: ["Git", "Docker", "Linux", "VirtualBox", "Postman", "Agile / Scrum", "VS Code", "Eclipse", "JUnit", "Blender / FreeCAD"]
                }
            ],
            job2_date: "July 2026 — August 2027",
            job2_title: "Work-study at Gembaware",
            job2_desc: "Odoo development for several clients, a Flutter mobile app and AI applied to the ERP.",
            job_date: "April 2026 — July 2026",
            job_title: "Internship at Gembaware",
            job_desc: "First taste of the job inside a real team: Odoo, APIs, AI and data analysis.",
            step1_date: "2024 — 2027",
            step1_title: "Final year (BUT) — Paul Sabatier, Toulouse",
            step1_desc: "Two-year DUT obtained in 2026; now in the third year for the BUT, AGED (data) track.",
            step2_date: "2022 — 2024",
            step2_title: "STI2D Baccalaureate — Lycée Déodat de Séverac",
            step2_desc: "Majoring in Information Systems and Digital Technology (SIN). Passed with honours.",
            step3_date: "2020",
            step3_title: "Started programming",
            step3_desc: "Self-taught: C, Arduino, web development.",
            langs_title: "Languages",
            langs: [
                { name: "French", level: "Native" },
                { name: "Portuguese", level: "Bilingual" },
                { name: "English", level: "B2" },
                { name: "Spanish", level: "B2" }
            ],
            extras_title: "Outside the code",
            extras: [
                { icon: "fa-solid fa-hand-holding-heart", text: "Regular volunteer at Restos du Cœur" },
                { icon: "fa-solid fa-children", text: "BAFA youth-leader diploma (2023) — summer camps, day care, tutoring" },
                { icon: "fa-solid fa-kit-medical", text: "Camp health officer, PSC 1 first-aid certified" },
                { icon: "fa-solid fa-cube", text: "3D modelling and printing" }
            ]
        },
        experiences: {
            title: "Background & Achievements",
            subtitle: "My apprenticeship, my coursework, my competitions and the things I tinker with on my own. Here are the highlights — the filters open up the rest.",
            filters: {
                top: "Highlights",
                pro: "Professional",
                study: "Studies",
                perso: "Personal",
                award: "Awards",
                all: "See all"
            },
            seeAll: "See all {n} achievements",
            empty: "No project in this category.",
            items: [
                {
                    icon: "fa-solid fa-mobile-screen-button",
                    cat: "pro",
                    featured: true,
                    date: "2026 — Gembaware",
                    title: "Flutter × Odoo mobile app",
                    context: "Gembaware — Work-study",
                    desc: "A complete Flutter mobile app on an Odoo back-end: real-time chat, push notifications, a news feed fed by scraping the official website, and a customer-support module. Plenty of APIs to design, consume and harden.",
                    tags: ["Flutter", "Dart", "Odoo", "REST API", "Push"]
                },
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    cat: "pro",
                    featured: true,
                    date: "2026 — Gembaware",
                    title: "AI-powered quote assistant (RAG)",
                    context: "Gembaware — Work-study",
                    desc: "An AI wired into Odoo that catalogues products, retrieves similar references (RAG on Qdrant, Mistral AI, n8n orchestration) and estimates the likelihood of a sale from price and history — all the way to drafting the quote.",
                    tags: ["Mistral AI", "RAG", "Qdrant", "n8n", "Odoo"]
                },
                {
                    icon: "fa-solid fa-chart-line",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "Performance audit & client diagnosis",
                    context: "Gembaware — Internship",
                    desc: "Analysis of application logs and slow SQL queries: processing in Python, charts to isolate the anomalies, API testing with Postman. Delivered to the client with the root causes and several remediation options.",
                    tags: ["Python", "Pandas", "SQL", "Postman", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-cubes",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "ShippingBo connector & ZPL labels",
                    context: "Gembaware — Internship",
                    desc: "Integration between ShippingBo and Odoo for a client selling across several marketplaces: order synchronisation over API. In parallel, label generation in ZPL (Zebra Programming Language), printed straight to industrial printers from Odoo.",
                    tags: ["Python", "Odoo", "REST API", "ZPL", "XML"]
                },
                {
                    icon: "fa-solid fa-wave-square",
                    cat: "study",
                    featured: true,
                    date: "2025 — Nuit de l'Informatique",
                    title: "Devier — real-time audio visualisation",
                    context: "Paul Sabatier hackathon — Team of 10",
                    award: "2nd place, Capgemini audio-visualisation prize",
                    desc: "One all-nighter, a team of 10, a website to ship explaining the NIRD. Two of us took on the audio visualisation: shapes reacting to sound live in the browser.",
                    link: "https://lycee-lovelace-nird.alwaysdata.net/",
                    linkLabel: "Visit the site",
                    tags: ["JavaScript", "Web Audio", "HTML/CSS", "Git"]
                },
                {
                    icon: "fa-solid fa-magnifying-glass-chart",
                    cat: "study",
                    featured: true,
                    date: "2025 — 2026",
                    title: "OpenFoodFacts — AI-estimated Nutri-Score",
                    context: "CS Degree — SAE project",
                    desc: "Processing and visualising OpenFoodFacts data in Power BI and Knime, then an n8n pipeline that estimates the Nutri-Score of poorly documented products from comparable foods. From raw, gap-ridden data to a usable dashboard.",
                    tags: ["Power BI", "Knime", "n8n", "AI", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-database",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Oracle APEX dashboard — League of Legends",
                    context: "CS Degree — SAE project",
                    desc: "Low-code analytics app on Oracle APEX: relational modelling and statistical dashboards on League of Legends champions, with advanced PL/SQL queries.",
                    tags: ["Oracle APEX", "PL/SQL", "SQL", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-globe",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Web — sports team manager & webdocumentary",
                    context: "CS Degree — SAE projects",
                    desc: "A sports-team management site in PHP with third-party API integration, and an interactive webdocumentary about winemakers in the south of France.",
                    tags: ["PHP", "API", "HTML/CSS", "JavaScript"]
                },
                {
                    icon: "fa-solid fa-terminal",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Systems programming — FTP proxy in C & ADA",
                    context: "CS Degree — SAE projects",
                    desc: "A multi-client FTP proxy in C (sockets, protocol parsing, concurrency), then a Sudoku game and a car-park management system in ADA — a strongly typed language where nothing compiles without rigour.",
                    tags: ["C", "ADA", "Sockets", "Network"]
                },
                {
                    icon: "fa-solid fa-laptop-code",
                    cat: "study",
                    date: "2024 — 2025",
                    title: "Management apps — Java & WinDev",
                    context: "CS Degree — 1st year",
                    desc: "In a team of 5 (Agile/Scrum, Git): a tomato-seed sales app and a real-estate management app in Java (WindowBuilder on Eclipse), Oracle database and JUnit tests. Solo: a veterinary appointment-booking app in WinDev.",
                    tags: ["Java", "WindowBuilder", "WinDev", "Oracle SQL", "JUnit", "Agile/Scrum"]
                },
                {
                    icon: "fa-solid fa-satellite",
                    cat: "study",
                    featured: true,
                    date: "2023 — 2024",
                    title: "Proximars — controlled-environment greenhouse",
                    context: "Final year STI2D SIN — Team of 5",
                    award: "Presented at CNES (Toulouse) to an audience of around a hundred",
                    desc: "A greenhouse regulated to keep a viable environment — heating, lighting, watering — on the premise of growing plants on Mars. Sole developer and electrician on the team: Arduino Uno/Mega, sensors, regulation tuned to the specs from my sustainable-development classmates, plus a mobile app to follow the readings and adjust the greenhouse remotely.",
                    link: "https://www.youtube.com/watch?v=ktuTW-eHiIU",
                    linkLabel: "Watch the video",
                    tags: ["C/C++", "Arduino", "Sensors", "IoT", "Mobile app"]
                },
                {
                    icon: "fa-solid fa-robot",
                    cat: "study",
                    featured: true,
                    date: "2022 — 2023",
                    title: "Remote-controlled sumo robot",
                    context: "Junior year STI2D SIN — Team of 5",
                    award: "Telecommunication prize — Paul Sabatier Olympiads 2022",
                    desc: "An Arduino robot driven remotely, and able to follow a line thanks to its sensors. Alone on the software and electronics side of the team, I designed the controller: a mobile app with a joystick and buttons, linked to the robot wirelessly.",
                    tags: ["Arduino", "C/C++", "Mobile app", "Sensors", "Electronics"]
                },
                {
                    icon: "fa-solid fa-server",
                    cat: "perso",
                    date: "2024 — Present",
                    title: "Home lab & self-hosting",
                    context: "Personal project",
                    desc: "A Raspberry Pi running Linux that serves, through Docker, my mail server (contact@victorsimonet.com) and several websites — including this portfolio, on my own domain name. Debian/Ubuntu VMs, DNS, reverse proxy, TLS certificates: infrastructure I actually run, not a lab exercise.",
                    tags: ["Linux", "Docker", "Raspberry Pi", "DNS", "Self-hosting"]
                },
                {
                    icon: "fa-solid fa-cube",
                    cat: "perso",
                    date: "2024 — Present",
                    title: "3D modelling & printing",
                    context: "Personal project",
                    desc: "Designing parts in Blender and FreeCAD, then slicing and printing with Bambu Studio. Handy for giving my electronics builds a proper enclosure.",
                    tags: ["Blender", "FreeCAD", "Bambu Studio", "CAD"]
                },
                {
                    icon: "fa-solid fa-hand-holding-heart",
                    cat: "perso",
                    date: "Volunteering",
                    title: "Excel macro — stock tracking",
                    context: "Restos du Cœur",
                    desc: "Regular volunteer at Restos du Cœur, the French food-aid charity. I built an Excel macro there that automates stock tracking and lightens the centre's logistics, following the coordinators' specification.",
                    tags: ["Excel", "VBA", "Automation"]
                }
            ]
        },
        stats: {
            repos: "Repos",
            languages: "Languages"
        },
        projects: {
            title: "GitHub Projects",
            more: "See all repositories on GitHub",
            updated: "Updated on",
            demo: "Demo",
            loading: "Loading projects",
            featured: "Favorite",
            error: "Projects temporarily unavailable (GitHub rate limit reached).",
            errorLink: "View on GitHub"
        },
        current: {
            sam_title: "Sam — 100% local personal AI",
            sam_status: "In the works",
            sam_desc: "My self-hosted AI assistant, fully local: Gemma via Ollama on an AMD GPU (ROCm), Open WebUI front-end, and a custom persistent memory — nomic-embed-text embeddings in Qdrant, semantic recall (RAG) on every message. No data ever leaves my machines.",
            mail_title: "Self-hosted mail server",
            mail_status: "In production",
            mail_desc: "Self-hosted mail on a Raspberry Pi (docker-mailserver): Let's Encrypt TLS, Brevo SMTP relay, exposed through Cloudflare Tunnel + Caddy. Address contact@victorsimonet.com.",
            vicrasti_title: "Vicrasti — AI-assisted time management",
            vicrasti_status: "In development",
            vicrasti_desc: "A mobile time-management app with a built-in AI assistant: categories, priorities, progress tracking, and an AI that helps plan the day."
        },
        now: {
            title: "Right now",
            subtitle: "What I'm building at the moment, outside of work."
        },
        contact: {
            title: "Let's chat",
            text: "I'm on a work-study contract at Gembaware until summer 2027, but always up for talking tech, side projects or collaborations. Got a question or an idea? Drop me a line, I reply fast.",
            btn: "Send an email"
        },
        footer: {
            credit: "Coded by",
            sam: "with a hand from Sam, my AI"
        },
        typing: [
            "Odoo developer @ Gembaware",
            "Modules, connectors and APIs",
            "From the ERP to applied AI",
            "RAG, Odoo, Flutter and a Raspberry Pi"
        ]
    },

    pt: {
        btn: "PT",
        htmlLang: "pt",
        locale: "pt-BR",
        nav: {
            about: "Sobre",
            work: "Trajetória",
            now: "Agora",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            status: "DUT concluído · em alternância na Gembaware, integradora Odoo",
            h1: "Sam, minha IA 100% local",
            h2: "Aprendiz de desenvolvedor Odoo",
            h3: "Proximars apresentado no CNES",
            desc: "Estudante de Informática em Toulouse, com o DUT já concluído. Em alternância na Gembaware, integradora Odoo, desenvolvo módulos e conectores Odoo em Python, um aplicativo mobile Flutter sobre o ERP, e integro IA aplicada (RAG no Qdrant, Mistral AI). O que me empolga: transformar dados e documentos brutos em algo útil.",
            cta: "Ver projetos",
            cv: "Baixar currículo",
            letter: "Baixar carta de apresentação"
        },
        about: {
            label: "Sobre",
            bio: "Concluí meu DUT em Informática no IUT Paul Sabatier (Toulouse) e sigo no 3º ano para obter o BUT, na trilha AGED — administração, gestão e exploração de dados. Desde abril de 2026 estou na Gembaware, integradora Odoo: primeiro como estagiário, agora em alternância até me formar. Desenvolvo módulos e conectores Odoo em Python para vários clientes — conector ShippingBo, etiquetas ZPL — um aplicativo mobile Flutter sobre o ERP, e integro IA aplicada: um assistente de orçamentos em RAG no Qdrant com Mistral AI e n8n. Antes disso: um bacharelado técnico STI2D com especialidade em Sistemas de Informação, com menção, dois projetos premiados (Olimpíadas Paul Sabatier, Nuit de l'Informatique) e uma estufa marciana apresentada no CNES. Em casa, um Raspberry Pi hospeda meu servidor de email e meus sites, e o Sam — minha IA 100% local — roda na minha GPU. O que me motiva: transformar dados brutos em algo útil.",
            stack_title: "Minha caixa de ferramentas",
            stack: [
                {
                    label: "Data & IA",
                    tags: ["Python", "Pandas", "Matplotlib", "Power BI", "Knime", "RAG", "Qdrant", "Mistral AI", "Ollama", "n8n"]
                },
                {
                    label: "Bancos de dados",
                    tags: ["Oracle SQL", "PL/SQL", "Oracle APEX", "HeidiSQL", "Access", "Odoo / ERP"]
                },
                {
                    label: "Linguagens",
                    tags: ["Java", "C", "C++", "ADA", "PHP", "JavaScript", "HTML/CSS", "Bash"]
                },
                {
                    label: "Apps & embarcados",
                    tags: ["Flutter / Dart", "Android Studio", "Arduino", "ZPL", "WindowBuilder", "WinDev"]
                },
                {
                    label: "Ferramentas & infra",
                    tags: ["Git", "Docker", "Linux", "VirtualBox", "Postman", "Agile / Scrum", "VS Code", "Eclipse", "JUnit", "Blender / FreeCAD"]
                }
            ],
            job2_date: "Julho 2026 — Agosto 2027",
            job2_title: "Alternância na Gembaware",
            job2_desc: "Desenvolvimento Odoo para vários clientes, app mobile Flutter e IA aplicada ao ERP.",
            job_date: "Abril 2026 — Julho 2026",
            job_title: "Estágio na Gembaware",
            job_desc: "Primeiro contato com a profissão dentro de uma equipe de verdade: Odoo, APIs, IA e análise de dados.",
            step1_date: "2024 — 2027",
            step1_title: "3º ano (BUT) — Paul Sabatier, Toulouse",
            step1_desc: "DUT concluído em 2026; sigo no 3º ano para o BUT, trilha AGED (dados).",
            step2_date: "2022 — 2024",
            step2_title: "Bacharelado Tecnológico STI2D — Liceu Déodat de Séverac",
            step2_desc: "Especialidade SIN (Sistemas de Informação e Digital). Concluído com menção.",
            step3_date: "2020",
            step3_title: "Início na programação",
            step3_desc: "Aprendizado autodidata: C, Arduino, desenvolvimento web.",
            langs_title: "Idiomas",
            langs: [
                { name: "Francês", level: "Língua materna" },
                { name: "Português", level: "Bilíngue" },
                { name: "Inglês", level: "B2" },
                { name: "Espanhol", level: "B2" }
            ],
            extras_title: "Fora do código",
            extras: [
                { icon: "fa-solid fa-hand-holding-heart", text: "Voluntário regular nos Restos du Cœur" },
                { icon: "fa-solid fa-children", text: "Diploma BAFA (2023) — colônias de férias, creches, tutoria" },
                { icon: "fa-solid fa-kit-medical", text: "Assistente sanitário, formação PSC 1 em primeiros socorros" },
                { icon: "fa-solid fa-cube", text: "Modelagem e impressão 3D" }
            ]
        },
        experiences: {
            title: "Trajetória & Realizações",
            subtitle: "Minha alternância, meus projetos de curso, minhas competições e o que eu mexo por conta própria. Aqui vai o essencial — os filtros abrem o resto.",
            filters: {
                top: "Destaques",
                pro: "Profissional",
                study: "Estudos",
                perso: "Pessoal",
                award: "Prêmios",
                all: "Ver tudo"
            },
            seeAll: "Ver as {n} realizações",
            empty: "Nenhum projeto nesta categoria.",
            items: [
                {
                    icon: "fa-solid fa-mobile-screen-button",
                    cat: "pro",
                    featured: true,
                    date: "2026 — Gembaware",
                    title: "Aplicativo mobile Flutter × Odoo",
                    context: "Gembaware — Alternância",
                    desc: "Aplicativo mobile completo em Flutter sobre um back-end Odoo: chat em tempo real, notificações push, feed de notícias alimentado por scraping do site oficial e módulo de suporte ao cliente. Muitas APIs para projetar, consumir e tornar confiáveis.",
                    tags: ["Flutter", "Dart", "Odoo", "API REST", "Push"]
                },
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    cat: "pro",
                    featured: true,
                    date: "2026 — Gembaware",
                    title: "Assistente de orçamentos com IA (RAG)",
                    context: "Gembaware — Alternância",
                    desc: "IA integrada ao Odoo que cataloga produtos, recupera referências semelhantes (RAG no Qdrant, Mistral AI, orquestração n8n) e estima a probabilidade de venda a partir do preço e do histórico — até gerar o orçamento.",
                    tags: ["Mistral AI", "RAG", "Qdrant", "n8n", "Odoo"]
                },
                {
                    icon: "fa-solid fa-chart-line",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "Auditoria de desempenho & diagnóstico",
                    context: "Gembaware — Estágio",
                    desc: "Análise dos logs da aplicação e das consultas SQL lentas: processamento em Python, gráficos para isolar as anomalias, testes de API no Postman. Apresentação ao cliente com as causas identificadas e várias vias de correção.",
                    tags: ["Python", "Pandas", "SQL", "Postman", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-cubes",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "Conector ShippingBo & etiquetas ZPL",
                    context: "Gembaware — Estágio",
                    desc: "Integração entre ShippingBo e Odoo para um cliente que vende em várias plataformas: sincronização de pedidos por API. Em paralelo, geração de etiquetas em ZPL (Zebra Programming Language), impressas direto em impressoras industriais a partir do Odoo.",
                    tags: ["Python", "Odoo", "API REST", "ZPL", "XML"]
                },
                {
                    icon: "fa-solid fa-wave-square",
                    cat: "study",
                    featured: true,
                    date: "2025 — Nuit de l'Informatique",
                    title: "Devier — visualização de áudio em tempo real",
                    context: "Hackathon Paul Sabatier — Equipe de 10",
                    award: "2º lugar no prêmio Capgemini de visualização de áudio",
                    desc: "Uma noite em claro, uma equipe de 10, um site para entregar explicando o NIRD. Em dois, assumimos a visualização de áudio: formas que reagem ao som ao vivo no navegador.",
                    link: "https://lycee-lovelace-nird.alwaysdata.net/",
                    linkLabel: "Ver o site",
                    tags: ["JavaScript", "Web Audio", "HTML/CSS", "Git"]
                },
                {
                    icon: "fa-solid fa-magnifying-glass-chart",
                    cat: "study",
                    featured: true,
                    date: "2025 — 2026",
                    title: "OpenFoodFacts — Nutri-Score estimado por IA",
                    context: "Graduação — Projeto SAE",
                    desc: "Tratamento e visualização dos dados do OpenFoodFacts em Power BI e Knime, e um pipeline n8n que estima o Nutri-Score de produtos mal documentados a partir de alimentos comparáveis. Do dado bruto e cheio de lacunas até um dashboard utilizável.",
                    tags: ["Power BI", "Knime", "n8n", "IA", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-database",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Dashboard Oracle APEX — League of Legends",
                    context: "Graduação — Projeto SAE",
                    desc: "Aplicação analítica low-code em Oracle APEX: modelagem relacional e dashboards estatísticos sobre os campeões de League of Legends, com consultas PL/SQL avançadas.",
                    tags: ["Oracle APEX", "PL/SQL", "SQL", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-globe",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Web — gestão de equipe esportiva & webdocumentário",
                    context: "Graduação — Projetos SAE",
                    desc: "Um site de gestão de equipe esportiva em PHP com integração de APIs de terceiros, e um webdocumentário interativo sobre os viticultores do sul da França.",
                    tags: ["PHP", "API", "HTML/CSS", "JavaScript"]
                },
                {
                    icon: "fa-solid fa-terminal",
                    cat: "study",
                    date: "2025 — 2026",
                    title: "Programação de sistemas — proxy FTP em C & ADA",
                    context: "Graduação — Projetos SAE",
                    desc: "Um proxy FTP multi-cliente em C (sockets, parsing de protocolo, concorrência), e depois um jogo de Sudoku e um sistema de gestão de estacionamento em ADA — uma linguagem de tipagem forte onde nada compila sem rigor.",
                    tags: ["C", "ADA", "Sockets", "Rede"]
                },
                {
                    icon: "fa-solid fa-laptop-code",
                    cat: "study",
                    date: "2024 — 2025",
                    title: "Aplicações de gestão — Java & WinDev",
                    context: "Graduação — 1º ano",
                    desc: "Em equipe de 5 (Agile/Scrum, Git): uma aplicação de venda de sementes de tomate e uma de gestão de imóveis em Java (WindowBuilder no Eclipse), base Oracle e testes JUnit. Sozinho: uma aplicação de agendamento veterinário em WinDev.",
                    tags: ["Java", "WindowBuilder", "WinDev", "Oracle SQL", "JUnit", "Agile/Scrum"]
                },
                {
                    icon: "fa-solid fa-satellite",
                    cat: "study",
                    featured: true,
                    date: "2023 — 2024",
                    title: "Proximars — estufa de ambiente controlado",
                    context: "Último ano STI2D SIN — Equipe de 5",
                    award: "Apresentado no CNES (Toulouse) para cerca de cem pessoas",
                    desc: "Estufa regulada para manter um ambiente viável — aquecimento, iluminação, irrigação — com a premissa de cultivar plantas em Marte. Único desenvolvedor e eletricista da equipe: Arduino Uno/Mega, sensores, regulação ajustada às especificações dos colegas de desenvolvimento sustentável, além de um aplicativo mobile para acompanhar as medições e ajustar a estufa à distância.",
                    link: "https://www.youtube.com/watch?v=ktuTW-eHiIU",
                    linkLabel: "Ver o vídeo",
                    tags: ["C/C++", "Arduino", "Sensores", "IoT", "App mobile"]
                },
                {
                    icon: "fa-solid fa-robot",
                    cat: "study",
                    featured: true,
                    date: "2022 — 2023",
                    title: "Robô de sumô por controle remoto",
                    context: "1º ano STI2D SIN — Equipe de 5",
                    award: "Prêmio de telecomunicação — Olimpíadas Paul Sabatier 2022",
                    desc: "Robô Arduino pilotado à distância e capaz de seguir uma linha graças aos seus sensores. Sozinho na parte de software e eletrônica da equipe, projetei o controle: um aplicativo mobile com joystick e botões, ligado ao robô sem fio.",
                    tags: ["Arduino", "C/C++", "App mobile", "Sensores", "Eletrônica"]
                },
                {
                    icon: "fa-solid fa-server",
                    cat: "perso",
                    date: "2024 — Presente",
                    title: "Home lab & auto-hospedagem",
                    context: "Projeto pessoal",
                    desc: "Um Raspberry Pi com Linux que roda, em Docker, meu servidor de email (contact@victorsimonet.com) e vários sites — inclusive este portfólio, no meu próprio domínio. VMs Debian/Ubuntu, DNS, reverse proxy, certificados TLS: infraestrutura que eu administro de verdade, não em laboratório.",
                    tags: ["Linux", "Docker", "Raspberry Pi", "DNS", "Self-hosting"]
                },
                {
                    icon: "fa-solid fa-cube",
                    cat: "perso",
                    date: "2024 — Presente",
                    title: "Modelagem & impressão 3D",
                    context: "Projeto pessoal",
                    desc: "Criação de peças em Blender e FreeCAD, depois fatiamento e impressão com o Bambu Studio. Útil para dar uma caixa decente às minhas montagens eletrônicas.",
                    tags: ["Blender", "FreeCAD", "Bambu Studio", "CAD"]
                },
                {
                    icon: "fa-solid fa-hand-holding-heart",
                    cat: "perso",
                    date: "Voluntariado",
                    title: "Macro Excel — controle de estoque",
                    context: "Restos du Cœur",
                    desc: "Voluntário regular nos Restos du Cœur, entidade francesa de ajuda alimentar. Desenvolvi ali uma macro Excel que automatiza o controle de estoque e alivia a logística do centro, seguindo as especificações dos responsáveis.",
                    tags: ["Excel", "VBA", "Automação"]
                }
            ]
        },
        stats: {
            repos: "Repos",
            languages: "Linguagens"
        },
        projects: {
            title: "Projetos GitHub",
            more: "Ver todos os repositórios no GitHub",
            updated: "Atualizado em",
            demo: "Demo",
            loading: "Carregando projetos",
            featured: "Favorito",
            error: "Projetos temporariamente indisponíveis (limite do GitHub atingido).",
            errorLink: "Ver no GitHub"
        },
        current: {
            sam_title: "Sam — IA pessoal 100% local",
            sam_status: "Em criação",
            sam_desc: "Meu assistente de IA auto-hospedado, 100% local: Gemma via Ollama em GPU AMD (ROCm), interface Open WebUI, e uma memória persistente própria — embeddings nomic-embed-text no Qdrant, recuperação semântica (RAG) a cada mensagem. Nenhum dado sai das minhas máquinas.",
            mail_title: "Servidor de email auto-hospedado",
            mail_status: "Em produção",
            mail_desc: "Email auto-hospedado num Raspberry Pi (docker-mailserver): TLS Let's Encrypt, relay SMTP Brevo, exposto via Cloudflare Tunnel + Caddy. Endereço contact@victorsimonet.com.",
            vicrasti_title: "Vicrasti — gestão do tempo com IA",
            vicrasti_status: "Em desenvolvimento",
            vicrasti_desc: "Aplicativo mobile de gestão do tempo com um assistente de IA integrado: categorias, prioridades, acompanhamento de progresso e uma IA que ajuda a planejar o dia."
        },
        now: {
            title: "Agora mesmo",
            subtitle: "Meus projetos do momento, fora da alternância."
        },
        contact: {
            title: "Vamos conversar?",
            text: "Estou em alternância na Gembaware até o verão de 2027, mas sempre a fim de falar sobre tech, projetos pessoais ou colaborações. Uma dúvida ou ideia? Me escreve, respondo rápido.",
            btn: "Enviar email"
        },
        footer: {
            credit: "Feito por",
            sam: "com a ajuda do Sam, minha IA"
        },
        typing: [
            "Desenvolvedor Odoo @ Gembaware",
            "Módulos, conectores e APIs",
            "Do ERP à IA aplicada",
            "RAG, Odoo, Flutter e um Raspberry Pi"
        ]
    }
};
