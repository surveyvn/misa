const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

class Heart {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 15 + 5;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
        this.y -= this.speedY;
        if (this.y < -this.size) {
            this.reset();
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 105, 180, ${this.opacity})`;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText('❤️', this.x, this.y);
    }
}

function init() {
    for (let i = 0; i < 50; i++) {
        hearts.push(new Heart());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

init();
animate();