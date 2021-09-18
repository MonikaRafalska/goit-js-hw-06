function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const button = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");

const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
  console.log(colorName.textContent);
};

button.addEventListener("click", changeColor);
