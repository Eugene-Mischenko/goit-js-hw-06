const inputRange = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");

inputRange.addEventListener("input", () => {
  sizeText.style.fontSize = `${inputRange.value}px`;
});
sizeText.style.fontSize = `${inputRange.value}px`;
