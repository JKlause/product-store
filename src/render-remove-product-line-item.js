import store from '../src/data/store.js';

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
    priceCell.textContent = sandwich.price.toFixed(2);
    tr.appendChild(priceCell);

    const costCell = document.createElement('td');
    costCell.textContent = sandwich.cost.toFixed(2);
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

// render products in table with remove button
// wire button to remove product from local storage
// wire button to remove parent element (tr)

//test rendering line item with remove into tbody