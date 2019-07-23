import renderSandwich from '../src/render-sandwich.js';
import sandwiches from '../src/data/sandwiches.js';

const flavorsList = document.getElementById('flavors');

for(let i = 0; i < sandwiches.length; i++) {
    const sandwich = sandwiches[i];
    const dom = renderSandwich(sandwich);
    flavorsList.appendChild(dom);
}