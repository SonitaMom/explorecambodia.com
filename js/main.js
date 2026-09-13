const titles = [
  "Welcome to cambodia",
  "Cambodia kingdom of wonder",
  "Experience with cambodia",
];

let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= titles.length) {
    currentIndex = 0;
  }
  document.getElementById("hero-title").textContent = titles[currentIndex];
}, 3000);
