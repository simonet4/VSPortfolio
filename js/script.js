// Traductions
const translations = {
    fr: {
        btn: "FR",
        nav: {
            about: "À propos",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            status: "Disponible",
            desc: "Développement Fullstack, Administration Système & Ingénierie Embarquée : Une polyvalence technique à 360°.",
            cta: "Voir mes projets",
            cv: "Télécharger CV"
        },
        about: {
            title: "À propos",
            bio: "Passionné par l'architecture système et le développement web moderne. Mon objectif est de créer des outils robustes qui simplifient la vie des utilisateurs.",
            video_placeholder: "Présentation Vidéo",
            stack_title: "Architecture Technique",
            quote: "La question de savoir si un ordinateur peut penser n'est pas plus intéressante que la question de savoir si un sous-marin peut nager.",
            timeline_title: "Parcours",
            step1_title: "BUT Informatique",
            step1_date: "2024 - Présent",
            step1_desc: "Parcours administration, gestion et exploitation des données.",
            step2_title: "Baccalauréat Technologique",
            step2_desc: "Systèmes d'Information et Numérique.",
            step3_title: "Débuts en programmation",
            step3_desc: "Apprentissage autodidacte C / Arduino."
        },
        projects: {
            title: "Projets Sélectionnés",
            more: "Voir tous les dépôts sur GitHub ->"
        },
        contact: {
            title: "Restons en contact",
            text: "Je suis actuellement ouvert aux opportunités. Retrouvez-moi sur mes réseaux.",
            btn: "Envoyer un Email"
        },
        footer: {
            credit: "Conçu & Développé par Victor Simonet"
        },
        typing: [
            "Développeur C++ & Java", 
            "Apprenti Oracle & Data", 
            "Praticien Agile / Scrum", 
            "Passionné de Robotique"
        ]
    },
    en: {
        btn: "EN",
        nav: {
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            status: "Available",
            desc: "Fullstack Development, System Administration & Embedded Engineering: 360° Technical Versatility.",
            cta: "View Projects",
            cv: "Download CV"
        },
        about: {
            title: "About Me",
            bio: "Passionate about system architecture and modern web development. My goal is to build robust tools that simplify users' lives.",
            video_placeholder: "Video Presentation",
            stack_title: "Technical Architecture",
            quote: "The question of whether machines can think is about as relevant as the question of whether submarines can swim.",
            timeline_title: "Timeline",
            step1_title: "Computer Science Degree",
            step1_date: "2024 - Present",
            step1_desc: "Data management, administration, and exploitation track.",
            step2_title: "Technological Baccalaureate",
            step2_desc: "Information Systems and Digital Technology.",
            step3_title: "Coding Journey Begins",
            step3_desc: "Self-taught learning of C and Arduino."
        },
        projects: {
            title: "Selected Projects",
            more: "See all repositories on GitHub ->"
        },
        contact: {
            title: "Let's Connect",
            text: "I am currently open to opportunities. Find me on my social networks.",
            btn: "Send an Email"
        },
        footer: {
            credit: "Designed & Developed by Victor Simonet"
        },
        typing: [
            "C++ & Java Developer", 
            "Oracle & Data Apprentice", 
            "Agile / Scrum Practitioner", 
            "Robotics Enthusiast"
        ]
    },
    pt: {
        btn: "PT",
        nav: {
            about: "Sobre",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            status: "Disponível",
            desc: "Desenvolvimento Fullstack, Administração de Sistemas e Engenharia Embarcada: Versatilidade Técnica 360°.",
            cta: "Ver Projetos",
            cv: "Baixar Currículo"
        },
        about: {
            title: "Sobre Mim",
            bio: "Apaixonado por arquitetura de sistemas e desenvolvimento web moderno. Meu objetivo é criar ferramentas robustas.",
            video_placeholder: "Apresentação de Vídeo",
            stack_title: "Arquitetura Técnica",
            quote: "A questão de saber se um computador pode pensar não é mais interessante do que a questão de saber se um submarino pode nadar.",
            timeline_title: "Trajetória",
            step1_title: "Graduação em Informática",
            step1_date: "2024 - Presente",
            step1_desc: "Gestão, administração e exploração de dados.",
            step2_title: "Bacharelado Tecnológico",
            step2_desc: "Sistemas de Informação e Digital.",
            step3_title: "Início na Programação",
            step3_desc: "Aprendizado autodidata de C e Arduino."
        },
        projects: {
            title: "Projetos Selecionados",
            more: "Ver todos os repositórios no GitHub ->"
        },
        contact: {
            title: "Vamos Conversar",
            text: "Estou aberto a oportunidades. Encontre-me nas redes sociais.",
            btn: "Enviar E-mail"
        },
        footer: {
            credit: "Projetado e Desenvolvido por Victor Simonet"
        },
        typing: [
            "Desenvolvedor C++ & Java", 
            "Aprendiz Oracle & Data", 
            "Praticante Agile / Scrum", 
            "Entusiasta de Robótica"
        ]
    }
};

// Configuration
const languages = ['fr', 'en', 'pt'];
let langIndex = 0;
let currentLang = 'fr';

// Sélection des éléments
const langBtn = document.getElementById('lang-btn');

// MàJ langue
function updateLanguage() {
    // Langue suivante
    langIndex = (langIndex + 1) % languages.length;
    currentLang = languages[langIndex];
    
    langBtn.textContent = translations[currentLang].btn;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n'); 
        const keys = key.split('.'); 
        let value = translations[currentLang];
        keys.forEach(k => {
            if (value) value = value[k];
        });

        if (value) {
            element.textContent = value;
        }
    });

    words = translations[currentLang].typing;
    iWord = 0;
    iLetter = 0;
    isDeleting = false;
}
// Changer de langue au clic
if (langBtn) {
    langBtn.addEventListener('click', updateLanguage);
}


// Typing Effect

let words = translations['fr'].typing;

let iWord = 0;
let iLetter = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function type() {
    if (!typingElement) return;

    const currentWord = words[iWord % words.length];

    if (isDeleting) {
        // Effacer
        typingElement.textContent = currentWord.substring(0, iLetter - 1);
        iLetter--;
        if (iLetter == 0) {
            isDeleting = false;
            iWord++;
        }
    } else {
        // Écrire
        typingElement.textContent = currentWord.substring(0, iLetter + 1);
        iLetter++;
        if (iLetter == currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener('DOMContentLoaded', type);