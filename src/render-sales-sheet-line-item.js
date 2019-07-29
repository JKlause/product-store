import toUSD from './format-dollar.js';
import { getRevenueLineItemTotal, getProfitLineItemTotal } from './register,js';


export default function renderSalesSheetLineItem(customerOrderItem, sandwich) {
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

    const costCell = document.createElement('td');
    costCell.textContent = toUSD(sandwich.cost);
    tr.appendChild(costCell);

    const revenueCell = document.createElement('td');
    revenueCell.textContent = toUSD(getRevenueLineItemTotal(customerOrderItem.quantity, sandwich.price));
    tr.appendChild(revenueCell);

    const profitCell = document.createElement('td');
    profitCell.textContent = toUSD(getProfitLineItemTotal(customerOrderItem.quantity, sandwich.price, sandwich.cost));
    tr.appendChild(revenueCell);

    return tr;
}