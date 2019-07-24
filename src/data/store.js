import sandwiches from './sandwiches.js';

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
    getShoppingCart() {
        let shoppingCart = store.get('shopping-cart');
        if(!shoppingCart) {
            return [];
        }
        return shoppingCart;
    },
    orderProduct(code) {
        //
    }
};




export default store;