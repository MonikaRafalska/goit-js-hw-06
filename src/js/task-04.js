let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

const counterChange = (operation) => {
  operation();
  value.innerText = counterValue;
};
const add = () => counterValue++;
const rem = () => counterValue--;
incrementButton.addEventListener("click", () => counterChange(add));
decrementButton.addEventListener("click", () => counterChange(rem));
