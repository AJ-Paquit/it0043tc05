document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll('nav a');
    const offset = 100;

    links.forEach(link => {

        link.addEventListener('click', function (e) {

            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition - offset;

                window.scrollBy({

                    top: offsetPosition,
                    behavior: 'smooth'

                });

            }

        });

    });

});

const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const submitButton = document.getElementById('submit');
const emailError = document.getElementById('emailError');
const nameError = document.getElementById('nameError');

function validateEmail() {

    const emailValue = emailInput.value;

    if (!emailValue.includes('@') || !emailValue.includes('.')) {

        return false;

    } 
    
    else {

        emailError.textContent = '';
        return true;

    }

}

function validateName() {

    const nameValue = nameInput.value;

    if (nameValue.length < 3) {

        return false;

    } 
    
    else {

        nameError.textContent = '';
        return true;

    }

}

function checkFormValidity() {

    const isEmailValid = validateEmail();
    const isNameValid = validateName();
    
    submitButton.disabled = !(isEmailValid && isNameValid);

}

emailInput.addEventListener('input', checkFormValidity);
nameInput.addEventListener('input', checkFormValidity);

document.getElementById('form').addEventListener('submit', function (event) {

    event.preventDefault(); 

    if (validateEmail() && validateName()) {

        alert('Form submitted successfully!');

    }

});