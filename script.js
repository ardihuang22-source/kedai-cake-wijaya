const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popupMessage");
const music = document.getElementById("bgMusic");
const countdownEl = document.getElementById("countdown");
const music = document.getElementById("bgMusic");
const countdownEl = document.getElementById("countdown");

let timeLeft = 10;
let readyToPlay = false;

// Countdown
const timer = setInterval(() => {
    timeLeft--;
    countdownEl.innerHTML = "Music starts in " + timeLeft + " seconds...";

    if (timeLeft <= 0) {
        clearInterval(timer);
        countdownEl.innerHTML = "Click anywhere to start music 🎵";
        readyToPlay = true;
    }
}, 1000);

// Play after user interaction
document.addEventListener("click", function () {
    if (readyToPlay) {
        music.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });
    }
}, { once: true });


// ===== Countdown Before Music =====
let timeLeft = 10;

const countdown = setInterval(() => {
    timeLeft--;
    countdownEl.innerHTML = "Music starts in " + timeLeft + " seconds...";

    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdownEl.innerHTML = "🎵 Music Playing...";
        music.play();
    }
}, 1000);

// ===== YES CLICK =====
yesBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

// ===== NO CLICK → YES gets bigger =====
noBtn.addEventListener("click", () => {
    let currentSize = window.getComputedStyle(yesBtn).fontSize;
    let newSize = parseFloat(currentSize) + 5;
    yesBtn.style.fontSize = newSize + "px";
    yesBtn.style.padding = "15px 35px";
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
const music = document.getElementById("bgMusic");
const countdownEl = document.getElementById("countdown");

let timeLeft = 10;
let countdownFinished = false;

// Countdown
const countdown = setInterval(() => {
    timeLeft--;
    countdownEl.innerHTML = "Music starts in " + timeLeft + " seconds...";

    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdownEl.innerHTML = "Click anywhere to start music 🎵";
        countdownFinished = true;
    }
}, 1000);

// Play only after user click
document.addEventListener("click", function () {
    if (countdownFinished) {
        music.play().catch(err => console.log("Autoplay blocked:", err));
    }
}, { once: true });
