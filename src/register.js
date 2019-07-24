import { toUSD } from './format-dollar.js';

export function findProduct(sandwiches, code) {
    //loop through array
    for(let i = 0; i < sandwiches.length; i++) {
        const sandwich = sandwiches[i];

        if(sandwich.code === code) {
            return sandwich;
        } 
    }
    return null;
}

export function getLineTotal(quantity, price) {
    return (quantity * price);
}

export function calcOrderTotal(cart, sandwiches) {

    let orderTotal = 0;

    for(let i = 0; i < cart.length; i++) {
        const sandwichPrice = (findProduct(sandwiches, cart[i].code)).price;
        const quantity = cart[i].quantity;
        const lineTotal = getLineTotal(quantity, sandwichPrice);
        orderTotal += +lineTotal;
    }
    orderTotal = toUSD(orderTotal);
    return orderTotal;
}



