// DEFINE LOGIN, REGISTER, FORGOT MODALS
let loginModal = document.querySelector('#signInModal');
let registerModal = document.querySelector('#signupModal');
let forgotModal = document.querySelector('#forgotModal');
let verifyModal = document.querySelector('#verifyModal');
let verifyCodeModal = document.querySelector('#verifyCodeModal');
let resetModal = document.querySelector('#resetPasswordModal');
let resetConfirmModal = document.querySelector('#resetConfirmModal');

// DEFINE EVENT BUTTONS
const loginToRegisterTrigger = document.querySelector('#btn-logintosignup');
const registerToLoginTrigger = document.querySelector('#btn-signuptologin');
const loginToForgotTrigger = document.querySelector('#btn-forgot');
const forgotToLoginTrigger = document.querySelector('#btn-forgot-to-login');
const forgotToVerifyTrigger = document.querySelector('#btn-forgot-to-verify');
const verifytoForgotTrigger = document.querySelector('#btn-verify-to-forgot');
const verifytoCodeTrigger = document.querySelector('#btn-verify-to-code');
const confirmTrigger = document.querySelector('#btn-confirm');
const resetTrigger = document.querySelector('#btn-reset');

// TRIGGER FOR CHANGE MODAL
loginToRegisterTrigger.addEventListener('click', loginToRegister);
registerToLoginTrigger.addEventListener('click', registerToLogin);
loginToForgotTrigger.addEventListener('click', loginToForgot);
forgotToLoginTrigger.addEventListener('click', forgotToLogin);
forgotToVerifyTrigger.addEventListener('click', forgotToVerify);
verifytoForgotTrigger.addEventListener('click', verifytoForgot);
verifytoCodeTrigger.addEventListener('click', verifytoCode);
confirmTrigger.addEventListener('click', resetPassword);
resetTrigger.addEventListener('click', resetConfirmPassword);

// DEFINE MODAL FOR CHANGE
let login = new bootstrap.Modal(loginModal);
let register = new bootstrap.Modal(registerModal);
let forgot = new bootstrap.Modal(forgotModal);
let verify = new bootstrap.Modal(verifyModal);
let verifyCode = new bootstrap.Modal(verifyCodeModal);
let reset = new bootstrap.Modal(resetModal);
let resetConfirm = new bootstrap.Modal(resetConfirmModal);

// LOGIN TO REGISTER
function loginToRegister() {
    register.show();
    login.hide();
}

// REGISTER TO LOGIN
function registerToLogin() {
    register.hide();
    login.show();
}

// LOGIN TO FORGOT PASSWORD
function loginToForgot() {
    login.hide();
    forgot.show();
}

// FORGOT TO LOGIN
function forgotToLogin() {
    login.show();
    forgot.hide();
}

// FORGOT TO VERIFY
function forgotToVerify() {
    verify.show();
    forgot.hide();
}

// VERIFY TO FORGOT
function verifytoForgot() {
    verify.hide();
    forgot.show();
}

// VERIFY TO VERIFICATION CODE
function verifytoCode() {
    verify.hide();
    verifyCode.show();
}

// VERIFY TO VERIFICATION CODE
function resetPassword() {
    verifyCode.hide();
    reset.show();
}

// VERIFY TO VERIFICATION CODE
function resetConfirmPassword() {
    reset.hide();
    resetConfirm.show();
}