// translations.js — Portfolio Victor Simonet
// Languages: FR, EN, PT

translations = {
    fr: {
        btn: "FR",
        nav: {
            about: "À propos",
            cases: "Études de cas",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            status: "Recherche de Stage — Disponible",
            desc: "Étudiant BUT Informatique à Toulouse. Je participe et déploie des projets concrets : serre connectée avec le CNES, serveur mail en production, proxy FTP multi-client.",
            cta: "Voir mes projets",
            cv: "Télécharger CV",
            m1: "Proximars · CNES",
            m2: "Langages"
        },
        about: {
            label: "À propos",
            bio: "Étudiant en 2ème année de BUT Informatique (IUT Paul Sabatier, Toulouse), parcours AGED. Participation au projet Proximars (10★ GitHub, partenariat CNES), hackathon Nuit de l'Informatique, serveur mail auto-hébergé en production sur victorsimonet.me. Autodidacte depuis 2020, je cherche un stage où je peux apporter une vraie contribution technique.",
            stack_title: "Stack technique",
            step1_date: "2024 — Présent",
            step1_title: "BUT Informatique — Paul Sabatier, Toulouse",
            step1_desc: "Parcours AGED (administration, gestion et exploitation des données).",
            step2_title: "Baccalauréat Technologique STI2D",
            step2_desc: "Spécialité SIN (Systèmes d'Information et Numérique). Mention Bien.",
            step3_title: "Débuts en programmation",
            step3_desc: "Apprentissage autodidacte : C, Arduino, développement Web."
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
                        "Serveur en production sur victorsimonet.me",
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
            subtitle: "Projets académiques, compétitions et initiatives personnelles.",
            items: [
                {
                    icon: "fa-solid fa-network-wired",
                    date: "2025 — Projet SAE",
                    title: "Proxy FTP multi-client en C",
                    context: "BUT Informatique — Projet en équipe",
                    desc: "Conception d'un proxy FTP : communication socket, parsing du protocole, gestion de la concurrence. Tests sur machines virtuelles Linux.",
                    tags: ["C", "Socket", "FTP", "Réseau", "Linux"]
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
                    icon: "fa-solid fa-server",
                    date: "2024 — TP",
                    title: "Administration Système Linux",
                    context: "BUT Informatique — Labs encadrés",
                    desc: "Configuration de VMs Debian/Ubuntu. Gestion des droits, services réseau (SSH, Apache, DNS). Scripting Bash.",
                    tags: ["Linux", "Bash", "SSH", "Réseau"]
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
                    icon: "fa-solid fa-microchip",
                    date: "2020 — 2023",
                    title: "Projets Embarqués & Web (Autodidacte)",
                    context: "Initiative personnelle",
                    desc: "Robot suiveur de ligne multi-mode (RobotSumo), serre connectée Proximars (10★ GitHub). Développement web en parallèle.",
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
            manual: []
        },
        current: {
            title: "Projets en cours",
            subtitle: "Ce sur quoi je travaille actuellement.",
            mail_title: "Serveur Mail Auto-Hébergé",
            mail_status: "En production",
            mail_desc: "Infrastructure mail complète, containerisée avec Docker : Postfix, Dovecot, SPF/DKIM/DMARC, Let's Encrypt. Webmail Roundcube. Domaine victorsimonet.me.",
            vicrasti_title: "Vicrasti",
            vicrasti_status: "En développement",
            vicrasti_desc: "Application Android développée en JavaScript. Interface intuitive, catégories, priorités et suivi de progression."
        },
        contact: {
            title: "Discutons",
            text: "En recherche de stage, disponible immédiatement. Contactez-moi pour échanger sur vos besoins techniques.",
            btn: "Envoyer un email"
        },
        footer: {
            credit: "Conçu & développé par Victor Simonet"
        },
        typing: [
            "Développeur & Admin Système",
            "Participant au projet Proximars (10★ · CNES)",
            "Self-Hosting & Infrastructure",
            "En recherche de Stage"
        ]
    },
    en: {
        btn: "EN",
        nav: {
            about: "About",
            cases: "Case Studies",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            status: "Looking for Internship — Available",
            desc: "CS student in Toulouse. I participate in and deploy real-world projects: a connected greenhouse with CNES, a production mail server, a multi-client FTP proxy.",
            cta: "View Projects",
            cv: "Download Resume",
            m1: "Proximars · CNES",
            m2: "Languages"
        },
        about: {
            label: "About",
            bio: "2nd-year Computer Science student at IUT Paul Sabatier (Toulouse), data administration track. Participated in the Proximars project (10★ on GitHub, CNES partnership), Nuit de l'Informatique hackathon, self-hosted mail server in production on victorsimonet.me. Self-taught since 2020, looking for an internship where I can bring real technical value.",
            stack_title: "Tech Stack",
            step1_date: "2024 — Present",
            step1_title: "Computer Science Degree — Paul Sabatier, Toulouse",
            step1_desc: "Data management, administration and exploitation track (AGED).",
            step2_title: "Technological Baccalaureate STI2D",
            step2_desc: "Majoring in Information Systems and Digital Technology. With Honours.",
            step3_title: "Started Programming",
            step3_desc: "Self-taught: C, Arduino, Web Development."
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
                        "Server in production on victorsimonet.me",
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
            subtitle: "Academic projects, competitions and personal initiatives.",
            items: [
                {
                    icon: "fa-solid fa-network-wired",
                    date: "2025 — SAE Project",
                    title: "Multi-client FTP Proxy in C",
                    context: "CS Degree — Team project",
                    desc: "FTP proxy design: socket communication, protocol parsing, concurrency handling. Testing on Linux VMs.",
                    tags: ["C", "Socket", "FTP", "Network", "Linux"]
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
                    icon: "fa-solid fa-server",
                    date: "2024 — Labs",
                    title: "Linux System Administration",
                    context: "CS Degree — Supervised labs",
                    desc: "Debian/Ubuntu VM configuration. User rights, network services (SSH, Apache, DNS). Bash scripting.",
                    tags: ["Linux", "Bash", "SSH", "Network"]
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
                    icon: "fa-solid fa-microchip",
                    date: "2020 — 2023",
                    title: "Embedded & Web Projects (Self-taught)",
                    context: "Personal initiative",
                    desc: "Multi-mode line-following robot (RobotSumo), connected greenhouse Proximars (10★ GitHub). Web development in parallel.",
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
            manual: []
        },
        current: {
            title: "Current Projects",
            subtitle: "What I'm currently working on.",
            mail_title: "Self-Hosted Mail Server",
            mail_status: "In production",
            mail_desc: "Full mail infrastructure, containerized with Docker: Postfix, Dovecot, SPF/DKIM/DMARC, Let's Encrypt. Roundcube webmail. Custom domain victorsimonet.me.",
            vicrasti_title: "Vicrasti",
            vicrasti_status: "In development",
            vicrasti_desc: "Android application written in JavaScript. Intuitive interface, categories, priorities and progress tracking."
        },
        contact: {
            title: "Let's Talk",
            text: "Looking for an internship, available immediately. Get in touch to discuss your technical needs.",
            btn: "Send an Email"
        },
        footer: {
            credit: "Designed & built by Victor Simonet"
        },
        typing: [
            "Developer & SysAdmin",
            "Proximars Contributor (10★ · CNES)",
            "Self-Hosting & Infrastructure",
            "Looking for an Internship"
        ]
    },
    pt: {
        btn: "PT",
        nav: {
            about: "Sobre",
            cases: "Estudos de Caso",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            status: "Buscando Estágio — Disponível",
            desc: "Estudante de Informática em Toulouse. Participo e implanto projetos reais: estufa conectada com o CNES, servidor de email em produção, proxy FTP multi-cliente.",
            cta: "Ver projetos",
            cv: "Baixar Currículo",
            m1: "Proximars · CNES",
            m2: "Linguagens"
        },
        about: {
            label: "Sobre",
            bio: "Estudante de 2º ano de Informática (IUT Paul Sabatier, Toulouse), especialização AGED. Participação no projeto Proximars (10★ GitHub, parceria CNES), hackathon Nuit de l'Informatique, servidor de email auto-hospedado em produção em victorsimonet.me. Autodidata desde 2020, busco um estágio com impacto técnico real.",
            stack_title: "Stack Técnica",
            step1_date: "2024 — Presente",
            step1_title: "Graduação em Informática — Paul Sabatier, Toulouse",
            step1_desc: "Gestão, administração e exploração de dados (AGED).",
            step2_title: "Bacharelado Tecnológico STI2D",
            step2_desc: "Sistemas de Informação e Digital. Com Honras.",
            step3_title: "Início na Programação",
            step3_desc: "Aprendizado autodidata: C, Arduino, desenvolvimento Web."
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
                        "Servidor em produção em victorsimonet.me",
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
            subtitle: "Projetos acadêmicos, competições e iniciativas pessoais.",
            items: [
                {
                    icon: "fa-solid fa-network-wired",
                    date: "2025 — Projeto SAE",
                    title: "Proxy FTP multi-cliente em C",
                    context: "Graduação — Projeto em equipe",
                    desc: "Projeto de proxy FTP: comunicação socket, parsing de protocolo, gestão de concorrência. Testes em VMs Linux.",
                    tags: ["C", "Socket", "FTP", "Rede", "Linux"]
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
                    icon: "fa-solid fa-server",
                    date: "2024 — Labs",
                    title: "Administração de Sistemas Linux",
                    context: "Graduação — Labs supervisionados",
                    desc: "Configuração de VMs Debian/Ubuntu. Direitos de usuário, serviços de rede (SSH, Apache, DNS). Scripting Bash.",
                    tags: ["Linux", "Bash", "SSH", "Rede"]
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
                    icon: "fa-solid fa-microchip",
                    date: "2020 — 2023",
                    title: "Projetos Embarcados & Web (Autodidata)",
                    context: "Iniciativa pessoal",
                    desc: "Robô seguidor de linha multi-modo (RobotSumo), estufa conectada Proximars (10★ GitHub). Desenvolvimento web em paralelo.",
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
            manual: []
        },
        current: {
            title: "Projetos em Andamento",
            subtitle: "No que estou trabalhando atualmente.",
            mail_title: "Servidor de Email Auto-Hospedado",
            mail_status: "Em produção",
            mail_desc: "Infraestrutura de email completa, conteinerizada com Docker: Postfix, Dovecot, SPF/DKIM/DMARC, Let's Encrypt. Webmail Roundcube. Domínio victorsimonet.me.",
            vicrasti_title: "Vicrasti",
            vicrasti_status: "Em desenvolvimento",
            vicrasti_desc: "Aplicativo Android desenvolvido em JavaScript. Interface intuitiva, categorias, prioridades e acompanhamento de progresso."
        },
        contact: {
            title: "Vamos Conversar",
            text: "Buscando estágio, disponível imediatamente. Entre em contato para discutir suas necessidades técnicas.",
            btn: "Enviar Email"
        },
        footer: {
            credit: "Projetado e desenvolvido por Victor Simonet"
        },
        typing: [
            "Desenvolvedor & SysAdmin",
            "Participante do Proximars (10★ · CNES)",
            "Self-Hosting & Infraestrutura",
            "Buscando Estágio"
        ]
    }
};
