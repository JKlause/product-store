import sandwiches from './data/sandwiches.js';
import { calcOrderTotal } from './register.js';
import store from './data/store.js';
import renderLineItem, { renderNoLineItem } from './render-line-items.js';
import promoCodes from './data/promo.js';
import { toUSD } from './format-dollar.js';

const orderTotalCell = document.getElementById('order-total-cell');
const shoppingCartList = document.getElementById('shopping-cart-body');
const promoCodeButton = document.getElementById('promo-code-button');
const clearCartButton = document.getElementById('clear-shopping-cart-button');
const customerPromoCode = document.getElementById('promo-code-input-box');
const discountRow = document.getElementById('discount-row');
const discountCell = document.getElementById('discount-cell');
let shoppingCart = store.getShoppingCart();

renderShoppingCartItems();
renderOrderTotal();

promoCodeButton.addEventListener('click', () => {
    validateAndApplyPromoDiscount();
});

clearCartButton.addEventListener('click', () => {
    const confirmClearCart = confirm('Are you sure you want to clear your shopping cart?');
    if(confirmClearCart) {
        for(let i = 0; i < shoppingCart.length; i++) {
            store.remove(shoppingCart[i].code);
            shoppingCart = [];
        } 
        updateShoppingCart();
    }
});

function renderShoppingCartItems() {
    if(shoppingCart.length === 0) {
        const noItemsDom = renderNoLineItem();
        shoppingCartList.appendChild(noItemsDom);
    }
    for(let i = 0; i < shoppingCart.length; i++) {
        const customerOrderItem = shoppingCart[i];
        const sandwich = store.getProduct(customerOrderItem.code);
        const dom = renderLineItem(customerOrderItem, sandwich);
        shoppingCartList.appendChild(dom);
    }
}

function renderOrderTotal(discount) {
    orderTotalCell.textContent = toUSD(calcOrderTotal(shoppingCart, sandwiches, discount));
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

function updateShoppingCart() {
    while(shoppingCartList.firstChild) {
        shoppingCartList.removeChild(shoppingCartList.firstChild);
    } 
    renderShoppingCartItems();
}