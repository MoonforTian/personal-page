// create a random vertification code
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 4; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

document.addEventListener('DOMContentLoaded', function () {
    const captcha = document.getElementById('captcha');
    const captchaInput = document.getElementById('captcha-input');
    const rememberMeCheckbox = document.getElementById('remember-me');
    const forgotPasswordLink = document.getElementById('forgot-password');

    // initial vertification code
    captcha.textContent = generateCaptcha();

    // refresh vertification code
    captcha.addEventListener('click', function () {
        captcha.textContent = generateCaptcha();
    });

    // the logic of submitting of sign in form
    document.getElementById('login-form').addEventListener('submit', function(event) {
        const enteredCaptcha = captchaInput.value;
        const generatedCaptcha = captcha.textContent;

        // prevent submitting form if vertification code wrong
        if (enteredCaptcha !== generatedCaptcha) {
            alert('Vertificaiton code wrong');
            // prevent submit
            event.preventDefault(); 
            // refresh vertification code
            captcha.textContent = generateCaptcha(); 
        } else {
            // submit the form if vertification code correct
            if (rememberMeCheckbox.checked) {
                // TODO: remember
            }
        }
    });
});
