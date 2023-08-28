const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const liElements = document.createElement("li");

const markUp = ingredients.map((element) => {
  const liElements = document.createElement("li");
  liElements.textContent = element;
  liElements.classList.add("item");
  return liElements;
});
list.append(...markUp);
