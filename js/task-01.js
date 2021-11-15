const findItems = document.querySelectorAll("li.item");
console.log("Number of categories: " + findItems.length);
[...findItems].forEach((item) => {
  console.log("Category: " + item.children[0].textContent);
  console.log("Elements: " + item.children[1].children.length);
});
