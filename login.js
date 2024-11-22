function validateForm() {
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const mdp = document.getElementById('mdp');
    const mdpConfirm = document.getElementById('mdpConfirm');
    const captchaInput = document.getElementById('captcha-form'); // Assurez-vous que l'ID correspond à votre champ CAPTCHA
    const messageDiv = document.getElementById('message');

    let passCheck = new RegExp(

        "^(?=,[a-z])(?=.[A-Z])(?=,\\d) (?=.[-+_!@#$%^&*.,?]).+$" 
    );

    let isValid = true;
    messageDiv.innerHTML = ''; // Réinitialiser le message

    // Validation du pseudo
    if (pseudo.value.length < 6) {
        pseudo.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">Le pseudo doit comporter au moins 6 caractères.</p>';
    } else {
        pseudo.classList.remove('invalid');
        pseudo.classList.add('valid');
    }

    // Validation de l'email
    if (!email.validity.valid) {
        email.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">Veuillez entrer un email valide.</p>';
    } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
    }

    // Validation du mot de passe
    if (!passCheck.test(mdp.value)) {
        mdp.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">Le mot de passe doit comporter au moins 8 caractères, dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.</p>';
    } else {
        mdp.classList.remove('invalid');
        mdp.classList.add('valid');
    }

    // Validation de la vérification du mot de passe
    if (mdp.value !== mdpConfirm.value) {
        mdpConfirm.classList.add('invalid');
        isValid = false;
        messageDiv.innerHTML += '<p class="error">La vérification du mot de passe ne correspond pas.</p>';
    } else {
        mdpConfirm.classList.remove('invalid');
        mdpConfirm.classList.add('valid');
    }
    
    // Validation du captcha
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

    // Si tout est valide
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

    document.getElementById('toggleMdpConfirm').addEventListener('click', function() {
        const mdpConfirmInput = document.getElementById('mdpConfirm');
        if (mdpConfirmInput.type === 'password') {
            mdpConfirmInput.type = 'text';
            this.textContent = 'Masquer';
        } else {
            mdpConfirmInput.type = 'password';
            this.textContent = 'Afficher';
        }
    });
});