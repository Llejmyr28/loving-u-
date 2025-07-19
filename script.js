const messages = [
  "You make my world brighter just by being in it",
  "Every day with you feels like the best day ever",
  "You’re my sunshine on the cloudiest days",
  "I still get butterflies every time I think of you",
  "You’re the reason I smile without even realizing it",
  "My heart chose you, and it made the best decision ever",
  "You + Me = Always",
  "You’re my peace, my chaos, my everything",
  "No matter how far we are, you’re always close to my heart",
  "You're my favorite notification",
  "Loving you is my favorite routine",
  "You're my home, my warmth, my safe place",
  "You're my person, today and every day",
  "I miss you in ways I can’t explain",
  "You're the sweetest part of my every day"
];

const images = [
  "download6.png", "download7.png", "download8.png", "download9.png",
  "download10.png", "download11.png", "download12.png", "download13.png",
  "emoji-love-meme-doodle14.gif", "emojify15.gif", "heart16.gif", "emoji-cute.gif",
  "emoji-love.gif", "emoji-smile.gif", "heart.gif", "kiss-transparent.gif",
  "love-you-emojis.gif", "teehee-blush.gif", "wow-heart-eyes.gif", "колобокicq-emoji.gif"
];

const emoticons = [
  "⸜(｡˃ ᵕ ˂ )⸝♡", "₍ᐢ. .ᐢ₎ ₊˚⊹♡", "(ෆ˙ᵕ˙ෆ)♡", "♡(˃͈ ˂͈ )",
  "ε(´｡•᎑•`)っ ♡", "ᓚ₍⑅^..^₎♡", "( ๑ ˃̵ᴗ˂̵)و ♡", "♡〜٩( ˃▿˂ )۶〜♡", "٩(ˊᗜˋ*)و ♡"
];

const softQuotes = [
  "You are my favorite reason to smile.",
  "Some hearts just understand each other.",
  "You're my calm in the chaos.",
  "In case you forgot today: you matter.",
  "You are made of sunshine and sweetness.",
  "Love looks a lot like you.",
  "You feel like a warm hug to my soul.",
  "You’re the first and last thought of my day.",
  "I never get tired of loving you.",
  "Being with you feels like home."
];

// Date
const today = new Date();
const dateStr = today.toDateString();
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

// Pick daily content
const message = messages[dayOfYear % messages.length];
const image = images[dayOfYear % images.length];
const emoticon = emoticons[dayOfYear % emoticons.length];

// Typewriter effect
function typeWriter(text, i, element) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1, element), 35);
  }
}
document.getElementById("message").textContent = "";
typeWriter(`${message} ${emoticon}`, 0, document.getElementById("message"));

// Date
document.getElementById("date").textContent = "Today: " + dateStr;

// Image
const imgEl = document.createElement("img");
imgEl.src = "images/" + image;
imgEl.alt = "Love Pic";
document.getElementById("image-container").appendChild(imgEl);

// Since start
const startDate = new Date("2025-06-25");
const diffInMs = today - startDate;
const daysTogether = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
document.getElementById("since").textContent =
  `We've been talking for ${daysTogether} day${daysTogether !== 1 ? "s" : ""} now 💗`;

// Open count
let opens = localStorage.getItem("openCount") || 0;
opens++;
localStorage.setItem("openCount", opens);
document.getElementById("tapCount").textContent =
  `You’ve opened this ${opens} time${opens > 1 ? 's' : ''} 💕`;

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.fontSize = 1 + Math.random() * 2 + "rem";
  document.getElementById("hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 300);

// Soft background quote
document.getElementById("bgQuote").textContent =
  softQuotes[Math.floor(Math.random() * softQuotes.length)];

// Service Worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log("SW registered!", reg))
    .catch(err => console.error("SW failed", err));
}
