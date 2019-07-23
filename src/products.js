import renderSandwich from '../src/render-sandwich.js';
import sandwiches from '../src/data/sandwiches.js';

const regCookieButton = document.getElementById('reg-button');
const chocCookieButton = document.getElementById('choc-button');
const cinCookieButton = document.getElementById('cin-button');
const grahamCookieButton = document.getElementById('graham-button');
const showAllCookieButton = document.getElementById('show-all-button');
const listedSandwiches = document.getElementsByTagName('li');


renderFlavorList();


regCookieButton.addEventListener('click', () => {
    const regClass = document.querySelectorAll('li.regular-cookie');
    hideAllFlavors();
    revealFlavorByClass(regClass);
});

chocCookieButton.addEventListener('click', () => {
    const chocClass = document.querySelectorAll('li.chocolate-cookie');
    hideAllFlavors();
    revealFlavorByClass(chocClass);
});

cinCookieButton.addEventListener('click', () => {
    const cinClass = document.querySelectorAll('li.cinnamon-cookie');
    hideAllFlavors();
    revealFlavorByClass(cinClass);
});

grahamCookieButton.addEventListener('click', () => {
    const grahamClass = document.querySelectorAll('li.graham-cracker-cookie');
    hideAllFlavors();
    revealFlavorByClass(grahamClass);
});

showAllCookieButton.addEventListener('click', () => {
    revealAllFlavors();
});


function revealFlavorByClass(flavorClass) {
    for(let j = 0; j < flavorClass.length; j++) {
        flavorClass[j].classList.remove('hidden');
    }
}

function renderFlavorList() {
    const flavorsList = document.getElementById('flavors');
    for(let i = 0; i < sandwiches.length; i++) {
        const sandwich = sandwiches[i];
        const dom = renderSandwich(sandwich);
        flavorsList.appendChild(dom);
    }
}

function hideAllFlavors() {
    for(let i = 0; i < listedSandwiches.length; i++) {
        listedSandwiches[i].classList.add('hidden');
    }
}

function revealAllFlavors() {
    for(let i = 0; i < listedSandwiches.length; i++) {
        listedSandwiches[i].classList.remove('hidden');
    }
}
