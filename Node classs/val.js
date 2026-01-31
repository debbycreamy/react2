const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");

yesButton.addEventListener("click", () => {
  alert("Yay! I knew you would say yes! ❤️");
  const celebrationGif = document.getElementById("celebration-gif");
  celebrationGif.style.display = "block";
});

noButton.addEventListener("mouseover", (e) => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "fixed";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});
