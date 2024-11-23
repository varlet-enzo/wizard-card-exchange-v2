class Personnage {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.precision = precision;
    }

    attaquer(adversaire) {
        const chance = Math.random();
        if (chance < this.precision) {
            adversaire.pointsDeVie -= this.attaque;
            return `${this.nom} attaque ${adversaire.nom} et lui inflige ${this.attaque} points de dégâts !`;
        } else {
            return `${this.nom} a raté son attaque contre ${adversaire.nom} !`;
        }
    }
}


const combattant1 = new Personnage("Mangemorts", 100, 20, 0.8);
const combattant2 = new Personnage("Dumbledore", 80, 25, 0.7);


const pv1Element = document.getElementById('pv1');
const pv2Element = document.getElementById('pv2');
const resultElement = document.getElementById('result');


function combat() {
    if (combattant1.pointsDeVie > 0 && combattant2.pointsDeVie > 0) {
        let result = combattant1.attaquer(combattant2);
        resultElement.innerText = result;
        pv2Element.innerText = combattant2.pointsDeVie; 
    }

        if (combattant2.pointsDeVie <= 0) {
            resultElement.innerText += `\n${combattant2.nom} a été vaincu ! ${combattant1.nom} remporte le combat !`;
            clearInterval(combatInterval); 
            return;
        }

        result = combattant2.attaquer(combattant1);
        resultElement.innerText += `\n${result}`;
        pv1Element.innerText = combattant1.pointsDeVie; 

        if (combattant1.pointsDeVie <= 0) {
            result
        }
    }