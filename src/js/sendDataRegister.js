const loader = document.querySelector(".loader");
const $btmSubmit = document.querySelector(".btn-create");
const $msgerror = document.querySelector(".msgerror");
const $msgsuccess = document.querySelector(".msgsuccess");
const urlLocal = "http://localhost:3000";
const urlRender = "https://api-cutelariacampos.onrender.com";
const urlBase = urlLocal;
let invalidFileld = "Campos Inválidos";
let $msg = "Erro";

async function validForm() {
  showLoader();
  if (
    validName === true &&
    validEmail === true &&
    validPassword === true &&
    validConfirmPassword === true
  ) {
    let $nameValue = $name.value;
    let $emailValue = $email.value.toLowerCase();
    let $passwordValue = $password.value.trim();

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
      .catch(msgErrorText)
      .catch(msgErrorStyle);
  } else {
    $msg = invalidFileld;
    msgErrorStyle();
    msgErrorText();
    colors();
  }
  hideLoader();
};

function awtResponce(response) {
  return response.json();
};

function dataPost(dataPost) {
  $msg = Object.values(dataPost);

  if ($msg == "Já Existe Um Usuário Com Esse E-mail") {
    msgErrorStyle();
    msgErrorText();
    $labelEmail.setAttribute("style", "color: var(--cor9)");
    $email.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
  }
  if ($msg == "Cadastro Bem Sucedido!") {
    msgSuccessStyle();
    msgSuccessText();
  }
  if ($msg == "Erro Desconhecido Tente Novamente Mais Tarde") {
    msgErrorStyle();
    msgErrorText();
    colors();
  };
};

function colors() {
  $labelName.setAttribute("style", "color: var(--cor9)");
  $name.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
  $labelEmail.setAttribute("style", "color: var(--cor9)");
  $email.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
  $labelPassword.setAttribute("style", "color: var(--cor9)");
  $password.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
  $labelConfirmPassword.setAttribute("style", "color: var(--cor9)");
  $confirmPassword.setAttribute("style", "border-bottom: 2px solid var(--cor9)");
};

function msgSuccessText() {
  $msgsuccess.innerHTML = `<strong>${$msg}</strong>`;
};

function msgSuccessStyle() {
  $msgsuccess.setAttribute("style", "display: block");
  $msgerror.setAttribute("style", "display: none");
  $msgerror.innerHTML = "";
  resetFilds();
};

function msgErrorText() {
  $msgerror.innerHTML = `<strong>${$msg}</strong>`;
};

function msgErrorStyle() {
  $msgsuccess.setAttribute("style", "display: none");
  $msgsuccess.innerHTML = "";
  $msgerror.setAttribute("style", "display: block");
};

function showLoader() {
  loader.style.display = "flex";
};

function hideLoader() {
  loader.style.display = "none";
};

function hideMsg() {
  if ($msgerror || $msgsuccess.style.display == "block") {
    $msgerror.setAttribute("style", "display: none");
    $msgsuccess.setAttribute("style", "display: none");
    return;
  };
};

function resetFilds() {
  $name.value = "";
  disabledInputName();
  $email.value = "";
  disabledInputEmail();
  $password.value = "";
  disabledInputPassword();
  $confirmPassword.value = "";
  disabledInputConfirmPassword();
};

$btmSubmit.addEventListener("click", () => {
  hideMsg();
  validForm();
});