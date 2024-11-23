let currentIndex = 0; // Index du personnage actuellement affiché
let characters = []; // Tableau pour stocker les personnages

// Fonction pour ajouter un personnage
function addCharacter(name, house, age, image) {
    characters.push({ name, house, age, image });
}

// Exemple d'ajout de personnages (décommenter si nécessaire)
addCharacter("Harry Potter", "Gryffondor", 17, "url_image_harry");
addCharacter("Hermione Granger", "Gryffondor", 17, "url_image_hermione");
addCharacter("Draco Malfoy", "Slytherin", 17, "url_image_draco");

// Fonction pour afficher le personnage actuel
function showCurrentCharacter() {
    const characterCard = document.getElementById('characterCard');
    if (characters.length > 0) {
        const character = characters[currentIndex];
        characterCard.innerHTML = `
            <h3>${character.name || 'Nom inconnu'}</h3>
            <p>Maison: ${character.house || 'Inconnue'}</p>
            <p>Âge: ${character.age || 'Inconnu'}</p>
            <img src="${character.image || 'url_de_l_image_par_defaut.jpg'}" alt="${character.name || 'Personnage'}" width="100">
        `;
        characterCard.style.display = 'block';
    } else {
        characterCard.style.display = 'none';
    }
}

// Fonction pour remplir le sélecteur de personnages
function populateCharacterSelect() {
    const characterSelect = document.getElementById('characterSelect');
    characterSelect.innerHTML = '';
    characters.forEach(character => {
        const option = document.createElement('option');
        option.value = character.name;
        option.textContent = character.name;
        characterSelect.appendChild(option);
    });
}

// Appeler la fonction pour récupérer les personnages lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    const icon = document.getElementById('icon');

    toggleButton.addEventListener('click', () => {
        if (icon.classList.contains('icon-sun')) {
            icon.classList.remove('icon-sun');
            icon.classList.add('icon-moon');
            document.body.classList.add('slytherin-mode'); // Active le mode Slytherin
        } else {
            icon.classList.remove('icon-moon');
            icon.classList.add('icon-sun');
            document.body.classList.remove('slytherin-mode'); // Désactive le mode Slytherin
        }
    });
});