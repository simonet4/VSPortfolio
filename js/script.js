// ========================================
// script.js — Portfolio Victor Simonet
// ========================================

// --- Configuration ---
const languages = ['fr', 'en', 'pt'];
const LANG_STORAGE_KEY = 'portfolio_lang';
let langIndex = 0;
let currentLang = 'fr';

const langBtn = document.getElementById('lang-btn');

// Échappement — les descriptions viennent de l'API GitHub, donc de l'extérieur.
function esc(str) {
    return String(str ?? '').replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

// --- Language switching ---
function applyLanguage() {
    const t = translations[currentLang];
    langBtn.textContent = t.btn;
    document.documentElement.lang = t.htmlLang || currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let value = t;
        keys.forEach(k => { if (value) value = value[k]; });
        if (typeof value === 'string') el.textContent = value;
    });

    words = t.typing;
    iWord = 0;
    iLetter = 0;
    isDeleting = false;

    renderExperienceFilters();
    renderExperiences();
    renderStack();
    renderLangs();
    renderExtras();
    fetchProjects();
}

// Première visite : on suit la langue du navigateur, pas le pays. C'est plus
// juste — un lusophone peut être au Brésil comme au Portugal, un francophone
// en Belgique ou au Québec — et ça n'exige ni géolocalisation, ni service
// tiers, ni requête réseau. Tout ce qui n'est ni fr ni pt tombe en anglais.
// Un choix manuel est mémorisé et prime sur la détection.
function detectLanguage() {
    const tags = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ''];
    for (const tag of tags) {
        const base = String(tag).toLowerCase().split('-')[0];
        if (languages.includes(base)) return base;
    }
    return 'en';
}

// Pays où le français, puis le portugais, sont langue officielle ou
// largement pratiqués. Le Canada reste en anglais : la majorité y est
// anglophone, et un Québécois sera de toute façon rattrapé par fr-CA.
const PAYS_FR = new Set(['FR', 'BE', 'CH', 'LU', 'MC', 'SN', 'CI', 'ML', 'BF',
    'NE', 'TG', 'BJ', 'GA', 'CG', 'CD', 'CM', 'MG', 'TN', 'MA', 'DZ', 'HT',
    'GN', 'TD', 'CF', 'DJ', 'KM', 'RW', 'BI', 'VU', 'NC', 'PF', 'GP', 'MQ',
    'RE', 'GF', 'YT', 'PM', 'WF', 'BL', 'MF']);
const PAYS_PT = new Set(['PT', 'BR', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'MO']);

function langueDuPays(code) {
    if (PAYS_FR.has(code)) return 'fr';
    if (PAYS_PT.has(code)) return 'pt';
    return 'en';
}

// Le pays du visiteur, via Cloudflare qui sert /cdn-cgi/trace sur notre
// propre domaine : même origine, aucun service tiers, aucune clé. Contrairement
// à la langue du navigateur, cette information suit bien l adresse IP.
//
// L appel est asynchrone : la page s affiche aussitôt dans la langue déduite
// du navigateur, puis bascule si le pays dit autre chose. Un choix manuel
// mémorisé a toujours le dernier mot.
async function affinerSelonPays() {
    let memorise = null;
    try { memorise = localStorage.getItem(LANG_STORAGE_KEY); } catch (e) {}
    if (memorise && languages.includes(memorise)) return;

    try {
        const r = await fetch('/cdn-cgi/trace', { cache: 'no-store' });
        if (!r.ok) return;
        const pays = (await r.text()).match(/^loc=([A-Z]{2})$/m);
        if (!pays) return;

        const langue = langueDuPays(pays[1]);
        if (langue === currentLang) return;
        langIndex = languages.indexOf(langue);
        currentLang = langue;
        applyLanguage();
    } catch (e) {
        // hors ligne, ou hébergeur sans Cloudflare : on garde la langue du navigateur
    }
}

function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(LANG_STORAGE_KEY); } catch (e) {}
    const lang = saved && languages.includes(saved) ? saved : detectLanguage();
    langIndex = languages.indexOf(lang);
    currentLang = lang;
}

