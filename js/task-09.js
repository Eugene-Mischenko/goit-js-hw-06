function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const background = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
let randomColor = getRandomHexColor();
btnChangeColor.addEventListener("click", color);
function color() {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  background.textContent = randomColor;
}
