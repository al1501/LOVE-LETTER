const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// When she clicks YES
yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yay! You just made me the happiest person alive! 🥰❤️";
});

// When she clicks NO (make it playful, button runs away 😆)
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
});
