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

export function calcOrderTotal(order, sandwiches, discount) {
    let orderTotal = 0;

    for(let i = 0; i < order.length; i++) {
        const sandwichPrice = findProduct(sandwiches, order[i].code).price;
        const quantity = order[i].quantity;
        const lineTotal = getLineTotal(quantity, sandwichPrice);
        orderTotal += +lineTotal;
    }
    if(discount) {
        orderTotal = orderTotal - (orderTotal * discount);
    }
    return orderTotal;
}



