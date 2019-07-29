export function findProduct(products, code) {
    for(let i = 0; i < products.length; i++) {
        const sandwich = products[i];

        if(sandwich.code === code) {
            return sandwich;
        } 
    }
    return null;
}

export function getLineTotal(quantity, price) {
    return (quantity * price);
}

export function getRevenueLineItemTotal(quantity, price) {
    return (quantity * price);
}

export function getProfitLineItemTotal(quantity, price, cost) {
    return ((quantity * price) - (quantity * cost));
}

export function calcOrderTotal(order, products, discount) {
    let orderTotal = 0;

    for(let i = 0; i < order.length; i++) {
        const sandwichPrice = findProduct(products, order[i].code).price;
        const quantity = order[i].quantity;
        const lineTotal = getLineTotal(quantity, sandwichPrice);
        orderTotal += +lineTotal;
    }
    if(discount) {
        orderTotal = orderTotal - (orderTotal * discount);
    }
    return orderTotal;
}



