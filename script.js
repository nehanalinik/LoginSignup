const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //   getting the values from inputs
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;

  //   const lengthpass = console.log(passwordValue.toString().length);

  if (firstNameValue === "") {
    errorFun(firstName, "First Name cannot be empty!");
  } else {
    successFun(firstName);
  }
  if (lastNameValue === "") {
    errorFun(lastName, "Last Name cannot be empty!");
  } else {
    successFun(lastName);
  }
  if (emailValue === "") {
    errorFun(email, "Email cannot be empty!");
  } else if (!isEmail(emailValue)) {
    errorFun(email, "Looks like its not an email! Type correctly.");
  } else {
    successFun(email);
  }
  if (passwordValue === "") {
    errorFun(password, "Password cannot be empty!");
  } else {
    successFun(password);
  }
  if (password2Value === "") {
    errorFun(password2, "Re-enter password cannot be empty!");
  } else if (passwordValue !== password2Value) {
    errorFun(password2, "Password does not match");
  } else {
    successFun(password2);
  }
}

function errorFun(input, message) {
  const form__inputs = input.parentElement;
  const smalltag = form__inputs.querySelector("small");
  smalltag.innerText = message;
  form__inputs.className = "inputs error";
}

function successFun(input) {
  const form__inputs = input.parentElement;

  form__inputs.className = "inputs success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
