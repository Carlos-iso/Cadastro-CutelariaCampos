const $btmSubmit = document.querySelector(".btn-create");
const $msgerror = document.querySelector(".msgerror");
const $msgsuccess = document.querySelector(".msgsuccess");
const urlLocal = "http://localhost:3000";
const urlRender = "https://api-cutelariacampos.onrender.com";
const urlBase = urlRender;
let clearFileld = "Campos Vazios";
let $msg;

async function validForm() {
  if (
    validName === true &&
    validEmail === true &&
    validPassword === true &&
    validConfirmPassword === true
  ) {
    let $nameValue = $name.value;
    let $emailValue = $email.value;
    let $passwordValue = $password.value;

    let jsonDataCustomer = JSON.stringify({
      name: $nameValue,
      email: $emailValue,
      password: $passwordValue,
    });
    await fetch(`${urlBase}/account/new`, {
      method: "POST",
      body: jsonDataCustomer,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(awtResponce)
      .then(dataPost)
      .then(msgSuccess)
      .then(resetFilds)
      .catch(() => msgError());
  } else {
    $msg = $msgerror.innerHTML = `<strong>${clearFileld}</strong>`;
    msgError()
  }
}

function awtResponce(response) {
  return response.text();
}

function dataPost(dataPost) {
  $msg = dataPost
}

function msgSuccess() {
  $msgsuccess.setAttribute("style", "display: block");
  $msgsuccess.innerHTML = `<strong>${$msg}</strong>`;
  $msgerror.setAttribute("style", "display: none");
  $msgerror.innerHTML = "";
}

function msgError() {
  $msgsuccess.setAttribute("style", "display: none");
  $msgsuccess.innerHTML = "";
  $msgerror.setAttribute("style", "display: block");
  $msgerror.innerHTML = `<strong>${$msg}</strong>`;
}

function resetFilds() {
  $name.value = "";
  disabledInputName();
  $email.value = "";
  disabledInputEmail();
  $password.value = "";
  disabledInputPassword();
  $confirmPassword.value = "";
  disabledInputConfirmPassword();
}

$btmSubmit.addEventListener("click", validForm);