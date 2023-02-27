let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");  
let showRgb = document.querySelector("p");
let randomBtn = document.getElementById("random")

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  showRgb.textContent =  body.style.background + ";"; // display used rgb colors
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomColor);

function getRandomColor() {
  const randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

  color1.value = randomColor1;
  color2.value = randomColor2;

  setGradient();
}

window.onload = setGradient(); // display used rgb colors onload