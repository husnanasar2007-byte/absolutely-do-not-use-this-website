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
