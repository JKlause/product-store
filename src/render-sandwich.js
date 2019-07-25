export default renderSandwich;
import store from './data/store.js';

function renderSandwich(sandwich) {
    const li = document.createElement('li');
    li.className = sandwich.category;
    li.title = sandwich.description;

    const h3 = document.createElement('h3');
    h3.textContent = sandwich.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = sandwich.image;
    img.alt = sandwich.name + ' Image.';
    li.appendChild(img);

    const p = document.createElement('p');
    p.id = 'price';

    const usd = sandwich.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.type = 'button';
    button.value = sandwich.code;
    button.textContent = 'Add';
    button.addEventListener('click', () => {
        store.orderProduct(sandwich.code);
        alert(`You added a ${sandwich.name} to your cart.`);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;

}