function cycleLanguage() {
    langIndex = (langIndex + 1) % languages.length;
    currentLang = languages[langIndex];
    try { localStorage.setItem(LANG_STORAGE_KEY, currentLang); } catch (e) {}
    applyLanguage();
}

if (langBtn) langBtn.addEventListener('click', cycleLanguage);

// --- Typing Effect ---
let words = translations['fr'].typing;
let iWord = 0;
let iLetter = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing-text');

function type() {
    if (!typingEl) return;
    const word = words[iWord % words.length];
    if (isDeleting) {
        typingEl.textContent = word.substring(0, iLetter - 1);
        iLetter--;
        if (iLetter === 0) { isDeleting = false; iWord++; }
    } else {
        typingEl.textContent = word.substring(0, iLetter + 1);
        iLetter++;
        if (iLetter === word.length) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener('DOMContentLoaded', type);

// --- Theme ---
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
        html.classList.add('dark');
    }
}

function toggleTheme() {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
}

if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

// --- Mobile Menu ---
const menuBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

function toggleMenu() {
    if (!mobileMenu) return;
    const isActive = mobileMenu.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
    menuBtn?.setAttribute('aria-expanded', isActive);
    mobileMenu.setAttribute('aria-hidden', !isActive);
}

if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Échap ferme le menu mobile
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('active')) toggleMenu();
});

// --- Scroll reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Active nav on scroll ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('nav-active');
    });
});

// ========================================
// EXPERIENCES + FILTRES
// ========================================
// 'top' d'abord et par défaut : une page d'accueil courte pour qui survole,
// le reste à un clic pour qui creuse. 'all' en dernier, comme une sortie.
const FILTER_ORDER = ['top', 'pro', 'study', 'perso', 'award', 'all'];
let activeFilter = 'top';

function matchesFilter(exp, filter) {
    if (filter === 'all') return true;
    if (filter === 'top') return Boolean(exp.featured);
    if (filter === 'award') return Boolean(exp.award);
    return exp.cat === filter;
}

function renderExperienceFilters() {
    const bar = document.getElementById('experiences-filters');
    if (!bar) return;

    const data = translations[currentLang].experiences;
    if (!data || !data.items || !data.filters) return;

    bar.innerHTML = FILTER_ORDER.map(key => {
        const count = data.items.filter(exp => matchesFilter(exp, key)).length;
        const isActive = key === activeFilter;
        return `
            <button type="button" class="filter-chip${isActive ? ' active' : ''}"
                    data-filter="${key}" aria-pressed="${isActive}">
                ${data.filters[key]}<span class="filter-count">${count}</span>
            </button>`;
    }).join('');

    bar.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', () => setFilter(btn.dataset.filter));
    });
}

function setFilter(filter) {
    activeFilter = filter;
    renderExperienceFilters();
    renderExperiences();
}

// Sous la sélection courte, un rappel explicite qu'il y a tout le reste.
function renderExperiencesMore() {
    const box = document.getElementById('experiences-more');
    if (!box) return;

    const data = translations[currentLang].experiences;
    const total = data.items.length;

    if (activeFilter !== 'top') { box.innerHTML = ''; return; }

    const label = (data.seeAll || '').replace('{n}', total);
    box.innerHTML = `
        <button type="button" class="see-all-btn">
            ${label} <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
        </button>`;
    box.querySelector('.see-all-btn').addEventListener('click', () => setFilter('all'));
}

