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
        let currentlang = translations[currentLang];
        keys.forEach(k => {
            if (currentlang) currentlang = currentlang[k];
        });

        if (currentlang) {
            element.textContent = currentlang;
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
let writingspeed = 100;
let timebetweenwords = 2000;
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
            setTimeout(type, timebetweenwords);
            return;
        }
    }

    setTimeout(type, isDeleting ? writingspeed/2 : writingspeed);
}

document.addEventListener('DOMContentLoaded', type);

// Thème Sombre / Clair
const themeBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; 

function initTheme() {
    // Sauvegarde dans le navigateur?
    const savedTheme = localStorage.getItem('theme');
    // Préférences système
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
}

// Toggle thème
function toggleTheme() {
    // On inverse la classe .dark
    htmlElement.classList.toggle('dark');
    
    // Sauvegarde le choix
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}
if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
}

const menuBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

function toggleMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Github api 

const githubUsername = 'simonet4'; // Votre pseudo
const projectsContainer = document.getElementById('github-projects');

const languageColors = {
    "JavaScript": "#f1e05a",
    "Python": "#3572A5",
    "Java": "#b07219",
    "C++": "#f34b7d",
    "C": "#555555",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "TypeScript": "#2b7489",
    "Vue": "#41b883",
    "Shell": "#89e051"
};

async function fetchProjects() {
    try {
        // Récupère les repos 
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) throw new Error('GitHub API Error');
        
        const repos = await response.json();

        // filtre, no forks, nombre d'étoiles décroissant, top 6
        const topRepos = repos
            .filter(repo => !repo.fork) 
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

        // Vider le message "Chargement..."
        projectsContainer.innerHTML = '';

        topRepos.forEach(repo => {
            const langColor = languageColors[repo.language] || '#cccccc';
            const langName = repo.language || 'Autre';
            const description = repo.description || "Pas de description fournie.";
            const cardHTML = `
                <article class="project-card reveal">
                    <div class="project-header">
                        <h3 class="project-title">
                            <i class="fa-regular fa-folder-open" style="margin-right: 8px; font-size: 0.9em;"></i>
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </h3>
                    </div>
                    
                    <p class="project-desc">
                        ${description}
                    </p>
                    
                    <div class="project-footer">
                        <div class="project-stat">
                            <span class="lang-dot" style="background-color: ${langColor};"></span>
                            <span>${langName}</span>
                        </div>
                        <div class="project-stat">
                            <i class="fa-regular fa-star"></i>
                            <span>${repo.stargazers_count}</span>
                        </div>
                        <div class="project-stat">
                            <i class="fa-solid fa-code-branch"></i>
                            <span>${repo.forks_count}</span>
                        </div>
                    </div>
                </article>
            `;
            
            projectsContainer.innerHTML += cardHTML;
        });

        if (typeof observer !== 'undefined') {
            document.querySelectorAll('.project-card.reveal').forEach(el => observer.observe(el));
        }

    } catch (error) {
        console.error("Erreur GitHub:", error);
        projectsContainer.innerHTML = `<p style="color: red; text-align: center;">Impossible de charger les projets (API Limit). <br> <a href="https://github.com/${githubUsername}" target="_blank">Voir sur GitHub</a></p>`;
    }
}


fetchProjects();
initTheme();