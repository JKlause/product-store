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
    addProduct(product) {
        const products = store.getProducts();
        products.push(product);
        store.save('products', products);
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
    placeOrder(code, quantity) {
        const salesArray = store.getSales();
        const product = findProduct(salesArray, code);
        if(product) {
            product.quantity = +product.quantity + +quantity;
        } else {
            const newProduct = {
                code: code,
                quantity: quantity,
            };
            salesArray.push(newProduct);
        }
        store.save('sales', salesArray);
    },
    removeFromCart(code) {
        let shoppingCart = store.getShoppingCart();
        const indexOfProduct = shoppingCart.findIndex(i => i.code === code);
        shoppingCart.splice(indexOfProduct, 1);
        store.save('shopping-cart', shoppingCart);
        shoppingCart = store.getShoppingCart();
        return shoppingCart;
    },
    removeProduct(code) {
        let products = store.getProducts();
        const indexOfProduct = products.findIndex(i => i.code === code);
        products.splice(indexOfProduct, 1);
        store.save('products', products);
        products = store.getProducts();
        return products;
    },
    getSales() {
        let sales = store.get('sales');

        if(!sales) {
            return [];
        }
        return sales;
    },
    trackSales(code, quantity) {
        const salesArray = store.getSales();
        const product = findProduct(salesArray, code);
        if(product) {
            product.quantity = +product.quantity + +quantity;
        } else {
            const newProduct = {
                code: code,
                quantity: quantity,
            };
            salesArray.push(newProduct);
        } 
        store.save('sales', salesArray);
    },
    orderAndTrackSaleOfProduct(code, quantity) {
        const shoppingCart = store.getShoppingCart();
        const salesArray = store.getSales();
        const productShoppingCart = findProduct(shoppingCart, code);
        const productSalesArray = findProduct(salesArray, code);
        if(productShoppingCart) {
            productShoppingCart.quantity = +productShoppingCart.quantity + +quantity;
        } else {
            const newProductShoppingCart = {
                code: code,
                quantity: quantity,
            };
            shoppingCart.push(newProductShoppingCart);
        } store.save('shopping-cart', shoppingCart);

        if(productSalesArray) {
            productSalesArray.quantity = +productSalesArray.quantity + +quantity;
        } else {
            const newProductSalesArray = {
                code: code,
                quantity: quantity,
            };
            salesArray.push(newProductSalesArray);
        }
        store.save('sales', salesArray);
    },
};

export default store;

//write test for orderAndTrackSales
//look for orderProduct()instances and see if it is always passed a quantity
//remove order product and place order, update tests