function renderExperiences() {
    const grid = document.getElementById('experiences-grid');
    if (!grid) return;

    const data = translations[currentLang].experiences;
    if (!data || !data.items) return;

    const subtitleEl = document.getElementById('experiences-subtitle');
    if (subtitleEl && data.subtitle) subtitleEl.textContent = data.subtitle;

    const items = data.items.filter(exp => matchesFilter(exp, activeFilter));
    grid.innerHTML = '';
    renderExperiencesMore();

    if (!items.length) {
        grid.innerHTML = `<p class="experiences-empty">${data.empty || ''}</p>`;
        return;
    }

    items.forEach((exp, i) => {
        const card = document.createElement('article');
        card.className = 'experience-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${Math.min(i, 8) * 0.06}s, transform 0.5s ease ${Math.min(i, 8) * 0.06}s`;

        const award = exp.award
            ? `<p class="experience-award"><i class="fa-solid fa-trophy" aria-hidden="true"></i><span>${exp.award}</span></p>`
            : '';

        // Chiffres GitHub de la fiche, quand un dépôt lui correspond : ils
        // remplacent la carte séparée qui répétait le même projet.
        const depot = exp.repo ? githubParDepot.get(exp.repo) : null;
        const meta = depot ? `
            <div class="experience-meta">
                <span><span class="lang-dot" style="background-color: ${languageColors[depot.language] || '#888'};"></span>${esc(depot.language || '—')}</span>
                <span><i class="fa-regular fa-star" aria-hidden="true"></i> ${depot.stargazers_count}</span>
                <span><i class="fa-regular fa-clock" aria-hidden="true"></i> ${new Date(depot.updated_at).toLocaleDateString(translations[currentLang].locale || 'fr-FR', { year: 'numeric', month: 'short' })}</span>
            </div>` : '';

        // Deux liens possibles en pied de fiche : la demo ou la video du
        // projet, et le code sur GitHub quand un depot lui correspond. Ce
        // second lien relie la realisation a sa carte dans « Projets GitHub »,
        // au lieu que les deux sections se repetent sans se parler.
        const liens = [];
        if (exp.link) {
            liens.push(`<a class="experience-link lien-principal" href="${exp.link}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> ${exp.linkLabel || exp.link}
            </a>`);
        }
        if (exp.repo) {
            const t = translations[currentLang].experiences;
            liens.push(`<a class="experience-link${liens.length ? '' : ' lien-principal'}" href="https://github.com/${githubUsername}/${encodeURIComponent(exp.repo)}" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github" aria-hidden="true"></i> ${t.codeLabel || 'Code'}
            </a>`);
        }
        const link = liens.length ? `<div class="experience-links">${liens.join('')}</div>` : '';

        // Une réalisation adossée à un dépôt affiche son visuel : c'est ce qui
        // la relie visiblement au code, et évite de la répéter plus bas.
        const visuel = exp.repo
            ? `<img class="experience-img" loading="lazy" alt=""
                    src="https://raw.githubusercontent.com/${githubUsername}/${encodeURIComponent(exp.repo)}/HEAD/docs/cards/card.png"
                    onerror="this.closest('.experience-card').classList.add('sans-visuel');this.remove()">`
            : '';

        card.innerHTML = `
            ${visuel}
            <div class="experience-icon"><i class="${exp.icon}" aria-hidden="true"></i></div>
            <span class="experience-date">${exp.date}</span>
            <h3 class="experience-role">${exp.title}</h3>
            <span class="experience-company">${exp.context}</span>
            ${award}
            <p class="experience-desc">${exp.desc}</p>
            <div class="experience-tags">
                ${exp.tags.map(tag => `<span class="experience-tag">${tag}</span>`).join('')}
            </div>
            ${meta}
            ${link}
        `;

        grid.appendChild(card);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        });
    });
}

// Logos Font Awesome des technos qui en ont un. Les autres s'affichent sans
// icone : mieux vaut aucun pictogramme qu'un symbole generique repete.
const TAG_LOGOS = {
    'Python': 'fa-brands fa-python',
    'Java': 'fa-brands fa-java',
    'PHP': 'fa-brands fa-php',
    'JavaScript': 'fa-brands fa-js',
    'HTML/CSS': 'fa-brands fa-html5',
    'Docker': 'fa-brands fa-docker',
    'Linux': 'fa-brands fa-linux',
    'Git': 'fa-brands fa-git-alt',
    'Android Studio': 'fa-brands fa-android',
    'Bash': 'fa-solid fa-terminal',
    'Arduino': 'fa-solid fa-microchip',
    'Oracle SQL': 'fa-solid fa-database',
    'PL/SQL': 'fa-solid fa-database',
    'Blender / FreeCAD': 'fa-solid fa-cube'
};

