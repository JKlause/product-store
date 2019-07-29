import store from '../src/data/store.js';
import { financial } from './format-dollar.js';

export function renderRemoveProductLineItem(sandwich) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'left-align';
    nameCell.textContent = sandwich.name;
    tr.appendChild(nameCell);

    const codeCell = document.createElement('td');
    codeCell.className = 'left-align';
    codeCell.textContent = sandwich.code;
    tr.appendChild(codeCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = financial(sandwich.price);
    tr.appendChild(priceCell);

    const costCell = document.createElement('td');
    costCell.textContent = financial(sandwich.cost);
    tr.appendChild(costCell);
    
    const removeProductButtonCell = document.createElement('td');
    const removeProductButton = document.createElement('button');
    removeProductButton.id = 'remove-product-button';
    removeProductButton.textContent = 'Remove Product';
    removeProductButton.addEventListener('click', () => {
        const confirmRemoveProduct = confirm('Are you sure you want to remove this product from your "Products For Sale" List?');
        if(confirmRemoveProduct) {
            store.removeProduct(sandwich.code);
        }
    });
    removeProductButtonCell.appendChild(removeProductButton);
    tr.appendChild(removeProductButtonCell);
    return tr;
}