const list = document.querySelector("#validation-input");
function checkInput(event) {
  if (list.value.length !== Number(list.getAttribute("data-length"))) {
    list.classList.add("invalid");
  } else {
    list.classList.remove("invalid");
    list.classList.add("valid");
  }
}
list.addEventListener("blur", checkInput);
