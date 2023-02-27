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
  /* 
  16777215 is the decimal value of the hex #FFFFFF 
  The Math.random() method generates a random number between 0 and 1. Multiplying it by 
  16777215 gives us a number between 0 and 16777215. We then use the Math.floor() method 
  to round down the number to the nearest integer, which ensures that we get a valid 
  hexadecimal color value when we convert it to a string using the toString() method 
  with a base of 16.
  */

  color1.value = randomColor1;
  color2.value = randomColor2;

  setGradient();
}

window.onload = setGradient(); // display used rgb colors onload