// ========================================
// BOÎTE À OUTILS — DÉFILEMENT CONTINU
// ========================================
// Panneau publicitaire circulaire. Le contenu est écrit deux fois ; dès que
// le défilement atteint la moitié, on retranche cette moitié : la seconde
// copie se trouve alors exactement là où était la première, et la boucle
// est invisible. On pilote scrollLeft plutôt qu une animation CSS, pour que
// la zone reste réellement défilante à la souris.
function initMarquee() {
    const zone = document.querySelector('.stack-marquee');
    if (!zone || zone.dataset.initialise) return;
    zone.dataset.initialise = '1';

    const prec = document.querySelector('.stack-fleche.prec');
    const suiv = document.querySelector('.stack-fleche.suiv');

    const VITESSE = 0.45;     // pixels par image, ~27 px/s
    const REPRISE = 2500;     // délai avant que le défilement reparte seul
    let enPause = false, glisse = false;
    let cible = null;         // destination du saut de flèche en cours
    let minuteur = null;
    let departX = 0, departScroll = 0;

    const demiTour = () => zone.scrollWidth / 2;

    // Largeur d une case, gouttière comprise : le pas d un cran de flèche.
    function pas() {
        const carte = zone.querySelector('.stack-card');
        const run = zone.querySelector('.stack-run');
        if (!carte) return 320;
        const gap = run ? parseFloat(getComputedStyle(run).gap) || 0 : 0;
        return (carte.offsetWidth || 310) + gap;
    }

    function boucler() {
        const demi = demiTour();
        if (demi <= 0) return;
        if (zone.scrollLeft >= demi) { zone.scrollLeft -= demi; if (cible !== null) cible -= demi; }
        else if (zone.scrollLeft <= 0) { zone.scrollLeft += demi; if (cible !== null) cible += demi; }
    }

    // Toute interaction suspend le défilement ; il repart seul après un délai.
    function suspendre() {
        enPause = true;
        clearTimeout(minuteur);
        minuteur = setTimeout(() => { enPause = false; cible = null; }, REPRISE);
    }

    function avancer() {
        if (cible !== null) {
            const reste = cible - zone.scrollLeft;
            if (Math.abs(reste) < 0.5) { zone.scrollLeft = cible; cible = null; }
            else zone.scrollLeft += reste * 0.18;
            boucler();
        } else if (!enPause && !glisse) {
            zone.scrollLeft += VITESSE;
            boucler();
        }
        requestAnimationFrame(avancer);
    }

    function sauter(sens) {
        cible = (cible === null ? zone.scrollLeft : cible) + sens * pas();
        suspendre();
    }

    if (prec) prec.addEventListener('click', () => sauter(-1));
    if (suiv) suiv.addEventListener('click', () => sauter(1));

    zone.addEventListener('mouseenter', () => { enPause = true; clearTimeout(minuteur); });
    zone.addEventListener('mouseleave', suspendre);
    zone.addEventListener('focusin', () => { enPause = true; clearTimeout(minuteur); });
    zone.addEventListener('focusout', suspendre);

    zone.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        glisse = true; cible = null;
        departX = e.clientX;
        departScroll = zone.scrollLeft;
        zone.classList.add('glisse');
        zone.setPointerCapture(e.pointerId);
    });
    zone.addEventListener('pointermove', (e) => {
        if (!glisse) return;
        zone.scrollLeft = departScroll - (e.clientX - departX);
        boucler();
    });
    const relacher = (e) => {
        if (!glisse) return;
        glisse = false;
        zone.classList.remove('glisse');
        if (e.pointerId !== undefined && zone.hasPointerCapture?.(e.pointerId)) {
            zone.releasePointerCapture(e.pointerId);
        }
        suspendre();
    };
    zone.addEventListener('pointerup', relacher);
    zone.addEventListener('pointercancel', relacher);

    zone.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        e.preventDefault();
        cible = null;
        zone.scrollLeft += e.deltaY;
        boucler();
        suspendre();
    }, { passive: false });

    requestAnimationFrame(avancer);
}

