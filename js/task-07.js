const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const changeSize = (event) => {
  text.style.fontSize = `${slider.value}px`;
};
slider.addEventListener("input", changeSize);
