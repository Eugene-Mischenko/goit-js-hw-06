const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const valueElements = document.querySelector("#value");
let counterValue = 0;
buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);
function decrement() {
  counterValue -= 1;
  valueElements.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  valueElements.textContent = counterValue;
}