function renderStack() {
    const piste = document.getElementById('stack-grid');
    if (!piste) return;

    const stack = translations[currentLang].about?.stack;
    if (!stack) return;

    const cases = stack.map(groupe => {
        const tags = groupe.tags.map(tag => {
            const logo = TAG_LOGOS[tag];
            return `<span class="tag">${logo ? `<i class="${logo}" aria-hidden="true"></i>` : ''}${tag}</span>`;
        }).join('');
        return `
        <div class="stack-card">
            <div class="stack-head">
                <span class="stack-icon"><i class="${groupe.icon}" aria-hidden="true"></i></span>
                <span class="stack-label">${groupe.label}</span>
            </div>
            <div class="stack-tags">${tags}</div>
        </div>`;
    }).join('');

    // Le contenu est écrit deux fois : la piste translate de -50 %, donc la
    // seconde copie arrive là où la première démarrait et la boucle ne se voit
    // pas. Le doublon est aria-hidden pour ne pas être lu deux fois.
    piste.innerHTML = `<div class="stack-run">${cases}</div>` +
                      `<div class="stack-run" aria-hidden="true">${cases}</div>`;

    initMarquee();
}

// ========================================
// LANGUES & HORS DU CODE
// ========================================
function renderLangs() {
    const list = document.getElementById('langs-list');
    if (!list) return;

    const langs = translations[currentLang].about?.langs;
    if (!langs) return;

    list.innerHTML = langs.map(l => `
        <li class="lang-item">
            <span class="lang-name">${l.name}</span>
            <span class="lang-level">${l.level}</span>
        </li>`).join('');
}

function renderExtras() {
    const list = document.getElementById('extras-list');
    if (!list) return;

    const extras = translations[currentLang].about?.extras;
    if (!extras) return;

    list.innerHTML = extras.map(x => `
        <li class="extra-item">
            <i class="${x.icon}" aria-hidden="true"></i>
            <span>${x.text}</span>
        </li>`).join('');
}

// ========================================
// GITHUB API
// ========================================
const githubUsername = 'simonet4';
const featuredRepos = ['Proximars', 'Devier_Project', 'RobotSumo'];

// Base de l'API. Laisser sur api.github.com, OU mettre l'URL d'un proxy
// Cloudflare Worker (token GitHub = 5000 req/h + cache edge) pour ne jamais
// être rate-limité. Ex : 'https://gh.victorsimonet.com'
const GITHUB_API_BASE = 'https://api.github.com';
// Fichier de secours statique (généré dans le repo) si l'API est indispo.
const GITHUB_FALLBACK_JSON = 'docs/github-fallback.json';


const languageColors = {
    "JavaScript": "#f1e05a", "Python": "#3572A5", "Java": "#b07219",
    "C++": "#f34b7d", "C": "#555555", "HTML": "#e34c26",
    "CSS": "#563d7c", "TypeScript": "#2b7489", "Shell": "#89e051",
    "PHP": "#4F5D95", "PLSQL": "#dad8d8", "Dart": "#00B4AB", "Ada": "#02f88c"
};

let cachedRepos = null;
const REPOS_CACHE_KEY = 'gh_repos_cache_v1';
const REPOS_CACHE_TTL = 30 * 60 * 1000; // 30 min

function loadReposCache(ignoreTTL) {
    try {
        const raw = localStorage.getItem(REPOS_CACHE_KEY);
        if (!raw) return null;
        const { ts, repos } = JSON.parse(raw);
        if (!ignoreTTL && Date.now() - ts > REPOS_CACHE_TTL) return null;
        return Array.isArray(repos) ? repos : null;
    } catch (e) { return null; }
}
function saveReposCache(repos) {
    try { localStorage.setItem(REPOS_CACHE_KEY, JSON.stringify({ ts: Date.now(), repos })); } catch (e) {}
}

