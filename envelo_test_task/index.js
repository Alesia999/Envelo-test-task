let inputs = document.querySelector(".number_inputs");
let numberField = document.querySelector(".input_number");
let codeField = document.querySelector(".input_code");
let allFields = document.querySelectorAll(".input");
let button = document.querySelector("#btn");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error_message");
let modal_container = document.querySelector("#modal_container");
let closure = document.querySelector("#close");
let continuing = document.querySelector("#continue");
let numberPassed = false;

button.addEventListener("click", function (event) {
  if (inputs.hidden) {
    event.preventDefault();
    inputs.hidden = false;
  }
});
function toggleBorder(input) {
  if (input.value === "") {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
  }
}
function toggleLoader() {
  const loaderHTML = document.querySelector(".loader");
  const isHidden = loaderHTML.hasAttribute("hidden");
  if (isHidden) {
    loaderHTML.removeAttribute("hidden");
  } else {
    loaderHTML.setAttribute("hidden", "");
  }
}
function validateNumber(numberValue, codeValue) {
  if (!numberValue || !codeValue) {
    errorMessage.innerHTML = "Number and/or Code could not be blank!";
  } else if (
    isNaN(numberValue) ||
    isNaN(codeValue) ||
    numberValue.length !== 9 ||
    codeValue.length !== 4
  ) {
    errorMessage.innerHTML =
      "Number should contain 9 numbers (e.g. 123456789) and Code should contain 4 numbers (e.g. 1234)!";
  } else {
    errorMessage.innerHTML = "";
    numberPassed = true;
  }
}
form.addEventListener("submit", function (event) {
  let numberValue = numberField.value;
  let codeValue = codeField.value;
  allFields.forEach((input) => {
    toggleBorder(input);
  });
  validateNumber(numberValue, codeValue);

  if (numberPassed) {
    toggleLoader();
    setTimeout(() => {
      modal_container.classList.add("show");
    }, 3000);
    setTimeout(() => {
      toggleLoader();
    }, 3000);
  }

  event.preventDefault();
});
function clearForm() {
  numberPassed = false;
  numberField.value = null;
  codeField.value = null;
  modal_container.classList.remove("show");
}
closure.addEventListener("click", function () {
  inputs.hidden = true;
  clearForm();
});
continuing.addEventListener("click", function () {
  inputs.hidden = false;
  clearForm();
});
