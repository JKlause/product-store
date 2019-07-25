import { getLineTotal } from './register.js';
import { toUSD } from './format-dollar.js';

function renderLineItem(customerOrderItem, sandwich) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'left-align';
    nameCell.textContent = sandwich.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = customerOrderItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(sandwich.price);
    tr.appendChild(priceCell);

    const lineTotalCell = document.createElement('td');
    lineTotalCell.textContent = toUSD(getLineTotal(customerOrderItem.quantity, sandwich.price));
    tr.appendChild(lineTotalCell);

    return tr;
}


export default renderLineItem;

export function renderNoLineItem() {
    const tr = document.createElement('tr');

    const noItemCell = document.createElement('td');
    noItemCell.className = 'center-align';
    noItemCell.colSpan = '4';
    noItemCell.textContent = 'There Aren\'t Any Products In Your Shopping Cart';
    tr.appendChild(noItemCell);
    
    return tr;
}