// Acquisition robuste : cache mémoire → cache frais → API (1 appel) →
// cache périmé → fallback statique du repo → message. Les projets s'affichent
// même si l'API GitHub est rate-limitée (403).
async function fetchProjects() {
    let repos = cachedRepos || loadReposCache(false);
    if (repos) { cachedRepos = repos; appliquerDonneesGitHub(repos); return; }

    // 1) API GitHub (directe ou via proxy Worker) — un seul appel, `topics` inclus.
    try {
        const res = await fetch(`${GITHUB_API_BASE}/users/${githubUsername}/repos?sort=updated&per_page=100`, {
            headers: { 'Accept': 'application/vnd.github+json' }
        });
        if (!res.ok) throw new Error('GitHub API ' + res.status);
        repos = await res.json();
        cachedRepos = repos;
        saveReposCache(repos);
        appliquerDonneesGitHub(repos);
        return;
    } catch (error) {
        console.warn('API GitHub indisponible :', error.message);
    }

    // 2) Cache périmé (mieux que rien).
    const stale = loadReposCache(true);
    if (stale && stale.length) { cachedRepos = stale; appliquerDonneesGitHub(stale); return; }

    // 3) Fallback statique versionné dans le repo.
    try {
        const res = await fetch(GITHUB_FALLBACK_JSON, { cache: 'no-cache' });
        if (res.ok) {
            const data = await res.json();
            const list = Array.isArray(data) ? data : (data.repos || []);
            if (list.length) { cachedRepos = list; saveReposCache(list); appliquerDonneesGitHub(list); return; }
        }
    } catch (e) {}

    // 4) Message propre.
    // Les fiches restent affichées : seules les données vivantes manquent.
    const t = translations[currentLang].projects;
    const bar = document.getElementById('github-stats');
    if (bar) {
        bar.innerHTML = `<p class="github-indispo">${t.error} <a href="https://github.com/${githubUsername}" target="_blank" rel="noopener noreferrer">${t.errorLink}</a></p>`;
    }
}

// Données GitHub vivantes (langage, étoiles, date) indexées par dépôt. Elles
// viennent enrichir les fiches de « Parcours & Réalisations » : une seule
// section porte désormais le récit ET la preuve.
let githubParDepot = new Map();

function appliquerDonneesGitHub(repos) {
    githubParDepot = new Map(repos.map(r => [r.name, r]));
    renderExperiences();
    renderGitHubStats(repos);
}

// ========================================
// GITHUB STATS
// ========================================
function renderGitHubStats(repos) {
    const bar = document.getElementById('github-stats');
    if (!bar) return;

    const t = translations[currentLang].stats;
    const stars = repos.reduce((s, r) => s + r.stargazers_count, 0);
    const forks = repos.reduce((s, r) => s + r.forks_count, 0);
    const langs = new Set(repos.map(r => r.language).filter(Boolean));

    bar.innerHTML = `
        <div class="stat-item reveal">
            <span class="stat-number" data-target="${repos.length}">0</span>
            <span class="stat-label">${t.repos}</span>
        </div>
        <div class="stat-item reveal">
            <span class="stat-number" data-target="${stars}">0</span>
            <span class="stat-label">Stars</span>
        </div>
        <div class="stat-item reveal">
            <span class="stat-number" data-target="${forks}">0</span>
            <span class="stat-label">Forks</span>
        </div>
        <div class="stat-item reveal">
            <span class="stat-number" data-target="${langs.size}">0</span>
            <span class="stat-label">${t.languages}</span>
        </div>
    `;

    bar.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target);
        animateCounter(el, target);
    });

    bar.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function animateCounter(el, target) {
    let current = 0;
    const step = Math.max(target / 90, 0.1);

    function tick() {
        current += step;
        if (current >= target) {
            el.textContent = target;
            return;
        }
        el.textContent = Math.floor(current);
        requestAnimationFrame(tick);
    }

    const cObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            tick();
            cObserver.disconnect();
        }
    }, { threshold: 0.5 });
    cObserver.observe(el);
}

// ========================================
// INIT
// ========================================
initTheme();
initLanguage();
applyLanguage();
affinerSelonPays();

const yearSpan = document.getElementById('current-year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Content is ready — reveal the page
document.body.classList.add('loaded');
