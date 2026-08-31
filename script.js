// ENTER button
const enterBtn = document.getElementById("enter");
const overlay = document.getElementById("overlay");

enterBtn.addEventListener("click", () => {
  overlay.classList.add("gone");
  document.body.classList.add("ready");
  setTimeout(() => (overlay.style.display = "none"), 900);
});

// Fake visitor counter
const counter = document.getElementById("counter");
if (counter) {
  const base = 1436289;
  const seed = base + Math.floor(Math.random() * 100);
  counter.textContent = String(seed).padStart(7, "0");
}

// Fake "duration" for the audio bar — increments a fake time
const timeEl = document.getElementById("current-time");
let secs = 0;
setInterval(() => {
  if (!document.body.classList.contains("ready")) return;
  secs++;
  const m = Math.floor(secs / 60);
  const s = String(secs % 60).padStart(2, "0");
  timeEl.textContent = `${m}:${s}`;
}, 1000);

// Play button just toggles a state
const play = document.getElementById("play-icon");
let playing = false;
play.addEventListener("click", () => {
  playing = !playing;
  play.textContent = playing ? "❚❚" : "▶";
});

// Gentle drift on some elements
document.querySelectorAll(".diiv1, .diiv2").forEach((el, i) => {
  let t = i * 100;
  setInterval(() => {
    t += 0.02;
    el.style.transform = `rotate(${(i === 0 ? -2 : 3) + Math.sin(t) * 1.5}deg)`;
  }, 40);
});
