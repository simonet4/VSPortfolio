// Configuration
const languages = ['fr', 'en', 'pt'];
let langIndex = 0;
let currentLang = 'fr';

// Sélection des éléments
const langBtn = document.getElementById('lang-btn');

// MàJ langue
function updateLanguage() {
    // Langue suivante
    langIndex = (langIndex + 1) % languages.length;
    currentLang = languages[langIndex];
    
    langBtn.textContent = translations[currentLang].btn;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n'); 
        const keys = key.split('.'); 
        let currentlang = translations[currentLang];
        keys.forEach(k => {
            if (currentlang) currentlang = currentlang[k];
        });

        if (currentlang) {
            element.textContent = currentlang;
        }
    });

    words = translations[currentLang].typing;
    iWord = 0;
    iLetter = 0;
    isDeleting = false;
}
// Changer de langue au clic
if (langBtn) {
    langBtn.addEventListener('click', updateLanguage);
}


// Typing Effect

let words = translations['fr'].typing;

let iWord = 0;
let iLetter = 0;
let writingspeed = 100;
let timebetweenwords = 2000;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function type() {
    if (!typingElement) return;

    const currentWord = words[iWord % words.length];

    if (isDeleting) {
        // Effacer
        typingElement.textContent = currentWord.substring(0, iLetter - 1);
        iLetter--;
        if (iLetter == 0) {
            isDeleting = false;
            iWord++;
        }
    } else {
        // Écrire
        typingElement.textContent = currentWord.substring(0, iLetter + 1);
        iLetter++;
        if (iLetter == currentWord.length) {
            isDeleting = true;
            setTimeout(type, timebetweenwords);
            return;
        }
    }

    setTimeout(type, isDeleting ? writingspeed/2 : writingspeed);
}

document.addEventListener('DOMContentLoaded', type);