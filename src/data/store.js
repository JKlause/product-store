import sandwiches from './sandwiches.js';
import { findProduct } from '../register.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get('products');

        if(!products) {
            products = sandwiches;
            store.save('products', sandwiches);
        }
        return products;
    },
    getProduct(code) {
        const products = store.getProducts();
        const product = findProduct(products, code);
        return product;
    },
    getShoppingCart() {
        let shoppingCart = store.get('shopping-cart');
        if(!shoppingCart) {
            return [];
        }
        return shoppingCart;
    },
    orderProduct(code, quantity) {
        const shoppingCart = store.getShoppingCart();
        const lineItem = findProduct(shoppingCart, code);
        if(quantity) {
            if(lineItem) {
                lineItem.quantity = +lineItem.quantity + +quantity;
            } else {
                const lineItem = {
                    code: code,
                    quantity: quantity,
                };
                shoppingCart.push(lineItem);
            } 
        }
        else {
            if(lineItem) {
                lineItem.quantity++;
            } else {
                const lineItem = {
                    code: code,
                    quantity: 1,
                };
                shoppingCart.push(lineItem);
            } 
        }
        store.save('shopping-cart', shoppingCart);
    },
    remove(code) {
        let shoppingCart = store.getShoppingCart();
        const indexOfProduct = shoppingCart.findIndex(i => i.code === code);
        shoppingCart.splice(indexOfProduct, 1);
        store.save('shopping-cart', shoppingCart);
        // window.location.reload();  //this line making my page strobe
        shoppingCart = store.getShoppingCart();
        return shoppingCart;
    },
};

export default store;