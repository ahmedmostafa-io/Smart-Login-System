// ? variables
const $ = (selector) => document.querySelector(selector);
var signUpBtn = $("#signUpBtn");
var signInBtn = $("#signIn");
const loginBox = $("#logIn");
const signUpBox = $("#signUp");
var buttonLogIN = $("#buttonLogIN");
var buttonSignUp = $("#buttonSignUp");
var signUpPass = $("#signUpPass");
var signUpEmail = $("#signUpEmail");
var signUpName = $("#signUpName");
var userNameSave = $("#userNameSave");
var signinPass = $("#signinPass");
var signinEmail = $("#signinEmail");
var mainPerson = $("#mainPerson");
var warning = $("#warning");
var well = $("#well");
var wrong = $("#wrong");
var GoldenBtn = $("#GoldenBtn");
var wrongMail = $("#wrongMail");
var mainPerson = $("#mainPerson");
var warningInputs = $("#warningInputs");
var user = JSON.parse(localStorage.getItem("user1")) || [];
var userSignIN = [];
var validateMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ! functions and events
signUpBtn.addEventListener("click", function () {
  loginBox.classList.add("d-none");
  signUpBox.classList.remove("d-none");
});

function isEmailExist() {
  for (var i = 0; i < signUpArray.length; i++) {
    if (user[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
      return false;
    }
  }
}

signInBtn.addEventListener("click", function () {
  signUpBox.classList.add("d-none");
  loginBox.classList.remove("d-none");
});

buttonSignUp.addEventListener("click", function () {
  if (
    signUpName.value === "" &&
    signUpEmail.value === "" &&
    signUpPass.value === ""
  ) {
    signUpName.classList.add("is-invalid");
    signUpPass.classList.add("is-invalid");
    wrong.classList.remove("d-none");
    well.classList.add("d-none");
    wrongMail.classList.add("d-none");
  }
  if (validate(validateMail, signUpEmail)) {
    var users = {
      name: signUpName.value,
      email: signUpEmail.value,
      pass: signUpPass.value,
    };

    user.push(users);
    localStorage.setItem("user1", JSON.stringify(user));
    clear();
    wrong.classList.add("d-none");
    well.classList.remove("d-none");
    signUpName.classList.add("is-valid");
    signUpPass.classList.add("is-valid");
    wrongMail.classList.add("d-none");
    isEmailExist();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "your email is wrong!",
    });
  }
  if (isEmailExist() == true) {
    wrongMail.classList.remove("d-none");
    signUpName.classList.add("is-valid");
    signUpPass.classList.add("is-valid");
  }
});
function clear() {
  signUpName.value = "";
  signUpEmail.value = "";
  signUpPass.value = "";
}
function clearuser() {
  signinEmail.value = "";
  signinPass.value = "";
}
buttonLogIN.addEventListener("click", function () {
  var userInput = {
    email: signinEmail.value,
    pass: signinPass.value,
  };
  var foundIndex = user.findIndex(
    (u) => u.email === userInput.email && u.pass === userInput.pass
  );
  // userSignIN.push(userInput);
  if (foundIndex !== -1) {
    mainPerson.classList.remove("d-none");
    loginBox.classList.add("d-none");
    display(foundIndex);
    clearuser();
  } else {
    warning.classList.remove("d-none");
  }
});
function display(index) {
  var displayit = ` <span class="text-info fs" id="username">Welcome ${user[index].name}</span>`;
  userNameSave.innerHTML = displayit;
}

function validate(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");

    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");

    return false;
  }
}
GoldenBtn.addEventListener("click", function () {
  mainPerson.classList.add("d-none");
  loginBox.classList.remove("d-none");
});
