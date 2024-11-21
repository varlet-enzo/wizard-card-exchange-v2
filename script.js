let characters = []; // Tableau pour stocker les personnages
let currentIndex = 0; // Index du personnage actuellement affiché

// URL d'image par défaut
const defaultImageUrl = 'https://via.placeholder.com/100'; // Une image par défaut valide

// Fonction pour vérifier si une URL d'image est valide
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

// Fonction pour créer une carte de personnage
async function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'card';

    const imageUrl = character.image || defaultImageUrl; // Utilisez l'image par défaut si aucune image n'est fournie

    // Vérifiez si l'image est valide
    const validImage = await isImage(imageUrl) ? imageUrl : defaultImageUrl; // Utiliser l'image par défaut si l'URL est invalide

    card.innerHTML = `
        <h3>${character.name}</h3>
        <p>Maison: ${character.house || 'Inconnue'}</p>
        <p>Âge: ${character.age || 'Inconnu'}</p>
        <img src="${validImage}" alt="${character.name}" width="100">
    `;
    return card; // Retourner l'élément de carte
}

// Fonction pour afficher le personnage actuel
async function showCurrentCharacter() {
    const characterCard = document.getElementById('characterCard');
    if (characters.length > 0) {
        const character = characters[currentIndex];

        const imageUrl = character.image || defaultImageUrl; // Utilisez l'image par défaut si aucune image n'est fournie
        
        // Vérifiez si l'image est valide
        const validImage = await isImage(imageUrl) ? imageUrl : defaultImageUrl; // Utiliser l'image par défaut si l'URL est invalide

        characterCard.innerHTML = `
            <h3>${character.name}</h3>
            <p>Maison: ${character.house || 'Inconnue'}</p>
            <p>Âge: ${character.age || 'Inconnu'}</p>
            <img src="${validImage}" alt="${character.name}" width="100">
        `;
        characterCard.style.display = 'block'; // Afficher la carte
    } else {
        characterCard.style.display = 'none'; // Cacher la carte si pas de personnages
    }
}

// Fonction pour afficher tous les personnages dans la grille
async function showCharacters() {
    const characterGrid = document.getElementById('characterGrid');
    characterGrid.innerHTML = ''; // Vider le conteneur avant d'ajouter les cartes

    // Utiliser Promise.all pour attendre que toutes les images soient vérifiées
    const characterCards = await Promise.all(characters.map(createCharacterCard));
    characterCards.forEach(card => character)
}