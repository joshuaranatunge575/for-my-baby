const letters = [
    "Baby 🤍\nI love the way you smile, the way you care, the way you exist.",
    "No matter how far we are, my heart always finds you.",
    "You are my calm, my chaos, my favorite feeling.",
    "Every day with you is my favorite day.",
    "If I had one life and a thousand choices, I’d still choose you."
];

let letterIndex = 0;

function openLetter() {
    document.getElementById("letterText").innerText =
        letters[letterIndex];

    letterIndex++;
    if (letterIndex >= letters.length) {
        letterIndex = 0;
    }
}

function revealTruth() {
    document.getElementById("truthText").innerText =
        "You are my safe place, my favorite person, my always 🤍";
}

let love = 0;
function loveGame() {
    love++;
    document.getElementById("loveScore").innerText =
        "Love level: " + love + " ∞";
}
let musicPlaying = false;
const music = document.getElementById("bgMusic");

function toggleMusic() {
    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
    } else {
        music.pause();
        musicPlaying = false;
    }
}
const sweetMessages = [
    "You are the best thing that ever happened to me 🤍",
    "Your smile fixes my worst days 🥹",
    "I feel safe when I think of you 💕",
    "You’re my favorite notification 📱",
    "I love you more than words can explain 🌸"
];

function sweetMessage() {
    const random = Math.floor(Math.random() * sweetMessages.length);
    document.getElementById("sweetText").innerText =
        sweetMessages[random];
}
function yesAnswer() {
    document.getElementById("answerText").innerText =
        "Correct 😌 I love you endlessly 🤍";
}

function noAnswer() {
    document.getElementById("answerText").innerText =
        "Wrong 😤 I love you MORE than you think 💕";
}
const albumPhotos = [
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
    "img15.jpg",
    "img16.jpg",
    "img17.jpg",
    "img18.jpg",
    "img19.jpg",
    "img20.jpg",
    "img21.jpg",
    "img22.jpg",
    "img23.jpg"
];

let currentPhoto = 0;

function nextPhoto() {
    currentPhoto++;
    if (currentPhoto >= albumPhotos.length) {
        currentPhoto = 0;
    }
    document.getElementById("albumPhoto").src =
        albumPhotos[currentPhoto];
}

function prevPhoto() {
    currentPhoto--;
    if (currentPhoto < 0) {
        currentPhoto = albumPhotos.length - 1;
    }
    document.getElementById("albumPhoto").src =
        albumPhotos[currentPhoto];
        let startX = 0;
let endX = 0;

const album = document.getElementById("albumPhoto");

album.addEventListener("touchstart", function(e){
    startX = e.touches[0].clientX;
});

album.addEventListener("touchend", function(e){
    endX = e.changedTouches[0].clientX;
    if(startX - endX > 50){
        nextPhoto(); // swipe left
    } else if(endX - startX > 50){
        prevPhoto(); // swipe right
    }
});

}
document.addEventListener("click", function(e) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    heart.style.fontSize = "20px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
});
function checkSecret() {
    const pass = prompt("What do I call you? 🤍");
    if (pass && pass.toLowerCase() === "baby") {
        window.location.href = "secret.html";
    } else {
        alert("Only my baby can enter 🤍");
    }
}
const specialDate = new Date("2025-10-08"); // CHANGE DATE

function updateCountdown() {
    const now = new Date();
    const diff = specialDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
        days + " days to go 🤍";
}

setInterval(updateCountdown, 1000);
function showFlowers() {
    const popup = document.getElementById("flowerPopup");
    popup.classList.add("show");
}

function closeFlowers() {
    const popup = document.getElementById("flowerPopup");
    popup.classList.remove("show");
}
