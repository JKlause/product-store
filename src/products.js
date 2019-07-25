import renderSandwich from '../src/render-sandwich.js';
import store from './data/store.js';

const regCookieButton = document.getElementById('reg-button');
const chocCookieButton = document.getElementById('choc-button');
const cinCookieButton = document.getElementById('cin-button');
const grahamCookieButton = document.getElementById('graham-button');
const showAllCookieButton = document.getElementById('show-all-button');
const listedSandwiches = document.getElementsByTagName('li');


renderFlavorList();


regCookieButton.addEventListener('click', () => {
    revealFlavorByClass('regular-cookie');
});

chocCookieButton.addEventListener('click', () => {
    revealFlavorByClass('chocolate-cookie');
});

cinCookieButton.addEventListener('click', () => {
    revealFlavorByClass('cinnamon-cookie');
});

grahamCookieButton.addEventListener('click', () => {
    revealFlavorByClass('graham-cracker-cookie');
});

showAllCookieButton.addEventListener('click', () => {
    revealAllFlavors();
});


function renderFlavorList() {
    const flavorsList = document.getElementById('flavors');
    const products = store.getProducts();
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        const dom = renderSandwich(product);
        flavorsList.appendChild(dom);
    }
}

function revealFlavorByClass(flavorClass) {
    hideAllFlavors();

    const singleFlavorList = document.querySelectorAll('li.' + flavorClass);
    for(let j = 0; j < singleFlavorList.length; j++) {
        singleFlavorList[j].classList.remove('hidden');
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

//add quantity amount input
//add alert, added to cart