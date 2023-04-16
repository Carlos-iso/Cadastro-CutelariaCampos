//Selectors
const $name = document.querySelector(".name");
const $labelName = document.querySelector(".name-label");
let validName = false;

const $email = document.querySelector(".email");
const $labelEmail = document.querySelector(".email-label");
let validEmail = false;

const $password = document.querySelector(".password");
const $labelPassword = document.querySelector(".password-label");
let validPassword = false;

const $confirmPassword = document.querySelector(".confirm-password");
const $labelConfirmPassword = document.querySelector(".confirmpassword-label");
let validConfirmPassword = false;

//Functions Validate

function validateName() {
  if ($name.value.length <= 3) {
    $labelName.setAttribute("style", "color: var(--cor9)");
    $labelName.innerHTML = "*Nome Muito Curto*";
    $name.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
    validName = false;
  } else {
    $labelName.setAttribute("style", "color: var(--cor7)");
    $labelName.innerHTML = "Nome";
    $name.setAttribute("style", "border-bottom: 2px solid var(--cor7)");
    validName = true;
  }
}

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+.)*\.\w+([-.]\w+)*$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

function validateEmail() {
  const $emailValue = $email.value.trim();

  if (emailRegex.test($emailValue)) {
    $labelEmail.setAttribute("style", "color: var(--cor7)");
    $labelEmail.innerHTML = "E-mail";
    $email.setAttribute("style", "border-bottom: 2px solid var(--cor7)");
    validEmail = true;
  } else {
    $labelEmail.setAttribute("style", "color: var(--cor9)");
    $labelEmail.innerHTML = "*E-mail Inválido*";
    $email.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
    validEmail = false;
  }
}

function validatePassword() {
  const $passwordValue = $password.value.trim();
  if (passwordRegex.test($passwordValue)) {
    $labelPassword.setAttribute("style", "color: var(--cor7)");
    $labelPassword.innerHTML = "Senha";
    $password.setAttribute("style", "border-bottom: 2px solid var(--cor7)");
    validPassword = true;
  } else {
    $labelPassword.setAttribute("style", "color: var(--cor9)");
    $labelPassword.innerHTML = "*Senha Muito Curta*";
    $password.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
    validPassword = false;
  }
}

function validateConfirmPassword() {
  if ($password.value === $confirmPassword.value) {
    $labelConfirmPassword.setAttribute("style", "color: var(--cor7)");
    $labelConfirmPassword.innerHTML = "Comfirmar Senha";
    $confirmPassword.setAttribute("style", "border-bottom: 2px solid var(--cor7)");
    validConfirmPassword = true;
  } else {
    $labelConfirmPassword.setAttribute("style", "color: var(--cor9)");
    $labelConfirmPassword.innerHTML = "*Senha Incorreta*";
    $confirmPassword.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
    validConfirmPassword = false;
  }
}

//Blur Functions

function disabledInputName() {
  if ($name.value === "") {
    $labelName.setAttribute("style", "color: var(--cor0)");
    $labelName.innerHTML = "Nome";
    $name.setAttribute("style", "border-bottom: 2px solid var(--cor0)");
    validName = false;
  }
}

function disabledInputEmail() {
  if ($email.value === "") {
    $labelEmail.setAttribute("style", "color: var(--cor0)");
    $labelEmail.innerHTML = "E-mail";
    $email.setAttribute("style", "border-bottom: 2px solid var(--cor0)");
    validEmail = false;
  }
}

function disabledInputPassword() {
  if ($password.value === "") {
    $labelPassword.setAttribute("style", "color: var(--cor0)");
    $labelPassword.innerHTML = "Senha";
    $password.setAttribute("style", "border-bottom: 2px solid var(--cor0)");
    validPassword = false;
  }
}

function disabledInputConfirmPassword() {
  if ($confirmPassword.value === "") {
    $labelConfirmPassword.setAttribute("style", "color: var(--cor0)");
    $labelConfirmPassword.innerHTML = "Comfirmar Senha";
    $confirmPassword.setAttribute("style", "border-bottom: 2px solid var(--cor0)");
    validConfirmPassword = false;
  }
}

//Events Key

$name.addEventListener("input", validateName);
$name.addEventListener("blur", disabledInputName);

$email.addEventListener("input", validateEmail);
$email.addEventListener("blur", disabledInputEmail);

$password.addEventListener("input", validatePassword);
$password.addEventListener("blur", disabledInputPassword);

$confirmPassword.addEventListener("input", validateConfirmPassword);
$confirmPassword.addEventListener("blur", disabledInputConfirmPassword);