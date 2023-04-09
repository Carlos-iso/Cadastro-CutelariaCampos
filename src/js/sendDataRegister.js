const btmSubmit = document.querySelector(".btn-create");
const msgsuccess = document.querySelector(".msgsuccess");
const msgerror = document.querySelector(".msgerror");
const urlLocal = "http://localhost:3000";
const urlRender = "https://api-cutelariacampos-dev.onrender.comgit";
const urlBase = urlRender;

async function validForm() {
    if (
      validName === true &&
      validEmail === true &&
      validPassword === true &&
      validConfirmPassword === true
    ) {
      let nameValue = $name.value;
      let emailValue = email.value;
      let passwordValue = password.value;

      let jsonDataCustomer = JSON.stringify({
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      });
      await fetch(`${urlBase}/account/new`, {
        method: "POST",
        body: jsonDataCustomer,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(await resetFilds)
        .then(await msgSuccess)
        .catch((err) => console.error(err))
        .catch(await msgError());
    } else {
    await msgError();
  }
}

function awtResponce() {
  (response) => response.json();
}

function msgSuccess() {
  msgsuccess.setAttribute("style", "display: block");
  msgsuccess.innerHTML = "<strong>Dados Cadastrados Com Sucesso!</strong>";
  msgerror.setAttribute("style", "display: none");
  msgerror.innerHTML = "";
}

function msgError() {
  msgerror.setAttribute("style", "display: block");
  msgerror.innerHTML = "<strong>Erro Ao Cadastrar Dados!</strong>";
  msgsuccess.setAttribute("style", "display: none");
  msgsuccess.innerHTML = "";
}

function dataPost() {
  (dataPost) => console.log(dataPost);
}

function resetFilds() {
  $name.value = "";
  disabledInputName();
  email.value = "";
  disabledInputEmail();
  password.value = "";
  disabledInputPassword();
  confirmPassword.value = "";
  disabledInputConfirmPassword();
}

btmSubmit.addEventListener("click", validForm());