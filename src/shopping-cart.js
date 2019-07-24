import sandwiches from './data/sandwiches.js';
import { findProduct, calcOrderTotal } from './register.js';
import renderLineItem from './render-line-items.js';
import cart from './data/order.js';

const orderTotalCell = document.getElementById('order-total-cell');
const shoppingCartList = document.getElementById('shopping-cart-body');
const promoCodeButton = document.getElementById('promo-code-button');
const customerPromoCode = document.getElementById('promo-code-input-box');

promoCodeButton.addEventListener('click', () => {
// get promo code
});

renderShoppingCart();
renderOrderTotal();


function renderShoppingCart() {
    for(let i = 0; i < cart.length; i++) {
        const customerOrderItem = cart[i];
        const sandwich = findProduct(sandwiches, customerOrderItem.code);
        const dom = renderLineItem(customerOrderItem, sandwich);
        shoppingCartList.appendChild(dom);
    }
}

function renderOrderTotal() {
    orderTotalCell.textContent = calcOrderTotal(cart, sandwiches);
}