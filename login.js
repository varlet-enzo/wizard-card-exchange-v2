function validateForm() {
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const mdp = document.getElementById('mdp');
    const mdpConfirm = document.getElementById('mdpConfirm');
    const captchaInput = document.getElementById('captcha-form'); 
    const messageDiv = document.getElementById('message');

    let passCheck = new RegExp(
    "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[#$@!&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$"
);

    let isValid = true;
    messageDiv.innerHTML = ''; 

    if (pseudo.value.length < 6) {
        pseudo.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">Le pseudo doit comporter au moins 6 caractères.</p>';
    } else {
        pseudo.classList.remove('invalid');
        pseudo.classList.add('valid');
    }

    if (!email.validity.valid) {
        email.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">Veuillez entrer un email valide.</p>';
    } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
    }

    if (!passCheck.test(mdp.value.trim())) {
        mdp.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">Le mot de passe doit comporter au moins 8 caractères, dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.</p>';
    } else {
        mdp.classList.remove('invalid');
        mdp.classList.add('valid');
    }

if (mdp.value !== mdpConfirm.value) {
    console.log("Validation de la confirmation échouée"); 
    mdpConfirm.classList.add('invalid');
    isValid = false;
    messageDiv.innerHTML += '<p class="error">La vérification du mot de passe ne correspond pas.</p>';
} else {
    console.log("Validation de la confirmation réussie"); 
    mdpConfirm.classList.remove('invalid');
    mdpConfirm.classList.add('valid');
}
    
    if (captchaInput.value.trim() === '') {
        captchaInput.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">Le champ CAPTCHA ne peut pas être vide.</p>';
    } else if (captchaInput.value !== captchavalue) {
        captchaInput.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">Le captcha est incorrect.</p>';
    } else {
        captchaInput.classList.remove('invalid');
        captchaInput.classList.add('valid');
    }

    if (isValid) {
        messageDiv.innerHTML = '<p class="success">Formulaire soumis avec succès !</p>';
    }
}

let captchavalue = '';
const fonts = ["cursive","sans-sherif","serif","monospace"]

function generatecaptcha() {
    let value = btoa(Math.random() * 1000000000);
    value = value.substr(0, 5 + Math.floor(Math.random() * 5));
    captchavalue = value;
}

function setcaptcha() {
    const html = captchavalue.split("").map((char) => {
        const rotate = -20 + Math.floor(Math.random() * 30);
        const font = Math.floor(Math.random() * fonts.length);
        return `<span
          style="
          transform:rotate(${rotate}deg);
          font-family:${fonts[font]}
          "
        >${char}</span>`;
    }).join("");
    document.querySelector(".captcha .preview").innerHTML = html;
}

function initcaptcha() {
    document.querySelector(".captcha .captcha-refresh").addEventListener("click", function() {
        generatecaptcha();
        setcaptcha();
    });
    generatecaptcha();
    setcaptcha();
}

initcaptcha();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleMdp').addEventListener('click', function() {
        const mdpInput = document.getElementById('mdp');
        if (mdpInput.type === 'password') {
            mdpInput.type = 'text';
            this.textContent = 'Masquer';
        } else {
            mdpInput.type = 'password';
            this.textContent = 'Afficher';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    const icon = document.getElementById('icon');
    const form = document.getElementById('registrationForm'); 

    toggleButton.addEventListener('click', () => {
        if (icon.classList.contains('icon-sun')) {
            icon.classList.remove('icon-sun');
            icon.classList.add('icon-moon');
            document.body.classList.add('slytherin-mode'); 
            form.classList.add('slytherin-mode'); 
        } else {
            icon.classList.remove('icon-moon');
            icon.classList.add('icon-sun');
            document.body.classList.remove('slytherin-mode'); 
            form.classList.remove('slytherin-mode'); 
        }
    });
});