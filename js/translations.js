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
            status: "En alternance chez Gembaware · 3ᵉ année de BUT",
            h1: "Sam, mon IA 100 % locale",
            h2: "Alternant Data & IA",
            h3: "Proximars présenté au CNES",
            desc: "Étudiant en BUT Informatique à Toulouse, branché data & IA appliquée. En alternance chez Gembaware, je construis un assistant de devis par IA (Mistral AI, RAG sur Qdrant, n8n branché à Odoo), une application mobile Flutter et des analyses de performance en Python. Ce qui me fait vibrer : transformer des données et des documents bruts en quelque chose d'utile.",
            cta: "Voir mes projets",
            cv: "Télécharger CV",
            letter: "Télécharger lettre de motivation"
        },
        about: {
            label: "À propos",
            bio: "Je démarre ma 3ᵉ année de BUT Informatique à l'IUT Paul Sabatier (Toulouse), parcours AGED — administration, gestion et exploitation des données. Depuis avril 2026 je suis chez Gembaware, d'abord en stage puis en alternance jusqu'à la fin de mon diplôme : j'y ai construit un assistant de devis par IA (Mistral AI, RAG sur Qdrant, orchestration n8n sur Odoo), une application mobile Flutter complète, un connecteur ShippingBo et des audits de performance en Python. Avant ça : un bac STI2D spécialité SIN avec mention, deux projets primés (Olympiades Paul Sabatier, Nuit de l'Informatique) et une serre martienne présentée au CNES. À la maison, un Raspberry Pi héberge mon serveur mail et mes sites, et Sam — mon IA 100 % locale — tourne sur mon GPU. Ce qui me motive : passer de la donnée brute à quelque chose d'utile.",
            stack_title: "Ma boîte à outils",
            job2_date: "Juillet 2026 — Août 2027",
            job2_title: "Alternance chez Gembaware",
            job2_desc: "Je poursuis en alternance jusqu'à la fin de mon BUT : IA appliquée, développement Odoo et mobile.",
            job_date: "Avril 2026 — Juillet 2026",
            job_title: "Stage chez Gembaware",
            job_desc: "Premier contact avec le métier au sein d'une vraie équipe : Odoo, API, IA et analyse de données.",
            step1_date: "2024 — 2027",
            step1_title: "BUT Informatique — Paul Sabatier, Toulouse",
            step1_desc: "Parcours AGED (administration, gestion et exploitation des données). 3ᵉ année en cours.",
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
            subtitle: "Mon alternance, mes projets de cours, mes compètes et ce que je bricole de mon côté.",
            filters: {
                all: "Tout",
                pro: "Professionnel",
                study: "Études",
                perso: "Perso",
                award: "Distinctions"
            },
            empty: "Aucun projet dans cette catégorie.",
            items: [
                {
                    icon: "fa-solid fa-mobile-screen-button",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "Application mobile Flutter × Odoo",
                    context: "Gembaware — Alternance",
                    desc: "Application mobile complète en Flutter adossée à un back-end Odoo : messagerie instantanée (chatter temps réel), notifications push, fil d'actualités alimenté par scraping du site officiel et module de support client. Beaucoup d'API à concevoir, consommer et fiabiliser.",
                    tags: ["Flutter", "Dart", "Odoo", "API REST", "Push"]
                },
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    cat: "pro",
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
            subtitle: "Ce que je construis, et ce qui m'attend juste après.",
            building: "Je construis",
            next: "Sur ma liste",
            note: "Quand c'est fait, ça dégage de la liste — il ne reste que ce qui m'attend."
        },
        roadmap: {
            items: [
                "Pousser le RAG du devis par IA jusqu'en production chez Gembaware",
                "Monter en compétence en ML (scikit-learn, puis deep learning)",
                "Finir Vicrasti et la publier sur le Play Store",
                "Contribuer à un projet open source autour de la data",
                "Décrocher ma 3ᵉ année de BUT haut la main"
            ]
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
            "Data & IA appliquée",
            "Alternant Data & IA @ Gembaware",
            "J'analyse, je modélise, je déploie",
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
            status: "Apprentice at Gembaware · final year of my CS degree",
            h1: "Sam, my 100% local AI",
            h2: "Data & AI apprentice",
            h3: "Proximars presented at CNES",
            desc: "CS student in Toulouse, into applied data & AI. On a work-study contract at Gembaware, I'm building an AI-powered quote assistant (Mistral AI, RAG on Qdrant, n8n wired into Odoo), a Flutter mobile app and performance analyses in Python. What gets me going: turning raw data and documents into something useful.",
            cta: "View projects",
            cv: "Download resume",
            letter: "Download cover letter"
        },
        about: {
            label: "About",
            bio: "I'm starting my final year of Computer Science at IUT Paul Sabatier (Toulouse), on the AGED track — data administration, management and exploitation. Since April 2026 I've been at Gembaware, first as an intern and now on a work-study contract until I graduate: I've built an AI-powered quote assistant (Mistral AI, RAG on Qdrant, n8n orchestration on Odoo), a complete Flutter mobile app, a ShippingBo connector and performance audits in Python. Before that: a STI2D baccalaureate majoring in Information Systems, with honours, two award-winning projects (Paul Sabatier Olympiads, Nuit de l'Informatique) and a Martian greenhouse presented at CNES. At home, a Raspberry Pi hosts my mail server and my websites, and Sam — my 100% local AI — runs on my GPU. What drives me: turning raw data into something useful.",
            stack_title: "My toolbox",
            job2_date: "July 2026 — August 2027",
            job2_title: "Work-study at Gembaware",
            job2_desc: "Continuing on a work-study contract until I graduate: applied AI, Odoo and mobile development.",
            job_date: "April 2026 — July 2026",
            job_title: "Internship at Gembaware",
            job_desc: "First taste of the job inside a real team: Odoo, APIs, AI and data analysis.",
            step1_date: "2024 — 2027",
            step1_title: "Computer Science Degree — Paul Sabatier, Toulouse",
            step1_desc: "AGED track (data administration, management and exploitation). Final year in progress.",
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
            subtitle: "My apprenticeship, my coursework, my competitions and the things I tinker with on my own.",
            filters: {
                all: "All",
                pro: "Professional",
                study: "Studies",
                perso: "Personal",
                award: "Awards"
            },
            empty: "No project in this category.",
            items: [
                {
                    icon: "fa-solid fa-mobile-screen-button",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "Flutter × Odoo mobile app",
                    context: "Gembaware — Work-study",
                    desc: "A complete Flutter mobile app on an Odoo back-end: real-time chat, push notifications, a news feed fed by scraping the official website, and a customer-support module. Plenty of APIs to design, consume and harden.",
                    tags: ["Flutter", "Dart", "Odoo", "REST API", "Push"]
                },
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    cat: "pro",
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
            subtitle: "What I'm building, and what's next on my list.",
            building: "I'm building",
            next: "On my list",
            note: "Once it's done, it leaves the list — only what's ahead stays here."
        },
        roadmap: {
            items: [
                "Take the AI quote assistant's RAG all the way to production at Gembaware",
                "Level up in ML (scikit-learn, then deep learning)",
                "Finish Vicrasti and ship it on the Play Store",
                "Contribute to an open-source data project",
                "Ace my final year of the CS degree"
            ]
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
            "Applied data & AI",
            "Data & AI apprentice @ Gembaware",
            "I analyze, I model, I ship",
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
            status: "Em alternância na Gembaware · 3º ano de graduação",
            h1: "Sam, minha IA 100% local",
            h2: "Aprendiz em Data & IA",
            h3: "Proximars apresentado no CNES",
            desc: "Estudante de Informática em Toulouse, voltado para data & IA aplicada. Em alternância na Gembaware, construo um assistente de orçamentos com IA (Mistral AI, RAG no Qdrant, n8n integrado ao Odoo), um aplicativo mobile em Flutter e análises de desempenho em Python. O que me empolga: transformar dados e documentos brutos em algo útil.",
            cta: "Ver projetos",
            cv: "Baixar currículo",
            letter: "Baixar carta de apresentação"
        },
        about: {
            label: "Sobre",
            bio: "Estou começando o 3º ano de Informática no IUT Paul Sabatier (Toulouse), na trilha AGED — administração, gestão e exploração de dados. Desde abril de 2026 estou na Gembaware, primeiro como estagiário e agora em alternância até me formar: construí ali um assistente de orçamentos com IA (Mistral AI, RAG no Qdrant, orquestração n8n sobre Odoo), um aplicativo mobile completo em Flutter, um conector ShippingBo e auditorias de desempenho em Python. Antes disso: um bacharelado técnico STI2D com especialidade em Sistemas de Informação, com menção, dois projetos premiados (Olimpíadas Paul Sabatier, Nuit de l'Informatique) e uma estufa marciana apresentada no CNES. Em casa, um Raspberry Pi hospeda meu servidor de email e meus sites, e o Sam — minha IA 100% local — roda na minha GPU. O que me motiva: transformar dados brutos em algo útil.",
            stack_title: "Minha caixa de ferramentas",
            job2_date: "Julho 2026 — Agosto 2027",
            job2_title: "Alternância na Gembaware",
            job2_desc: "Sigo em alternância até o fim da graduação: IA aplicada, desenvolvimento Odoo e mobile.",
            job_date: "Abril 2026 — Julho 2026",
            job_title: "Estágio na Gembaware",
            job_desc: "Primeiro contato com a profissão dentro de uma equipe de verdade: Odoo, APIs, IA e análise de dados.",
            step1_date: "2024 — 2027",
            step1_title: "Graduação em Informática — Paul Sabatier, Toulouse",
            step1_desc: "Trilha AGED (administração, gestão e exploração de dados). 3º ano em andamento.",
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
            subtitle: "Minha alternância, meus projetos de curso, minhas competições e o que eu mexo por conta própria.",
            filters: {
                all: "Tudo",
                pro: "Profissional",
                study: "Estudos",
                perso: "Pessoal",
                award: "Prêmios"
            },
            empty: "Nenhum projeto nesta categoria.",
            items: [
                {
                    icon: "fa-solid fa-mobile-screen-button",
                    cat: "pro",
                    date: "2026 — Gembaware",
                    title: "Aplicativo mobile Flutter × Odoo",
                    context: "Gembaware — Alternância",
                    desc: "Aplicativo mobile completo em Flutter sobre um back-end Odoo: chat em tempo real, notificações push, feed de notícias alimentado por scraping do site oficial e módulo de suporte ao cliente. Muitas APIs para projetar, consumir e tornar confiáveis.",
                    tags: ["Flutter", "Dart", "Odoo", "API REST", "Push"]
                },
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    cat: "pro",
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
            subtitle: "O que estou construindo, e o que vem logo depois.",
            building: "Estou construindo",
            next: "Na minha lista",
            note: "Quando termina, sai da lista — aqui fica só o que ainda vem."
        },
        roadmap: {
            items: [
                "Levar o RAG do assistente de orçamentos à produção na Gembaware",
                "Evoluir em ML (scikit-learn, depois deep learning)",
                "Terminar o Vicrasti e publicá-lo na Play Store",
                "Contribuir para um projeto open source de dados",
                "Mandar bem no 3º ano da graduação"
            ]
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
            "Data & IA aplicada",
            "Aprendiz em Data & IA @ Gembaware",
            "Eu analiso, modelo e implanto",
            "RAG, Odoo, Flutter e um Raspberry Pi"
        ]
    }
};
