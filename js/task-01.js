const categoryList = document.querySelectorAll(".item");
console.log(`Number of catagories: ${categoryList.length}`);

categoryList.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
