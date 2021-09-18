const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach(function (name) {
  const list = document.querySelector("#ingredients");
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = name;
  list.append(li);
});
