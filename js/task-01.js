const findCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${findCategories.length}`);
findCategories.forEach((item) => {
  const findName = item.querySelector("h2");
  const findNumber = item.querySelectorAll("li").length;
  console.log(`Category: ${findName.textContent}`);
  console.log(`Elements: ${findNumber}`);
});

