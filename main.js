let characters = []; // Tableau pour stocker les personnages
let currentIndex = 0; // Index du personnage actuellement affiché

// Fonction pour créer une carte de personnage
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${character.name}</h3>
        <p>Maison: ${character.house || 'Inconnue'}</p>
        <p>Âge: ${character.age || 'Inconnu'}</p>
        <img src="${character.image || 'url_de_l_image_par_defaut.jpg'}" alt="${character.name}" width="100">
    `;
    return card; // Retourner l'élément de carte
}

// Fonction pour afficher le personnage actuel
function showCurrentCharacter() {
    const characterCard = document.getElementById('characterCard');
    if (characters.length > 0) {
        const character = characters[currentIndex];
        characterCard.innerHTML = `
            <h3>${character.name}</h3>
            <p>Maison: ${character.house || 'Inconnue'}</p>
            <p>Âge: ${character.age || 'Inconnu'}</p>
            <img src="${character.image || 'url_de_l_image_par_defaut.jpg'}" alt="${character.name}" width="100">
        `;
        characterCard.style.display = 'block'; // Afficher la carte
    } else {
        characterCard.style.display = 'none'; // Cacher la carte si pas de personnages
    }
}

// Fonction pour afficher tous les personnages dans la grille
function showCharacters() {
    const characterGrid = document.getElementById('characterGrid');
    characterGrid.innerHTML = ''; // Vider le conteneur avant d'ajouter les cartes

    characters.forEach(character => {
        const card = createCharacterCard(character);
        characterGrid.appendChild(card); // Ajouter la carte au conteneur
    });
}

// Fonction pour remplir le menu déroulant avec les personnages
function populateCharacterSelect() {
    const characterSelect = document.getElementById('characterSelect'); // Assurez-vous que cet ID existe dans votre HTML
    characterSelect.innerHTML = ''; // Vider le menu déroulant

    characters.forEach(character => { // Correction ici
        const option = document.createElement('option');
        option.value = character.name; // Utiliser le nom du personnage comme valeur
        option.textContent = character.name; // Afficher le nom du personnage
        characterSelect.appendChild(option); // Ajouter l'option au menu déroulant
    });
}

    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    // Vérifier si le mode sombre est déjà activé
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Enregistrer l'état dans localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });