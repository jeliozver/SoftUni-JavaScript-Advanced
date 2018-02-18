function validate() {
    let usernameForm = $('#username');
    let emailForm = $('#email');
    let passwordForm = $('#password');
    let passwordConfirm = $('#confirm-password');
    let companyNumber = $('#companyNumber');
    let checkbox = $('#company');
    let companyField = $('#companyInfo');
    let submitBtn = $('#submit');
    let validDiv = $('#valid');

    let userRegex = /^[A-Za-z0-9]{3,20}$/;
    let emailRegex = /^(.+@.*\..*)$/;
    let passwordRegex = /^\w{5,15}$/;

    checkbox.on('change', function () {
        if ($(this).is(':checked')) {
            companyField.css('display', 'block');
        } else {
            companyField.css('display', 'none');
        }
    });

    submitBtn.on('click', function (event) {
            event.preventDefault();
            let user = usernameForm.val();
            let email = emailForm.val();
            let password = passwordForm.val();
            let passwordRepeat = passwordConfirm.val();
            let isInvalid = false;

            if (userRegex.test(user)) {
                usernameForm.css('border-color', '');
            } else {
                usernameForm.css('border-color', 'red');
                isInvalid = true;
            }

            if (emailRegex.test(email)) {
                emailForm.css('border-color', '');
            } else {
                emailForm.css('border-color', 'red');
                isInvalid = true;
            }

            if (password !== passwordRepeat) {
                passwordForm.css('border-color', 'red');
                passwordConfirm.css('border-color', 'red');
                isInvalid = true;
            } else {
                if (passwordRegex.test(password)) {
                    passwordForm.css('border-color', '');
                } else {
                    passwordForm.css('border-color', 'red');
                    isInvalid = true;
                }

                if (passwordRegex.test(passwordRepeat)) {
                    passwordConfirm.css('border-color', '');
                } else {
                    passwordConfirm.css('border-color', 'red');
                    isInvalid = true;
                }
            }

            if (companyField.css('display') === 'block') {
                let number = Number(companyNumber.val());

                if (number >= 1000 && number <= 9999) {
                    companyNumber.css('border-color', '');
                } else {
                    companyNumber.css('border-color', 'red');
                    isInvalid = true;
                }
            }

            if (!isInvalid) {
                validDiv.css('display', 'block');
            } else {
                validDiv.css('display', 'none');
            }
        }
    )
}

window.onload = function () {
    validate();
};