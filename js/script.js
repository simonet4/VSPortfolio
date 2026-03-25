// ========================================
// script.js — Portfolio Victor Simonet
// ========================================

// --- Configuration ---
const languages = ['fr', 'en', 'pt'];
let langIndex = 0;
let currentLang = 'fr';

const langBtn = document.getElementById('lang-btn');

// --- Language switching ---
function updateLanguage() {
    langIndex = (langIndex + 1) % languages.length;
    currentLang = languages[langIndex];
    langBtn.textContent = translations[currentLang].btn;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let value = translations[currentLang];
        keys.forEach(k => { if (value) value = value[k]; });
        if (value) el.textContent = value;
    });

    words = translations[currentLang].typing;
    iWord = 0;
    iLetter = 0;
    isDeleting = false;

    renderExperiences();
    fetchProjects();
}

if (langBtn) langBtn.addEventListener('click', updateLanguage);

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
// EXPERIENCES
// ========================================
function renderExperiences() {
    const grid = document.getElementById('experiences-grid');
    if (!grid) return;

    const data = translations[currentLang].experiences;
    if (!data || !data.items) return;

    const subtitleEl = document.getElementById('experiences-subtitle');
    if (subtitleEl && data.subtitle) subtitleEl.textContent = data.subtitle;

    grid.innerHTML = '';

    data.items.forEach((exp, i) => {
        const card = document.createElement('article');
        card.className = 'experience-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;

        card.innerHTML = `
            <div class="experience-icon"><i class="${exp.icon}"></i></div>
            <span class="experience-date">${exp.date}</span>
            <h3 class="experience-role">${exp.title}</h3>
            <span class="experience-company">${exp.context}</span>
            <p class="experience-desc">${exp.desc}</p>
            <div class="experience-tags">
                ${exp.tags.map(tag => `<span class="experience-tag">${tag}</span>`).join('')}
            </div>
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
// GITHUB API
// ========================================
const githubUsername = 'simonet4';
const projectsContainer = document.getElementById('github-projects');
const featuredRepos = ['Proximars', 'Devier_Project', 'RobotSumo'];

const languageColors = {
    "JavaScript": "#f1e05a", "Python": "#3572A5", "Java": "#b07219",
    "C++": "#f34b7d", "C": "#555555", "HTML": "#e34c26",
    "CSS": "#563d7c", "TypeScript": "#2b7489", "Shell": "#89e051",
    "PHP": "#4F5D95", "PLSQL": "#dad8d8"
};

let cachedRepos = null;

async function fetchProjects() {
    try {
        let repos = cachedRepos;
        if (!repos) {
            const res = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`);
            if (!res.ok) throw new Error('GitHub API Error');
            repos = await res.json();
            cachedRepos = repos;
        }

        const sorted = repos
            .sort((a, b) => {
                const af = featuredRepos.includes(a.name) ? 1 : 0;
                const bf = featuredRepos.includes(b.name) ? 1 : 0;
                if (bf !== af) return bf - af;
                return b.stargazers_count - a.stargazers_count;
            });

        projectsContainer.innerHTML = '';
        const t = translations[currentLang].projects;

        for (const repo of sorted) {
            let topics = [];
            try {
                const topicsRes = await fetch(`https://api.github.com/repos/${githubUsername}/${repo.name}/topics`, {
                    headers: { 'Accept': 'application/vnd.github.mercy-preview+json' }
                });
                if (topicsRes.ok) {
                    const data = await topicsRes.json();
                    topics = data.names || [];
                }
            } catch (e) {}

            const langColor = languageColors[repo.language] || '#888';
            const isFeatured = featuredRepos.includes(repo.name);
            const description = repo.description || '';
            const updated = new Date(repo.updated_at).toLocaleDateString(
                currentLang === 'pt' ? 'pt-BR' : currentLang === 'en' ? 'en-US' : 'fr-FR',
                { year: 'numeric', month: 'short', day: 'numeric' }
            );

            const topicsHtml = topics.length
                ? `<div class="project-topics">${topics.map(t => `<span class="project-topic">${t}</span>`).join('')}</div>`
                : '';

            const demoLink = repo.homepage || '#';
            const demoBtn = `<a href="${demoLink}" target="_blank" rel="noopener" class="btn btn-outline btn-sm"><i class="fas fa-external-link-alt"></i> ${t.demo}</a>`;

            projectsContainer.innerHTML += `
                <article class="project-card reveal${isFeatured ? ' featured' : ''}" style="position: relative;">
                    ${isFeatured ? '<span class="featured-badge"> Featured</span>' : ''}
                    ${repo.fork ? '<span class="fork-badge"><i class="fa-solid fa-code-fork"></i> Fork</span>' : ''}
                    <img src="https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}"
                         alt="${repo.name} preview" class="project-img" loading="lazy">
                    <div class="project-body">
                        <div class="project-header">
                            <h3 class="project-title">
                                <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
                            </h3>
                        </div>
                        <p class="project-desc">${description}</p>
                        ${topicsHtml}
                        <div class="project-footer">
                            <div class="project-stat">
                                <span class="lang-dot" style="background-color: ${langColor};"></span>
                                <span>${repo.language || 'N/A'}</span>
                            </div>
                            <div class="project-stat">
                                <i class="fa-regular fa-star"></i> ${repo.stargazers_count}
                            </div>
                            <div class="project-stat">
                                <i class="fa-solid fa-code-fork"></i> ${repo.forks_count}
                            </div>
                        </div>
                        <div class="project-meta">
                            <span class="project-updated"><i class="fa-regular fa-clock"></i> ${t.updated} ${updated}</span>
                            ${demoBtn}
                        </div>
                    </div>
                </article>
            `;
        }

        // Manual projects (only real ones)
        const manual = t.manual || [];
        manual.forEach(proj => {
            const manualTopics = proj.tags?.length
                ? `<div class="project-topics">${proj.tags.map(t => `<span class="project-topic">${t}</span>`).join('')}</div>`
                : '';

            projectsContainer.innerHTML += `
                <article class="project-card reveal">
                    <div class="project-img-placeholder">
                        <i class="${proj.icon}"></i>
                    </div>
                    <div class="project-body">
                        <div class="project-header">
                            <h3 class="project-title">${proj.title}</h3>
                        </div>
                        <p class="project-desc">${proj.desc}</p>
                        ${manualTopics}
                        <div class="project-footer">
                            <div class="project-stat">
                                <i class="${proj.statusIcon || 'fa-solid fa-circle-check'}"></i>
                                <span>${proj.status}</span>
                            </div>
                        </div>
                        <div class="project-meta">
                            <span class="project-updated"><i class="fa-regular fa-clock"></i> ${proj.date}</span>
                        </div>
                    </div>
                </article>
            `;
        });

        document.querySelectorAll('.project-card.reveal').forEach(el => observer.observe(el));
        renderGitHubStats(repos);

    } catch (error) {
        console.error('GitHub API Error:', error);
        projectsContainer.innerHTML = `
            <div class="project-card-placeholder">
                <span>Impossible de charger les projets.</span>
                <a href="https://github.com/${githubUsername}" target="_blank" rel="noopener">Voir sur GitHub</a>
            </div>`;
    }
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
renderExperiences();
fetchProjects();

const yearSpan = document.getElementById('current-year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Content is ready — reveal the page
document.body.classList.add('loaded');
