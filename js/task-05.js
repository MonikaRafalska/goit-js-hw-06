const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const userName = () => {
  if (input.value === "") {
    output.innerText = "Anonymous";
  } else {
    output.innerText = input.value;
  }
};

input.addEventListener("input", userName);

