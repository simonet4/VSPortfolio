//backgroud
const canvas = document.getElementById('interactive-bg');
const ctx = canvas.getContext('2d');
const magicWandButton = document.getElementById('interaction-toggle');

let particlesArray;
let isMagicModeActive = false;
let isMouseDown = false;
let mousePosition = { x: -1000, y: -1000 };

function getThemeColor() {
    return getComputedStyle(document.body).getPropertyValue('--primary').trim();
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const physics = {
    count: 100,             // Nombre de particules
    baseSpeed: 0.2,         // Vitesse de base
    interactionRadius: 250, // Rayon d'action
    repulsionForce: 1,      // Force du clic
};

window.addEventListener('mousemove', (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
});
window.addEventListener('mousedown', () => { isMouseDown = true; });
window.addEventListener('mouseup', () => { isMouseDown = false; });
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

if (magicWandButton) {
    magicWandButton.addEventListener('click', () => {
        isMagicModeActive = !isMagicModeActive;
        magicWandButton.classList.toggle('active');
        document.body.style.cursor = isMagicModeActive ? 'default' : 'default';
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

            // Repulsion
            if (isMouseDown && distance < physics.interactionRadius) {
                const angle = Math.atan2(dy, dx);
                const force = (physics.interactionRadius - distance) / physics.interactionRadius;
                const blast = force * physics.repulsionForce;
                
                this.vx -= Math.cos(angle) * blast;
                this.vy -= Math.sin(angle) * blast;
            }
            // Orbite
            else if (distance < physics.interactionRadius) {
                const angle = Math.atan2(dy, dx);
                const force = (physics.interactionRadius - distance) / physics.interactionRadius;

                // Rotation
                this.vx += Math.cos(angle + Math.PI / 2) * force * 0.5;
                this.vy += Math.sin(angle + Math.PI / 2) * force * 0.5;

                // Attraction
                this.vx += Math.cos(angle) * force * 0.2;
                this.vy += Math.sin(angle) * force * 0.2;
            }

            // Friction
            this.vx *= 0.96;
            this.vy *= 0.96;

        } else {
            // Mode calme
            if (Math.abs(this.vx) > physics.baseSpeed) this.vx *= 0.95;
            if (Math.abs(this.vy) > physics.baseSpeed) this.vy *= 0.95;
            
            // Mouvement minimum
            if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.05;
            if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.05;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Bords
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = getThemeColor();
        
        if (isMagicModeActive) {
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            ctx.globalAlpha = Math.min(1, speed * 0.5 + 0.2);
        } else {
            ctx.globalAlpha = 0.4;
        }
        
        ctx.fill();
        ctx.globalAlpha = 1;
    }
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
    particlesArray.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();