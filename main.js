let characters = []; 
let currentIndex = 0; 

function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${character.name}</h3>
        <p>Maison: ${character.house || 'Inconnue'}</p>
        <p>Âge: ${character.age || 'Inconnu'}</p>
        <img src="${character.image || 'url_de_l_image_par_defaut.jpg'}" alt="${character.name}" width="100">
    `;
    return card;
}

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
        characterCard.style.display = 'block';
    } else {
        characterCard.style.display = 'none';
    }
}

function showCharacters() {
    const characterGrid = document.getElementById('characterGrid');
    characterGrid.innerHTML = '';
    characters.forEach(character => {
        const card = createCharacterCard(character);
        characterGrid.appendChild(card);
    });
}

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

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    const icon = document.getElementById('icon');
    toggleButton.addEventListener('click', () => {
        if (icon.classList.contains('icon-sun')) {
            icon.classList.remove('icon-sun');
            icon.classList.add('icon-moon');
            document.body.classList.add('dark-mode');
        } else {
            icon.classList.remove('icon-moon');
            icon.classList.add('icon-sun');
            document.body.classList.remove('dark-mode');
        }
    });
});