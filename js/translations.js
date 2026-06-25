// translations.js — Portfolio Victor Simonet
// Languages: FR, EN, PT

translations = {
    fr: {
        btn: "FR",
        nav: {
            about: "À propos",
            work: "Parcours",
            now: "En ce moment",
            cases: "Études de cas",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            status: "En stage chez Gembaware · bientôt en alternance",
            h1: "Sam, mon IA 100 % locale",
            h2: "Data & IA en alternance",
            h3: "Proximars × CNES",
            desc: "Étudiant en BUT Informatique à Toulouse, branché data & IA appliquée. En ce moment je construis chez Gembaware un assistant de devis par IA (Mistral AI, RAG, n8n sur Odoo) et j'analyse des données de production en Python. Ce qui me fait vibrer : transformer des données et des documents bruts en quelque chose d'utile.",
            cta: "Voir mes projets",
            cv: "Télécharger CV",
            m1: "Partenariat Proximars",
            m2: "Langages"
        },
        about: {
            label: "À propos",
            bio: "Je termine ma 2ème année de BUT Informatique à l'IUT Paul Sabatier (Toulouse), parcours orienté gestion et exploitation des données, et j'attaque la 3ème à la rentrée. J'ai commencé à coder tout seul en 2020 et je me suis peu à peu tourné vers la data et l'IA. Aujourd'hui, en stage chez Gembaware (bientôt en alternance), je développe un assistant de devis par IA — Mistral AI, RAG sur des milliers de devis, orchestré avec n8n et branché à Odoo — et j'analyse des données de production en Python (pandas, matplotlib). À côté je bricole : la serre connectée Proximars menée jusqu'au CNES, un serveur mail auto-hébergé en production, une nuit blanche au hackathon Nuit de l'Informatique. Ce qui me motive : passer de la donnée brute à quelque chose d'utile.",
            stack_title: "Ma boîte à outils",
            step1_date: "2024 — Présent",
            step1_title: "BUT Informatique — Paul Sabatier, Toulouse",
            step1_desc: "Parcours AGED (administration, gestion et exploitation des données).",
            step2_title: "Baccalauréat Technologique STI2D",
            step2_desc: "Spécialité SIN (Systèmes d'Information et Numérique). Mention Bien.",
            step3_title: "Débuts en programmation",
            step3_desc: "Apprentissage autodidacte : C, Arduino, développement Web.",
            job_date: "2026 — Présent",
            job_title: "Stage chez Gembaware",
            job_desc: "Développement au sein d'une vraie équipe. Je poursuis en alternance dès la rentrée 2026."
        },
        cases: {
            title: "Études de cas",
            intro: "Trois projets détaillés qui illustrent ma façon de résoudre des problèmes techniques concrets.",
            items: [
                {
                    number: "Étude de cas 01",
                    title: "Proximars — Serre connectée",
                    subtitle: "Projet embarqué Arduino · Partenariat CNES",
                    tags: ["C++", "Arduino", "Capteurs", "IoT", "CNES"],
                    challenge: "Concevoir un système embarqué capable de recréer et maintenir une atmosphère contrôlée dans une serre, simulant les conditions martiennes pour la pousse de plantes. Le projet devait être fiable, mesurable et présentable au CNES.",
                    approach: "Architecture modulaire avec Arduino Mega : capteurs température/humidité/CO2, actionneurs (ventilation, éclairage LED, irrigation). Communication série pour monitoring temps réel. Code structuré en modules indépendants pour chaque sous-système.",
                    results: [
                        "10★ sur GitHub — projet le plus étoilé",
                        "Partenariat officiel avec le CNES",
                        "Système fonctionnel avec monitoring temps réel",
                        "Présenté devant un jury académique"
                    ],
                    link: "https://github.com/simonet4/Proximars",
                    linkLabel: "Voir sur GitHub"
                },
                {
                    number: "Étude de cas 02",
                    title: "Serveur Mail Auto-Hébergé",
                    subtitle: "Infrastructure système · En production",
                    tags: ["Postfix", "Dovecot", "Linux", "DNS", "SSL/TLS"],
                    challenge: "Déployer une infrastructure mail complète et fonctionnelle sur un serveur Linux personnel, avec un domaine personnalisé, une sécurité conforme aux standards (SPF, DKIM, DMARC) et un webmail accessible.",
                    approach: "Installation et configuration de Postfix (MTA) et Dovecot (IMAP) sur Debian. Configuration DNS complète : enregistrements MX, SPF, DKIM et DMARC. Certificats Let's Encrypt pour le chiffrement TLS. Déploiement de Roundcube comme webmail avec filtres Sieve.",
                    results: [
                        "Serveur en production sur victorsimonet.com",
                        "Score 10/10 sur mail-tester.com",
                        "Certificats SSL/TLS auto-renouvelés",
                        "Webmail Roundcube fonctionnel"
                    ],
                    link: null,
                    linkLabel: "Infra privée"
                },
                {
                    number: "Étude de cas 03",
                    title: "Nuit de l'Informatique — Devier",
                    subtitle: "Hackathon national · Équipe de 5",
                    tags: ["HTML/CSS", "JavaScript", "Git", "Hackathon"],
                    challenge: "Développer un site web interactif en une nuit lors du hackathon national Nuit de l'Informatique 2025, en équipe de 5 personnes, avec des contraintes de temps et de thème imposées.",
                    approach: "Coordination technique de l'équipe : répartition des tâches, mise en place du repository GitHub, merge des branches en continu. Développement front-end rapide avec intégration d'animations et d'interactivité JavaScript.",
                    results: [
                        "9★ sur GitHub — forte visibilité",
                        "Site livré dans les délais",
                        "Coordination Git sans conflit majeur",
                        "Projet présenté devant jury"
                    ],
                    link: "https://github.com/simonet4/Devier_Project",
                    linkLabel: "Voir sur GitHub"
                }
            ]
        },
        experiences: {
            title: "Parcours & Réalisations",
            subtitle: "Mon stage, mes projets de cours et ce que je bricole de mon côté.",
            items: [
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    date: "2026 — Stage Gembaware",
                    title: "Assistant de devis par IA",
                    context: "Gembaware — Stage",
                    desc: "Assistant qui lit un cahier des charges (CCTP), retrouve les devis passés similaires (RAG) et propose une base de devis dans Odoo. Mistral AI pour garder la donnée en Europe, orchestration n8n.",
                    tags: ["Mistral AI", "RAG", "n8n", "Python", "Odoo"]
                },
                {
                    icon: "fa-solid fa-chart-line",
                    date: "2026 — Stage Gembaware",
                    title: "Analyse de données de production",
                    context: "Gembaware — Stage",
                    desc: "Analyse de logs et de performances en Python (pandas, matplotlib) : comparaison des temps de traitement Odoo, tableaux de bord et ratios pour objectiver les décisions techniques.",
                    tags: ["Python", "Pandas", "Matplotlib", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-cubes",
                    date: "2026 — Stage Gembaware",
                    title: "Développement Odoo — modules & connecteurs",
                    context: "Gembaware — Stage",
                    desc: "Modules Odoo en Python pour plusieurs clients : connecteur API ShippingBO, génération d'étiquettes ZPL et de documents PDF, configuration d'impression.",
                    tags: ["Python", "Odoo", "API REST", "XML"]
                },
                {
                    icon: "fa-solid fa-magnifying-glass-chart",
                    date: "2025 — Projet SAE",
                    title: "OpenFoodFacts — Nutri-Score & fiabilité des données",
                    context: "BUT Informatique — 2e année",
                    desc: "À partir de l'API OpenFoodFacts : estimation du Nutri-Score et évaluation de la fiabilité des informations produits. Requêtes SQL pour croiser les données, et une IA pour analyser les résultats (sans RAG, en s'appuyant sur le SQL).",
                    tags: ["Python", "SQL", "API", "IA", "Data"]
                },
                {
                    icon: "fa-solid fa-laptop-code",
                    date: "2024 — Projet SAE",
                    title: "Application Java — Gestion de données",
                    context: "BUT Informatique — Équipe de 4",
                    desc: "Application desktop Java avec GUI (WindowBuilder). Base Oracle, requêtes SQL/PLSQL, tests JUnit. Méthodologie Agile/Scrum.",
                    tags: ["Java", "Oracle SQL", "JUnit", "Agile/Scrum"]
                },
                {
                    icon: "fa-solid fa-database",
                    date: "2024 — Projet SAE",
                    title: "Application Web — Oracle APEX",
                    context: "BUT Informatique — Équipe de 3",
                    desc: "Application web low-code sur Oracle APEX : modélisation relationnelle, dashboards interactifs, requêtes PLSQL avancées.",
                    tags: ["Oracle APEX", "PLSQL", "SQL"]
                },
                {
                    icon: "fa-solid fa-server",
                    date: "2024 — 2025",
                    title: "Home lab & proxy FTP en C",
                    context: "BUT Informatique & perso",
                    desc: "Mon labo à la maison : VMs Debian/Ubuntu, Raspberry Pi, services réseau (SSH, DNS, reverse proxy) et une IA auto-hébergée accessible à distance. C'est là que j'ai refait pour de vrai le proxy FTP multi-client en C du projet SAE : sockets, parsing du protocole, gestion de la concurrence.",
                    tags: ["Linux", "Raspberry Pi", "Self-hosting", "C", "Réseau"]
                },
                {
                    icon: "fa-solid fa-microchip",
                    date: "2021 — 2023",
                    title: "Projets embarqués & web",
                    context: "Lycée Déodat de Séverac — Première & Terminale",
                    desc: "Robot suiveur de ligne multi-mode (RobotSumo) et serre connectée Proximars (partenariat CNES), montés en marge des cours. Développement web en parallèle.",
                    tags: ["C/C++", "Arduino", "HTML/CSS", "JavaScript"]
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
            manual: []
        },
        current: {
            title: "Projets en cours",
            subtitle: "Ce qui m'occupe en ce moment.",
            sam_title: "Sam — IA personnelle 100 % locale",
            sam_status: "En création",
            sam_desc: "Mon assistant IA auto-hébergé, 100 % local : Gemma via Ollama sur GPU AMD (ROCm), interface Open WebUI, et une mémoire persistante maison — embeddings nomic-embed-text dans Qdrant, rappel sémantique (RAG) à chaque message. Aucune donnée ne quitte mes machines.",
            mail_title: "Serveur mail auto-hébergé",
            mail_status: "En production",
            mail_desc: "Messagerie auto-hébergée sur Raspberry Pi (docker-mailserver) : TLS Let's Encrypt, relais SMTP Brevo, exposée via Cloudflare Tunnel + Caddy. Adresse contact@victorsimonet.com.",
            vicrasti_title: "Vicrasti",
            vicrasti_status: "En développement",
            vicrasti_desc: "Application Android développée en JavaScript. Interface intuitive, catégories, priorités et suivi de progression."
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
                "Pousser le RAG du Devis IA jusqu'en production chez Gembaware",
                "Monter en compétence en ML (scikit-learn, puis deep learning)",
                "Finir Vicrasti et la publier sur le Play Store",
                "Contribuer à un projet open source autour de la data",
                "Décrocher ma 3ème année de BUT haut la main"
            ]
        },
        contact: {
            title: "On échange ?",
            text: "Je suis en stage chez Gembaware (bientôt en alternance), mais toujours partant pour parler tech, projets perso ou collaborations. Une question, une idée ? Écrivez-moi, je réponds vite.",
            btn: "Envoyer un email"
        },
        footer: {
            credit: "Codé par",
            sam: "épaulé par Sam, mon IA"
        },
        typing: [
            "Data & IA appliquée",
            "Assistant de devis par IA @ Gembaware",
            "J'analyse, je modélise, je déploie",
            "Bientôt alternant chez Gembaware"
        ]
    },
    en: {
        btn: "EN",
        nav: {
            about: "About",
            work: "Background",
            now: "Right now",
            cases: "Case Studies",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            status: "Interning at Gembaware · work-study soon",
            h1: "Sam, my 100% local AI",
            h2: "Data & AI on a work-study",
            h3: "Proximars × CNES",
            desc: "CS student in Toulouse, into applied data & AI. Right now I'm building an AI-powered quote assistant at Gembaware (Mistral AI, RAG, n8n on Odoo) and analyzing production data in Python. What gets me going: turning raw data and documents into something useful.",
            cta: "View Projects",
            cv: "Download Resume",
            m1: "Proximars partnership",
            m2: "Languages"
        },
        about: {
            label: "About",
            bio: "I'm wrapping up my 2nd year of Computer Science at IUT Paul Sabatier (Toulouse), on a data-management track, and starting my 3rd this fall. I started coding on my own back in 2020 and gradually moved toward data and AI. Right now, interning at Gembaware (soon work-study), I'm building an AI-powered quote assistant — Mistral AI, RAG over thousands of quotes, orchestrated with n8n and wired into Odoo — and analyzing production data in Python (pandas, matplotlib). On the side I tinker: the Proximars greenhouse we took to CNES, a self-hosted mail server in production, an all-nighter at the Nuit de l'Informatique hackathon. What drives me: turning raw data into something useful.",
            stack_title: "My toolbox",
            step1_date: "2024 — Present",
            step1_title: "Computer Science Degree — Paul Sabatier, Toulouse",
            step1_desc: "Data management, administration and exploitation track (AGED).",
            step2_title: "Technological Baccalaureate STI2D",
            step2_desc: "Majoring in Information Systems and Digital Technology. With Honours.",
            step3_title: "Started Programming",
            step3_desc: "Self-taught: C, Arduino, Web Development.",
            job_date: "2026 — Present",
            job_title: "Internship at Gembaware",
            job_desc: "Building software within a real team. Continuing on a work-study contract from fall 2026."
        },
        cases: {
            title: "Case Studies",
            intro: "Three detailed projects that show how I approach and solve real technical problems.",
            items: [
                {
                    number: "Case Study 01",
                    title: "Proximars — Connected Greenhouse",
                    subtitle: "Arduino Embedded Project · CNES Partnership",
                    tags: ["C++", "Arduino", "Sensors", "IoT", "CNES"],
                    challenge: "Design an embedded system to recreate and maintain a controlled atmosphere in a greenhouse, simulating Martian conditions for plant growth. The project had to be reliable, measurable, and presentable to CNES.",
                    approach: "Modular architecture with Arduino Mega: temperature/humidity/CO2 sensors, actuators (ventilation, LED lighting, irrigation). Serial communication for real-time monitoring. Code structured in independent modules for each subsystem.",
                    results: [
                        "10★ on GitHub — most starred project",
                        "Official CNES partnership",
                        "Functional system with real-time monitoring",
                        "Presented before academic jury"
                    ],
                    link: "https://github.com/simonet4/Proximars",
                    linkLabel: "View on GitHub"
                },
                {
                    number: "Case Study 02",
                    title: "Self-Hosted Mail Server",
                    subtitle: "System Infrastructure · In Production",
                    tags: ["Postfix", "Dovecot", "Linux", "DNS", "SSL/TLS"],
                    challenge: "Deploy a complete, functional mail infrastructure on a personal Linux server, with a custom domain, security compliant with standards (SPF, DKIM, DMARC) and an accessible webmail.",
                    approach: "Installed and configured Postfix (MTA) and Dovecot (IMAP) on Debian. Complete DNS setup: MX, SPF, DKIM and DMARC records. Let's Encrypt certificates for TLS encryption. Deployed Roundcube as webmail with Sieve filters.",
                    results: [
                        "Server in production on victorsimonet.com",
                        "10/10 score on mail-tester.com",
                        "Auto-renewed SSL/TLS certificates",
                        "Functional Roundcube webmail"
                    ],
                    link: null,
                    linkLabel: "Private infra"
                },
                {
                    number: "Case Study 03",
                    title: "Nuit de l'Informatique — Devier",
                    subtitle: "National Hackathon · Team of 5",
                    tags: ["HTML/CSS", "JavaScript", "Git", "Hackathon"],
                    challenge: "Build an interactive website in one night during the 2025 national hackathon Nuit de l'Informatique, in a team of 5, with imposed time and theme constraints.",
                    approach: "Technical coordination: task distribution, GitHub repo setup, continuous branch merging. Rapid front-end development with animations and JavaScript interactivity.",
                    results: [
                        "9★ on GitHub — high visibility",
                        "Site delivered on time",
                        "Git coordination without major conflicts",
                        "Project presented to jury"
                    ],
                    link: "https://github.com/simonet4/Devier_Project",
                    linkLabel: "View on GitHub"
                }
            ]
        },
        experiences: {
            title: "Background & Achievements",
            subtitle: "My internship, my coursework projects, and the things I tinker with on my own.",
            items: [
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    date: "2026 — Gembaware internship",
                    title: "AI-powered quote assistant",
                    context: "Gembaware — Internship",
                    desc: "An assistant that reads a spec sheet (CCTP), retrieves similar past quotes (RAG) and drafts a quote inside Odoo. Mistral AI to keep data in Europe, orchestrated with n8n.",
                    tags: ["Mistral AI", "RAG", "n8n", "Python", "Odoo"]
                },
                {
                    icon: "fa-solid fa-chart-line",
                    date: "2026 — Gembaware internship",
                    title: "Production data analysis",
                    context: "Gembaware — Internship",
                    desc: "Log and performance analysis in Python (pandas, matplotlib): comparing Odoo processing times, dashboards and ratios to back technical decisions with data.",
                    tags: ["Python", "Pandas", "Matplotlib", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-cubes",
                    date: "2026 — Gembaware internship",
                    title: "Odoo development — modules & connectors",
                    context: "Gembaware — Internship",
                    desc: "Odoo modules in Python for several clients: ShippingBO API connector, ZPL label and PDF document generation, print configuration.",
                    tags: ["Python", "Odoo", "REST API", "XML"]
                },
                {
                    icon: "fa-solid fa-magnifying-glass-chart",
                    date: "2025 — SAE Project",
                    title: "OpenFoodFacts — Nutri-Score & data reliability",
                    context: "CS Degree — 2nd year",
                    desc: "Using the OpenFoodFacts API: estimating Nutri-Score and assessing the reliability of product data. SQL queries to cross-reference the data, and an AI to analyze the results (no RAG, leaning on SQL).",
                    tags: ["Python", "SQL", "API", "AI", "Data"]
                },
                {
                    icon: "fa-solid fa-laptop-code",
                    date: "2024 — SAE Project",
                    title: "Java Application — Data Management",
                    context: "CS Degree — Team of 4",
                    desc: "Desktop Java app with GUI (WindowBuilder). Oracle database, SQL/PLSQL queries, JUnit tests. Agile/Scrum methodology.",
                    tags: ["Java", "Oracle SQL", "JUnit", "Agile/Scrum"]
                },
                {
                    icon: "fa-solid fa-database",
                    date: "2024 — SAE Project",
                    title: "Web Application — Oracle APEX",
                    context: "CS Degree — Team of 3",
                    desc: "Low-code web app on Oracle APEX: relational modeling, interactive dashboards, advanced PLSQL queries.",
                    tags: ["Oracle APEX", "PLSQL", "SQL"]
                },
                {
                    icon: "fa-solid fa-server",
                    date: "2024 — 2025",
                    title: "Home lab & FTP proxy in C",
                    context: "CS Degree & personal",
                    desc: "My home setup: Debian/Ubuntu VMs, a Raspberry Pi, network services (SSH, DNS, reverse proxy) and a self-hosted AI reachable remotely. That's where I rebuilt, for real, the multi-client FTP proxy in C from the SAE project: sockets, protocol parsing, concurrency.",
                    tags: ["Linux", "Raspberry Pi", "Self-hosting", "C", "Network"]
                },
                {
                    icon: "fa-solid fa-microchip",
                    date: "2021 — 2023",
                    title: "Embedded & web projects",
                    context: "Déodat de Séverac High School — Junior & Senior year",
                    desc: "Multi-mode line-following robot (RobotSumo) and the Proximars connected greenhouse (CNES partnership), built on the side. Web development in parallel.",
                    tags: ["C/C++", "Arduino", "HTML/CSS", "JavaScript"]
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
            manual: []
        },
        current: {
            title: "Current Projects",
            subtitle: "What's keeping me busy right now.",
            sam_title: "Sam — 100% local personal AI",
            sam_status: "In the works",
            sam_desc: "My self-hosted AI assistant, fully local: Gemma via Ollama on an AMD GPU (ROCm), Open WebUI front-end, and a custom persistent memory — nomic-embed-text embeddings in Qdrant, semantic recall (RAG) on every message. No data ever leaves my machines.",
            mail_title: "Self-hosted mail server",
            mail_status: "In production",
            mail_desc: "Self-hosted mail on a Raspberry Pi (docker-mailserver): Let's Encrypt TLS, Brevo SMTP relay, exposed through Cloudflare Tunnel + Caddy. Address contact@victorsimonet.com.",
            vicrasti_title: "Vicrasti",
            vicrasti_status: "In development",
            vicrasti_desc: "Android application written in JavaScript. Intuitive interface, categories, priorities and progress tracking."
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
            text: "I'm interning at Gembaware (soon on a work-study contract), but always up for talking tech, side projects or collaborations. Got a question or an idea? Drop me a line, I reply fast.",
            btn: "Send an Email"
        },
        footer: {
            credit: "Coded by",
            sam: "with a hand from Sam, my AI"
        },
        typing: [
            "Applied data & AI",
            "AI quote assistant @ Gembaware",
            "I analyze, I model, I ship",
            "Soon a work-study apprentice @ Gembaware"
        ]
    },
    pt: {
        btn: "PT",
        nav: {
            about: "Sobre",
            work: "Trajetória",
            now: "Agora",
            cases: "Estudos de Caso",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            status: "Estágio na Gembaware · em breve em alternância",
            h1: "Sam, minha IA 100% local",
            h2: "Data & IA em alternância",
            h3: "Proximars × CNES",
            desc: "Estudante de Informática em Toulouse, voltado para data & IA aplicada. Agora estou construindo na Gembaware um assistente de orçamentos com IA (Mistral AI, RAG, n8n sobre Odoo) e analisando dados de produção em Python. O que me empolga: transformar dados e documentos brutos em algo útil.",
            cta: "Ver projetos",
            cv: "Baixar Currículo",
            m1: "Parceria Proximars",
            m2: "Linguagens"
        },
        about: {
            label: "Sobre",
            bio: "Estou terminando o 2º ano de Informática no IUT Paul Sabatier (Toulouse), numa trilha voltada para gestão de dados, e começo o 3º na volta às aulas. Comecei a programar sozinho em 2020 e fui me voltando para dados e IA. Agora, em estágio na Gembaware (em breve em alternância), desenvolvo um assistente de orçamentos com IA — Mistral AI, RAG sobre milhares de orçamentos, orquestrado com n8n e integrado ao Odoo — e analiso dados de produção em Python (pandas, matplotlib). Por fora eu mexo: a estufa conectada Proximars que levamos ao CNES, um servidor de email auto-hospedado em produção, uma noite em claro num hackathon. O que me motiva: transformar dados brutos em algo útil.",
            stack_title: "Minha caixa de ferramentas",
            step1_date: "2024 — Presente",
            step1_title: "Graduação em Informática — Paul Sabatier, Toulouse",
            step1_desc: "Gestão, administração e exploração de dados (AGED).",
            step2_title: "Bacharelado Tecnológico STI2D",
            step2_desc: "Sistemas de Informação e Digital. Com Honras.",
            step3_title: "Início na Programação",
            step3_desc: "Aprendizado autodidata: C, Arduino, desenvolvimento Web.",
            job_date: "2026 — Presente",
            job_title: "Estágio na Gembaware",
            job_desc: "Desenvolvimento dentro de uma equipe de verdade. Continuo em alternância a partir do outono de 2026."
        },
        cases: {
            title: "Estudos de Caso",
            intro: "Três projetos detalhados que mostram como abordo e resolvo problemas técnicos reais.",
            items: [
                {
                    number: "Estudo de Caso 01",
                    title: "Proximars — Estufa Conectada",
                    subtitle: "Projeto Embarcado Arduino · Parceria CNES",
                    tags: ["C++", "Arduino", "Sensores", "IoT", "CNES"],
                    challenge: "Projetar um sistema embarcado capaz de recriar e manter uma atmosfera controlada em uma estufa, simulando condições marcianas para o cultivo de plantas. O projeto precise ser confiável, mensurável e apresentável ao CNES.",
                    approach: "Arquitetura modular com Arduino Mega: sensores de temperatura/umidade/CO2, atuadores (ventilação, iluminação LED, irrigação). Comunicação serial para monitoramento em tempo real. Código estruturado em módulos independentes.",
                    results: [
                        "10★ no GitHub — projeto mais estrelado",
                        "Parceria oficial com o CNES",
                        "Sistema funcional com monitoramento em tempo real",
                        "Apresentado perante banca acadêmica"
                    ],
                    link: "https://github.com/simonet4/Proximars",
                    linkLabel: "Ver no GitHub"
                },
                {
                    number: "Estudo de Caso 02",
                    title: "Servidor Mail Auto-Hospedado",
                    subtitle: "Infraestrutura de Sistemas · Em Produção",
                    tags: ["Postfix", "Dovecot", "Linux", "DNS", "SSL/TLS"],
                    challenge: "Implantar uma infraestrutura de email completa e funcional em um servidor Linux pessoal, com domínio personalizado, segurança conforme padrões (SPF, DKIM, DMARC) e webmail acessível.",
                    approach: "Instalação e configuração de Postfix (MTA) e Dovecot (IMAP) em Debian. Configuração DNS completa: registros MX, SPF, DKIM e DMARC. Certificados Let's Encrypt para criptografia TLS. Implantação do Roundcube como webmail com filtros Sieve.",
                    results: [
                        "Servidor em produção em victorsimonet.com",
                        "Nota 10/10 no mail-tester.com",
                        "Certificados SSL/TLS auto-renovados",
                        "Webmail Roundcube funcional"
                    ],
                    link: null,
                    linkLabel: "Infra privada"
                },
                {
                    number: "Estudo de Caso 03",
                    title: "Nuit de l'Informatique — Devier",
                    subtitle: "Hackathon Nacional · Equipe de 5",
                    tags: ["HTML/CSS", "JavaScript", "Git", "Hackathon"],
                    challenge: "Desenvolver um site interativo em uma noite durante o hackathon nacional Nuit de l'Informatique 2025, em equipe de 5 pessoas, com restrições de tempo e tema impostas.",
                    approach: "Coordenação técnica: distribuição de tarefas, configuração do repositório GitHub, merge contínuo de branches. Desenvolvimento front-end rápido com animações e interatividade JavaScript.",
                    results: [
                        "9★ no GitHub — alta visibilidade",
                        "Site entregue no prazo",
                        "Coordenação Git sem conflitos maiores",
                        "Projeto apresentado ao júri"
                    ],
                    link: "https://github.com/simonet4/Devier_Project",
                    linkLabel: "Ver no GitHub"
                }
            ]
        },
        experiences: {
            title: "Trajetória & Realizações",
            subtitle: "Meu estágio, meus projetos de curso e o que eu mexo por conta própria.",
            items: [
                {
                    icon: "fa-solid fa-wand-magic-sparkles",
                    date: "2026 — Estágio Gembaware",
                    title: "Assistente de orçamentos com IA",
                    context: "Gembaware — Estágio",
                    desc: "Um assistente que lê um caderno de encargos (CCTP), recupera orçamentos passados semelhantes (RAG) e propõe um rascunho de orçamento no Odoo. Mistral AI para manter os dados na Europa, orquestrado com n8n.",
                    tags: ["Mistral AI", "RAG", "n8n", "Python", "Odoo"]
                },
                {
                    icon: "fa-solid fa-chart-line",
                    date: "2026 — Estágio Gembaware",
                    title: "Análise de dados de produção",
                    context: "Gembaware — Estágio",
                    desc: "Análise de logs e de desempenho em Python (pandas, matplotlib): comparação dos tempos de processamento do Odoo, dashboards e indicadores para embasar decisões técnicas.",
                    tags: ["Python", "Pandas", "Matplotlib", "Data Viz"]
                },
                {
                    icon: "fa-solid fa-cubes",
                    date: "2026 — Estágio Gembaware",
                    title: "Desenvolvimento Odoo — módulos & conectores",
                    context: "Gembaware — Estágio",
                    desc: "Módulos Odoo em Python para vários clientes: conector da API ShippingBO, geração de etiquetas ZPL e documentos PDF, configuração de impressão.",
                    tags: ["Python", "Odoo", "API REST", "XML"]
                },
                {
                    icon: "fa-solid fa-magnifying-glass-chart",
                    date: "2025 — Projeto SAE",
                    title: "OpenFoodFacts — Nutri-Score & confiabilidade dos dados",
                    context: "Graduação — 2º ano",
                    desc: "A partir da API OpenFoodFacts: estimativa do Nutri-Score e avaliação da confiabilidade das informações dos produtos. Consultas SQL para cruzar os dados, e uma IA para analisar os resultados (sem RAG, apoiando-se no SQL).",
                    tags: ["Python", "SQL", "API", "IA", "Data"]
                },
                {
                    icon: "fa-solid fa-laptop-code",
                    date: "2024 — Projeto SAE",
                    title: "Aplicação Java — Gestão de Dados",
                    context: "Graduação — Equipe de 4",
                    desc: "Aplicação desktop Java com GUI (WindowBuilder). Base Oracle, consultas SQL/PLSQL, testes JUnit. Metodologia Agile/Scrum.",
                    tags: ["Java", "Oracle SQL", "JUnit", "Agile/Scrum"]
                },
                {
                    icon: "fa-solid fa-database",
                    date: "2024 — Projeto SAE",
                    title: "Aplicação Web — Oracle APEX",
                    context: "Graduação — Equipe de 3",
                    desc: "App web low-code em Oracle APEX: modelagem relacional, dashboards interativos, consultas PLSQL avançadas.",
                    tags: ["Oracle APEX", "PLSQL", "SQL"]
                },
                {
                    icon: "fa-solid fa-server",
                    date: "2024 — 2025",
                    title: "Home lab & proxy FTP em C",
                    context: "Graduação & pessoal",
                    desc: "Meu laboratório em casa: VMs Debian/Ubuntu, um Raspberry Pi, serviços de rede (SSH, DNS, reverse proxy) e uma IA auto-hospedada acessível remotamente. Foi ali que refiz, pra valer, o proxy FTP multi-cliente em C do projeto SAE: sockets, parsing de protocolo, concorrência.",
                    tags: ["Linux", "Raspberry Pi", "Self-hosting", "C", "Rede"]
                },
                {
                    icon: "fa-solid fa-microchip",
                    date: "2021 — 2023",
                    title: "Projetos embarcados & web",
                    context: "Liceu Déodat de Séverac — 1º e último ano",
                    desc: "Robô seguidor de linha multi-modo (RobotSumo) e a estufa conectada Proximars (parceria CNES), feitos por fora das aulas. Desenvolvimento web em paralelo.",
                    tags: ["C/C++", "Arduino", "HTML/CSS", "JavaScript"]
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
            manual: []
        },
        current: {
            title: "Projetos em Andamento",
            subtitle: "No que estou mexendo agora.",
            sam_title: "Sam — IA pessoal 100% local",
            sam_status: "Em criação",
            sam_desc: "Meu assistente de IA auto-hospedado, 100% local: Gemma via Ollama em GPU AMD (ROCm), interface Open WebUI, e uma memória persistente própria — embeddings nomic-embed-text no Qdrant, recuperação semântica (RAG) a cada mensagem. Nenhum dado sai das minhas máquinas.",
            mail_title: "Servidor de email auto-hospedado",
            mail_status: "Em produção",
            mail_desc: "Email auto-hospedado num Raspberry Pi (docker-mailserver): TLS Let's Encrypt, relay SMTP Brevo, exposto via Cloudflare Tunnel + Caddy. Endereço contact@victorsimonet.com.",
            vicrasti_title: "Vicrasti",
            vicrasti_status: "Em desenvolvimento",
            vicrasti_desc: "Aplicativo Android desenvolvido em JavaScript. Interface intuitiva, categorias, prioridades e acompanhamento de progresso."
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
                "Mandar bem no 3º ano do BUT"
            ]
        },
        contact: {
            title: "Vamos conversar?",
            text: "Faço estágio na Gembaware (em breve em alternância), mas sempre a fim de falar sobre tech, projetos pessoais ou colaborações. Uma dúvida ou ideia? Me escreve, respondo rápido.",
            btn: "Enviar Email"
        },
        footer: {
            credit: "Feito por",
            sam: "com a ajuda do Sam, minha IA"
        },
        typing: [
            "Data & IA aplicada",
            "Assistente de orçamentos com IA @ Gembaware",
            "Eu analiso, modelo e implanto",
            "Em breve em alternância na Gembaware"
        ]
    }
};
