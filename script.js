let characters = []; 
let currentIndex = 0; 

const defaultImageUrl = 'https://via.placeholder.com/100'; 

function isImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            console.log(`Image valide: ${url}`);
            resolve(true);
        };
        img.onerror = () => {
            console.log(`Image invalide: ${url}`);
            resolve(false);
        };
    });
}

async function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'card';

    const imageUrl = character.image || defaultImageUrl; 

    const validImage = await isImage(imageUrl) ? imageUrl : defaultImageUrl; 

    card.innerHTML = `
        <h3>${character.name}</h3>
        <p>Maison: ${character.house || 'Inconnue'}</p>
        <p>Âge: ${character.age || 'Inconnu'}</p>
        <img src="${validImage}" alt="${character.name}" width="100">
    `;
    return card; 
}


async function showCurrentCharacter() {
    const characterCard = document.getElementById('characterCard');
    if (characters.length > 0) {
        const character = characters[currentIndex];

        const imageUrl = character.image || defaultImageUrl; 
        
        const validImage = await isImage(imageUrl) ? imageUrl : defaultImageUrl; 

        characterCard.innerHTML = `
            <h3>${character.name}</h3>
            <p>Maison: ${character.house || 'Inconnue'}</p>
            <p>Âge: ${character.age || 'Inconnu'}</p>
            <img src="${validImage}" alt="${character.name}" width="100">
        `;
        characterCard.style.display = 'block'; 
    } else {
        characterCard.style.display = 'none'; 
    }
}

async function showCharacters() {
    const characterGrid = document.getElementById('characterGrid');
    characterGrid.innerHTML = ''; 

    const characterCards = await Promise.all(characters.map(createCharacterCard));
    characterCards.forEach(card => character)
}