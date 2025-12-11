const words = [
    "Développeur C++ & Java", 
    "Apprenti Oracle & Data", 
    "Praticien Agile / Scrum", 
    "Passionné de Robotique"
];

let isword = 0; // index mot courant
let isLetter = 0; // index lettre courante
let isDeleting = false; // état d'effacement
const typingElement = document.getElementById("typing-text");

function type() {
    const currentWord = words[isword % words.length]; // boucle sur la liste "words"
    // efface
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, isLetter - 1);
        isLetter--;
        // si mot effacé, mot suivant
        if (isLetter == 0) {
            isDeleting = false;
            isword++;
        }
    
    } 
    // écrit
    else {
        typingElement.textContent = currentWord.substring(0, isLetter + 1);
        isLetter++;
        
        // si mot écrit, efface
        if (isLetter == currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000); // pause 2000ms
            return; 
        }
    }

    // effacement rapide
    setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener('DOMContentLoaded', type);