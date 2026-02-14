const music = document.getElementById("bgMusic");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const countdownEl = document.getElementById("countdown");

// ===== Countdown =====
let timeLeft = 10;
let readyToPlay = false;

const countdown = setInterval(() => {
    timeLeft--;
    countdownEl.innerHTML = "Music starts in " + timeLeft + " seconds...";

    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdownEl.innerHTML = "Tap screen to start music 🎵";
        readyToPlay = true;
    }
}, 1000);

// Required for mobile autoplay
document.addEventListener("click", function () {
    if (readyToPlay) {
        music.play().catch(err => console.log(err));
    }
}, { once: true });

// ===== YES CLICK =====
yesBtn.addEventListener("click", () => {
    popup.style.display = "block";
    launchFireworks();
    releaseTulips();
});

// ===== NO CLICK =====
noBtn.addEventListener("click", () => {
    let size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (size + 5) + "px";
});

// ===== Floating Hearts =====
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 400);

// ===== Tulip Explosion =====
function releaseTulips() {
    for (let i = 0; i < 30; i++) {
        let tulip = document.createElement("div");
        tulip.className = "tulip";
        tulip.innerHTML = "🌷";
        tulip.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(tulip);

        setTimeout(() => tulip.remove(), 4000);
    }
}

// ===== Fireworks =====
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function launchFireworks() {
    for (let i = 0; i < 80; i++) {
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let angle = Math.random() * 2 * Math.PI;
        let speed = Math.random() * 6;
        animateParticle(x, y, Math.cos(angle) * speed, Math.sin(angle) * speed);
    }
}

function animateParticle(x, y, dx, dy) {
    let life = 50;
    function draw() {
        if (life <= 0) return;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        x += dx;
        y += dy;
        life--;
        requestAnimationFrame(draw);
    }
    draw();
}
