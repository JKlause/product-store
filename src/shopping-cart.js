import sandwiches from './data/sandwiches.js';
import { findProduct, calcOrderTotal } from './register.js';
import renderLineItem from './render-line-items.js';
import order from './data/order.js';
import promoCodes from './data/promo.js';

const orderTotalCell = document.getElementById('order-total-cell');
const shoppingCartList = document.getElementById('shopping-cart-body');
const promoCodeButton = document.getElementById('promo-code-button');
const customerPromoCode = document.getElementById('promo-code-input-box');
const discountRow = document.getElementById('discount-row');
const discountCell = document.getElementById('discount-cell');

renderShoppingCartItems();
renderOrderTotal();

promoCodeButton.addEventListener('click', () => {
    validateAndApplyPromoDiscount();
});


function renderShoppingCartItems() {
    for(let i = 0; i < order.length; i++) {
        const customerOrderItem = order[i];
        const sandwich = findProduct(sandwiches, customerOrderItem.code);
        const dom = renderLineItem(customerOrderItem, sandwich);
        shoppingCartList.appendChild(dom);
    }
}

function renderOrderTotal(discount) {
    orderTotalCell.textContent = calcOrderTotal(order, sandwiches, discount).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function validateAndApplyPromoDiscount() {
    const promoCode = customerPromoCode.value;
    let discountApplied;
    for(let i = 0; i < promoCodes.length; i++) {
        if(promoCode === promoCodes[i].code) {
            discountCell.textContent = (+promoCodes[i].discount * 100) + '%';
            discountRow.classList.remove('hidden');
            discountApplied = promoCodes[i].discount;
            renderOrderTotal(discountApplied);
        }
    }
    if(!discountApplied) {
        alert('Invalid Promo Code');
    }
}