const inputRange = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");

function setOutput(event) {
  sizeText.style.fontSize = `${event.currentTarget.value}px`;
}

inputRange.addEventListener("input", setOutput);
