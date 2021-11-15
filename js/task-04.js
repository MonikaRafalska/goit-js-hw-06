const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counter = 0;

const increment = () => {
  counter += 1;
  value.textContent = counter;
};

const decrement = () => {
  counter -= 1;
  value.textContent = counter;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
