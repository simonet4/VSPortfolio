// background.js — Particules interactives + Mode Magique
const canvas = document.getElementById('interactive-bg');
const ctx = canvas.getContext('2d');
const magicWandButton = document.getElementById('interaction-toggle');

let particlesArray;
let isMagicModeActive = false;
let isMouseDown = false;
let mousePosition = { x: -1000, y: -1000 };
let rafId = null;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// La couleur ne change qu'au basculement de thème : la relire à chaque
// particule et à chaque image coûtait ~6000 getComputedStyle par seconde,
// chacun forçant un recalcul de styles. On la met en cache et on l'invalide
// via l'attribut `class` de <html>, sans rien exiger de script.js.
let themeColor = readThemeColor();

function readThemeColor() {
    return getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#3a3f73';
}

new MutationObserver(() => { themeColor = readThemeColor(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const physics = {
    count: 100,
    baseSpeed: 0.2,
    interactionRadius: 250,
    repulsionForce: 1,
};

window.addEventListener('mousemove', (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
});
window.addEventListener('mousedown', () => { isMouseDown = true; });
window.addEventListener('mouseup', () => { isMouseDown = false; });
// Un redimensionnement émet des dizaines d'événements : on ne reconstruit
// les particules qu'une fois le geste terminé.
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
        if (reduceMotion.matches) drawStaticFrame();
    }, 150);
});

if (magicWandButton) {
    magicWandButton.addEventListener('click', () => {
        isMagicModeActive = !isMagicModeActive;
        magicWandButton.classList.toggle('active');
        // Le mode magique est une interaction demandée : on anime même si le
        // système réduit les animations, et on repasse au fixe en sortant.
        if (isMagicModeActive) startAnimation();
        else applyMotionPreference();
    });
}

class Particle {
    constructor() {
        this.resetPosition();
    }

    resetPosition() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * physics.baseSpeed;
        this.vy = (Math.random() - 0.5) * physics.baseSpeed;
    }

    update() {
        if (isMagicModeActive) {
            const dx = mousePosition.x - this.x;
            const dy = mousePosition.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (isMouseDown && distance < physics.interactionRadius) {
                const angle = Math.atan2(dy, dx);
                const force = (physics.interactionRadius - distance) / physics.interactionRadius;
                const blast = force * physics.repulsionForce;
                this.vx -= Math.cos(angle) * blast;
                this.vy -= Math.sin(angle) * blast;
            } else if (distance < physics.interactionRadius) {
                const angle = Math.atan2(dy, dx);
                const force = (physics.interactionRadius - distance) / physics.interactionRadius;
                this.vx += Math.cos(angle + Math.PI / 2) * force * 0.5;
                this.vy += Math.sin(angle + Math.PI / 2) * force * 0.5;
                this.vx += Math.cos(angle) * force * 0.2;
                this.vy += Math.sin(angle) * force * 0.2;
            }

            this.vx *= 0.96;
            this.vy *= 0.96;
        } else {
            if (Math.abs(this.vx) > physics.baseSpeed) this.vx *= 0.95;
            if (Math.abs(this.vy) > physics.baseSpeed) this.vy *= 0.95;
            if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.05;
            if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.05;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    // Mode magique : l'opacité dépend de la vitesse, donc un tracé par
    // particule. Hors mode magique elles partagent la même opacité et sont
    // tracées en un seul chemin (voir drawAll).
    drawSolo() {
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        ctx.globalAlpha = Math.min(1, speed * 0.5 + 0.2);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    addToPath() {
        ctx.moveTo(this.x + this.size, this.y);
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    }
}

// Un seul beginPath/fill pour l'ensemble, au lieu de cent aller-retours.
function drawAll() {
    ctx.fillStyle = themeColor;
    if (isMagicModeActive) {
        for (const p of particlesArray) p.drawSolo();
        ctx.globalAlpha = 1;
        return;
    }
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    for (const p of particlesArray) p.addToPath();
    ctx.fill();
    ctx.globalAlpha = 1;
}

function initParticles() {
    particlesArray = [];
    const count = canvas.width < 768 ? 60 : physics.count;
    for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particlesArray) p.update();
    drawAll();
    rafId = requestAnimationFrame(animateParticles);
}

// Image fixe : le décor reste présent, sans mouvement.
function drawStaticFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAll();
}

function startAnimation() {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(animateParticles);
}

function stopAnimation() {
    if (rafId === null) return;
    cancelAnimationFrame(rafId);
    rafId = null;
}

// Respecte le réglage système « réduire les animations » — et réagit s'il
// change en cours de route, sans rechargement.
function applyMotionPreference() {
    if (reduceMotion.matches) {
        stopAnimation();
        drawStaticFrame();
    } else {
        startAnimation();
    }
}

reduceMotion.addEventListener
    ? reduceMotion.addEventListener('change', applyMotionPreference)
    : reduceMotion.addListener(applyMotionPreference); // Safari < 14

// Le thème peut changer pendant que l'animation est à l'arrêt : on redessine.
new MutationObserver(() => { if (reduceMotion.matches) drawStaticFrame(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

initParticles();
applyMotionPreference();
