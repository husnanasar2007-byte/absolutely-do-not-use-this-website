document.addEventListener("DOMContentLoaded", () => {
let time = 0;
let chaosInterval;
chaosInterval = setInterval(() => {
  // placeholder
}, 5000);

const bgMusic = document.getElementById("bg-music");

function startMusic() {
  bgMusic.volume = 0.25; // soft
  bgMusic.play().catch(() => {});
  document.removeEventListener("click", startMusic);
  document.removeEventListener("scroll", startMusic);
};

document.addEventListener("click", startMusic);
document.addEventListener("scroll", startMusic);
  
const messages = [
  "You could have closed this tab. You didn’t.",
  "Bold of you to think this helps.",
  "Your ancestors are watching.",
  "This is not productivity. This is a choice.",
  "You’re still here. Interesting.",
  "Even this website is judging you.",
  "At this point, stay. Leaving would be awkward.",
  "You are doing absolutely nothing. Perfect.",
  "You could have left. You stayed.",
  "This website is useless. So is overthinking.",
  "Your ancestors survived wars for this tab.",
  "At this point, staying is a commitment.",
  "Productivity is scared of you.",
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
const failSound = document.getElementById("failSound");
const taskResult = document.getElementById("task-result");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
  
startBtn.addEventListener("click", () => {
  failSound.play();
  startBtn.style.display = "none";
  clearInterval(chaosInterval);
  messageDiv.innerText = "Fixing your life… please wait.";
  document.getElementById("tasks").style.display = "block";
});

 setInterval(() => {
   time++;
   timerDiv.innerText = `slo-mo time wasted: ${time} seconds`;

const chaos = Math.random();
  if (chaos < 0.6) {
    messageDiv.innerText =
      messages[Math.floor(Math.random() * messages.length)];
  } else {
     messageDiv.innerText =
      motivations[Math.floor(Math.random() * motivations.length)];
    }
  }, 5000);

const roasts = [
 "Merry Christmas! May your Wi-Fi be strong and your relatives leave early.",
 "Santa saw your search history. he is traumatized.",
 "Eat. Sleep. Repeat. Blame Christmas.",
 "Dear Santa, I can explain.",
 "Christmas calories don’t count. Science said so.",
 "Hope your Christmas is as unhinged as your New Year plans.",
 "May your gifts be useful and your socks unmatched.",
 "Jingle bells, bank account yells.",
 "Survived another family gathering. Merry Christmas to you.",
 "All I want for Christmas is peace… and snacks.",
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
  
const lateMotivations = [
  "If not today, then also not tomorrow.",
  "Success is optional. Vibes are mandatory.",
  "You are not lazy. You are buffering.",
  "Doing nothing is still a decision. You’re decisive.",
  "Resting is productive if you believe hard enough."
];

setInterval(() => {
  const line = lateMotivations[Math.floor(Math.random() * lateMotivations.length)];
  document.getElementById("motivation").innerText = line;
}, 15000);

const humiliation = [
  "Great choice. Wrong, but great.",
  "Different button. Same disappointment.",
  "You really believed this one mattered."
];

btn1.addEventListener("click", () => {
  failSound.currentTime = 0;
  failSound.play().catch(() => {});
  messageDiv.innerText = "";
  taskResult.innerText = humiliation[0];
});

btn2.addEventListener("click", () => {
  failSound.currentTime = 0;
  failSound.play().catch(() => {});
  messageDiv.innerText = "";
  taskResult.innerText = humiliation[1];
});

btn3.addEventListener("click", () => {
  failSound.currentTime = 0;
  failSound.play().catch(() => {});
  messageDiv.innerText = "";
  taskResult.innerText = humiliation[2];
});

const input = document.getElementById("life-input");
const submit = document.getElementById("submit-life");
const inputResult = document.getElementById("input-result");

submit.addEventListener("click", () => {
  failSound.currentTime = 0;
failSound.play().catch(() => {});
  if (input.value.trim() === "") {
    inputResult.innerText = 
      "You submitted nothing. Surprisingly accurate.";
  } else {
    inputResult.innerText = 
      "Interesting. This will not be used.";
  }

  input.value = "";
});

function showSanta() {
  const santa = document.getElementById("santa");
  const text = document.getElementById("santa-text");

  // 😊 Enters happy
  santa.src = "santa-happy.png";
  santa.classList.add("show");
  text.innerText = "Ho ho ho!";
  text.style.display = "block";

  // 😐 Processing
  setTimeout(() => {
    text.innerText = "Hmm... what's happening?!";
  }, 2000);

  // 😔 Disappointed
  setTimeout(() => {
    santa.src = "santa-disappointed.png";
    text.innerText = "Oh...";
  }, 3500);

  // 👀 Judging
  setTimeout(() => {
    santa.src = "santa-judge.png";
    text.innerText = "I see.";
  }, 5000);

  // 🚪 Leaves
  setTimeout(() => {
    santa.classList.remove("show");
    text.style.display = "none";
  }, 7000);
  }

  // first appearance
  setTimeout(showSanta, 5000);

  // repeat every 12 seconds
  setInterval(showSanta, 12000);

  // 🎁 Gift opening logic
const openGiftBtn = document.getElementById("open-gift");
const closedGift = document.getElementById("gift-closed");
const openedGift = document.getElementById("gift-opened");
const giftText = document.getElementById("gift-text");
const giftSound = document.getElementById("gift-sound");
  
openGiftBtn.addEventListener("click", () => {
  giftSound.play();
  closedGift.style.display = "none";
  openedGift.style.display = "block";
  openGiftBtn.style.display = "none";
  giftText.textContent = "take this and just leave now.";
});

const roastBtn = document.getElementById("roastBtn");
const roastResult = document.getElementById("roastResult");
 
const roastMessages = [
  "Wow. That number explains everything.",
  "Santa saw that number and left.",
  "Interesting choice. Very… you.",
  "Math refuses to work with this.",
  "Congratulations. You played yourself.",
  "This number has zero expectations from you.",
  "Result: still wrong.",
  "Math checked. You didn’t.",
  "Even numbers are disappointed.",
  "Calculator needs a break after this.",
  "That answer scared the algorithm.",
  "I ran the numbers. They ran away.",
  "Error 404: Logic not found.",
  "Congrats. You invented a new wrong.",
  "That was… an attempt.",
  "Even the elves said ‘nah’.",
  "Santa didn’t skip you. He avoided you.",
  "North Pole rejected your application. Permanently.",
  "Result: Try again next life 🎄",
  "Success chance: 0.01%",
  "Calculator crashed seeing your dreams 💀",
  "Santa left the chat."
];

roastBtn.addEventListener("click", () => {
  failSound.currentTime = 0;
  failSound.play().catch(() => {});
  
  const num = document.getElementById("userNumber").value;

  if (num === "") {
    roastResult.textContent = "At least ENTER something 🙄";
    return;
  }

  const randomRoast =
    roastMessages[Math.floor(Math.random() * roastMessages.length)];

  roastResult.textContent = randomRoast;
});
});
