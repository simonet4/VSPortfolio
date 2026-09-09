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

function initLanguage() {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && languages.includes(saved)) {
        langIndex = languages.indexOf(saved);
        currentLang = saved;
    }
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
        card.className = 'experience-card' + (exp.award ? ' has-award' : '');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${Math.min(i, 8) * 0.06}s, transform 0.5s ease ${Math.min(i, 8) * 0.06}s`;

        const award = exp.award
            ? `<p class="experience-award"><i class="fa-solid fa-trophy" aria-hidden="true"></i><span>${exp.award}</span></p>`
            : '';

        const link = exp.link
            ? `<a class="experience-link" href="${exp.link}" target="_blank" rel="noopener noreferrer">
                   ${exp.linkLabel || exp.link} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
               </a>`
            : '';

        card.innerHTML = `
            <div class="experience-icon"><i class="${exp.icon}" aria-hidden="true"></i></div>
            <span class="experience-date">${exp.date}</span>
            <h3 class="experience-role">${exp.title}</h3>
            <span class="experience-company">${exp.context}</span>
            ${award}
            <p class="experience-desc">${exp.desc}</p>
            <div class="experience-tags">
                ${exp.tags.map(tag => `<span class="experience-tag">${tag}</span>`).join('')}
            </div>
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

// ========================================
// BOÎTE À OUTILS
// ========================================
function renderStack() {
    const grid = document.getElementById('stack-grid');
    if (!grid) return;

    const stack = translations[currentLang].about?.stack;
    if (!stack) return;

    grid.innerHTML = stack.map(group => `
        <div class="stack-group">
            <span class="stack-label">${group.label}</span>
            <div class="stack-tags">
                ${group.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>`).join('');
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
const projectsContainer = document.getElementById('github-projects');
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
    if (repos) { cachedRepos = repos; renderProjects(repos); return; }

    // 1) API GitHub (directe ou via proxy Worker) — un seul appel, `topics` inclus.
    try {
        const res = await fetch(`${GITHUB_API_BASE}/users/${githubUsername}/repos?sort=updated&per_page=100`, {
            headers: { 'Accept': 'application/vnd.github+json' }
        });
        if (!res.ok) throw new Error('GitHub API ' + res.status);
        repos = await res.json();
        cachedRepos = repos;
        saveReposCache(repos);
        renderProjects(repos);
        return;
    } catch (error) {
        console.warn('API GitHub indisponible :', error.message);
    }

    // 2) Cache périmé (mieux que rien).
    const stale = loadReposCache(true);
    if (stale && stale.length) { cachedRepos = stale; renderProjects(stale); return; }

    // 3) Fallback statique versionné dans le repo.
    try {
        const res = await fetch(GITHUB_FALLBACK_JSON, { cache: 'no-cache' });
        if (res.ok) {
            const data = await res.json();
            const list = Array.isArray(data) ? data : (data.repos || []);
            if (list.length) { cachedRepos = list; saveReposCache(list); renderProjects(list); return; }
        }
    } catch (e) {}

    // 4) Message propre.
    const t = translations[currentLang].projects;
    projectsContainer.innerHTML = `
        <div class="project-card-placeholder">
            <span>${t.error}</span>
            <a href="https://github.com/${githubUsername}" target="_blank" rel="noopener noreferrer">${t.errorLink}</a>
        </div>`;
}

// La « Social preview » du dépôt, si le proxy Worker a pu la résoudre
// (l'API REST publique ne l'expose pas). Sinon, la carte générée par GitHub.
function socialImage(repo) {
    return repo.social_image
        || `https://opengraph.githubassets.com/1/${githubUsername}/${encodeURIComponent(repo.name)}`;
}

function renderProjects(repos) {
    if (!projectsContainer) return;

    const sorted = [...repos].sort((a, b) => {
        const af = featuredRepos.includes(a.name) ? 1 : 0;
        const bf = featuredRepos.includes(b.name) ? 1 : 0;
        if (bf !== af) return bf - af;
        return b.stargazers_count - a.stargazers_count;
    });

    const t = translations[currentLang].projects;
    const locale = translations[currentLang].locale || 'fr-FR';

    // On assemble le HTML en une fois : `innerHTML +=` dans une boucle
    // reparse tout le conteneur à chaque tour.
    const cards = sorted.map(repo => {
        const topics = repo.topics || [];
        const langColor = languageColors[repo.language] || '#888';
        const isFeatured = featuredRepos.includes(repo.name);
        const updated = new Date(repo.updated_at).toLocaleDateString(locale, {
            year: 'numeric', month: 'short', day: 'numeric'
        });

        const topicsHtml = topics.length
            ? `<div class="project-topics">${topics.map(tp => `<span class="project-topic">${esc(tp)}</span>`).join('')}</div>`
            : '';

        const demo = repo.homepage && repo.homepage.trim();
        const demoBtn = demo
            ? `<a href="${esc(demo)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fas fa-external-link-alt" aria-hidden="true"></i> ${t.demo}</a>`
            : '';

        return `
            <article class="project-card reveal${isFeatured ? ' featured' : ''}" style="position: relative;">
                ${isFeatured ? `<span class="featured-badge"><i class="fa-solid fa-star" aria-hidden="true"></i> ${t.featured}</span>` : ''}
                ${repo.fork ? '<span class="fork-badge"><i class="fa-solid fa-code-fork" aria-hidden="true"></i> Fork</span>' : ''}
                <img src="${esc(socialImage(repo))}"
                     alt="${esc(repo.name)}" class="project-img" loading="lazy">
                <div class="project-body">
                    <div class="project-header">
                        <h3 class="project-title">
                            <a href="${esc(repo.html_url)}" target="_blank" rel="noopener noreferrer">${esc(repo.name)}</a>
                        </h3>
                    </div>
                    <p class="project-desc">${esc(repo.description || '')}</p>
                    ${topicsHtml}
                    <div class="project-footer">
                        <div class="project-stat">
                            <span class="lang-dot" style="background-color: ${langColor};"></span>
                            <span>${esc(repo.language || 'N/A')}</span>
                        </div>
                        <div class="project-stat">
                            <i class="fa-regular fa-star" aria-hidden="true"></i> ${repo.stargazers_count}
                        </div>
                        <div class="project-stat">
                            <i class="fa-solid fa-code-fork" aria-hidden="true"></i> ${repo.forks_count}
                        </div>
                    </div>
                    <div class="project-meta">
                        <span class="project-updated"><i class="fa-regular fa-clock" aria-hidden="true"></i> ${t.updated} ${updated}</span>
                        ${demoBtn}
                    </div>
                </div>
            </article>`;
    });

    projectsContainer.innerHTML = cards.join('');
    projectsContainer.querySelectorAll('.project-card.reveal').forEach(el => observer.observe(el));
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

const yearSpan = document.getElementById('current-year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Content is ready — reveal the page
document.body.classList.add('loaded');
