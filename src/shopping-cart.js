import sandwiches from './data/sandwiches.js';
import { calcOrderTotal } from './register.js';
import store from './data/store.js';
import { renderNoLineItem, renderLineItemWithRemove } from './render-line-items.js';
import promoCodes from './data/promo.js';
import { toUSD } from './format-dollar.js';

const orderTotalCell = document.getElementById('order-total-cell');
const shoppingCartList = document.getElementById('shopping-cart-body');
const promoCodeButton = document.getElementById('promo-code-button');
const clearCartButton = document.getElementById('clear-shopping-cart-button');
const customerPromoCode = document.getElementById('promo-code-input-box');
const discountRow = document.getElementById('discount-row');
const discountCell = document.getElementById('discount-cell');
const shoppingCart = store.getShoppingCart();

renderShoppingCartItems(shoppingCart);
renderOrderTotal();

promoCodeButton.addEventListener('click', () => {
    validateAndApplyPromoDiscount();
});

clearCartButton.addEventListener('click', () => {
    const confirmClearCart = confirm('Are you sure you want to clear your shopping cart?');
    if(confirmClearCart) {
        for(let i = 0; i < shoppingCart.length; i++) {
            store.remove(shoppingCart[i].code);
            window.location.reload();
        } 
    }
});

export function renderShoppingCartItems(shoppingCart) {
    if(shoppingCart.length === 0) {
        const noItemsDom = renderNoLineItem();
        shoppingCartList.appendChild(noItemsDom);
    }
    for(let i = 0; i < shoppingCart.length; i++) {
        const customerOrderItem = shoppingCart[i];
        const sandwich = store.getProduct(customerOrderItem.code);
        const dom = renderLineItemWithRemove(customerOrderItem, sandwich);
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


//put in shopping cart icon (weekend project)
//build homepage, update css (5 hours)

//my remove function doesn't seem to be working
