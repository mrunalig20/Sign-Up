let userName = document.getElementById("txtUsername");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");

function validateInput() {
  if (userName.value.trim() === "") {
    onError(userName, "Username cannot be empty");
  } else {
    onSuccess(userName);
  }
  if (email.value.trim() === "") {
    onError(email, "Email cannot be empty");
  } else if (!isValidEmail(email.value.trim())) {
    onError(email, "Email is not valid");
  } else {
    onSuccess(email);
  }

  if (pwd.value.trim() === "") {
    onError(pwd, "Password cannot be empty");
  } else if (pwd.value.length <= 2 || pwd.value.length > 15) {
    onError(pwd, "password length must be between 3 and 15");
  } else {
    onSuccess(pwd);
  }

  if (conPwd.value.trim() === "") {
    onError(conPwd, "Confirm password cannot be empty");
  } else if (pwd.value.trim() !== conPwd.value.trim()) {
    onError(conPwd, "Password & Confirm password not matching");
  } else {
    onSuccess(conPwd);
  }
}

// When the SignUp button click
document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  validateInput();
});

function onSuccess(input) {
  let parent = input.parentElement;
  let messageElement = parent.querySelector("small");
  let checked = parent.querySelector("i");
  messageElement.style.visibility = "hidden";
  checked.style.visibility = "visible";
}

function onError(input, message) {
  let parent = input.parentElement;
  let messageElement = parent.querySelector("small");
  let checked = parent.querySelector("i");
  messageElement.style.visibility = "visible";
  messageElement.innerText = message;
  checked.style.visibility = "hidden";
  messageElement.style.color = "red";
}

function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
