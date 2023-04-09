let eyeClass = document.querySelector('.eye');
let eyeId = document.querySelector('#eye');
let inputPassword = document.querySelector('.password');
let inputConfirmPassword = document.querySelector('.confirm-password');

function eyePasswordRegister(){

    if (inputPassword.getAttribute('type') == 'password' || inputConfirmPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text') || inputConfirmPassword.setAttribute('type', 'text');       
    } else {
        inputPassword.setAttribute('type', 'password') || inputConfirmPassword.setAttribute('type', 'password'); 
    };
     
    if (inputPassword.getAttribute('type') == 'text' || inputConfirmPassword.getAttribute('type') == 'text') {
        eyeClass.setAttribute('src', './src/icons/eye-close.svg');
        eyeId.setAttribute('src', './src/icons/eye-close.svg');
    } else {
        eyeClass.setAttribute('src', './src/icons/eye-open.svg');
        eyeId.setAttribute('src', './src/icons/eye-open.svg');
    };
}


eyeClass.addEventListener('click', eyePasswordRegister);
eyeId.addEventListener('click', eyePasswordRegister);