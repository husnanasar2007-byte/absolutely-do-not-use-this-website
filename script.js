let time = 0;

const messages = [
  "You could have closed this tab. You didn’t.",
  "Bold of you to think this helps.",
  "Your ancestors are watching.",
  "This is not productivity. This is a choice.",
  "You’re still here. Interesting.",
  "Even this website is judging you.",
  "At this point, stay. Leaving would be awkward.",
  "You are doing absolutely nothing. Perfect."
];

const motivations = [
  "You’re not lazy. You’re buffering.",
  "Success is optional. Vibes are mandatory.",
  "Do it later. Later is eternal.",
  "Starting is overrated.",
  "You tried. Emotionally.",
  "Rest is important. This is not rest, though."
];

const messageDiv = document.getElementById("message");
const timerDiv = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  messageDiv.innerText = "Fixing your life… please wait.";

  setInterval(() => {
    time++;
    timerDiv.innerText = `Time wasted: ${time} seconds`;

    const chaos = Math.random();
    if (chaos < 0.6) {
      messageDiv.innerText =
        messages[Math.floor(Math.random() * messages.length)];
    } else {
      messageDiv.innerText =
        motivations[Math.floor(Math.random() * motivations.length)];
    }
  }, 3000);
});
const roasts = [
  "You could have left. You stayed.",
  "This website is useless. So is overthinking.",
  "Your ancestors survived wars for this tab.",
  "At this point, staying is a commitment.",
  "Productivity is scared of you."
];

setInterval(() => {
  const roast = roasts[Math.floor(Math.random() * roasts.length)];
  document.getElementById("roast").innerText = roast;
}, 12000);
let progress = 0;

setInterval(() => {
  if (progress < 90) {
    progress += Math.floor(Math.random() * 10);
  } else {
    progress = Math.floor(Math.random() * 30);
  }

  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("progress-text").innerText =
    progress > 80 ? "Almost there… emotionally." : "Loading your life…";
}, 2000);
const motivations = [
  "If not today, then also not tomorrow.",
  "Success is optional. Vibes are mandatory.",
  "You are not lazy. You are buffering.",
  "Doing nothing is still a decision. You’re decisive.",
  "Resting is productive if you believe hard enough."
];

setInterval(() => {
  const line = motivations[Math.floor(Math.random() * motivations.length)];
  document.getElementById("motivation").innerText = line;
}, 15000);
