import store from '../src/data/store.js';
import sandwiches from '../src/data/sandwiches.js';

store.storage = window.sessionStorage;

const test = QUnit.test;

QUnit.module('Data Store');

QUnit.testStart(() => {
    store.storage.clear();
});


test('get and save', assert => {
    // arrange
    const key = 'dog';
    const dog = { name: 'max' };
    
    // act
    store.save(key, dog);
    const returned = store.get(key, dog);
    
    // assert
    assert.deepEqual(dog, returned);
});

test('Get Products with Bootstrapped default', assert => {
    // arrange
    const products = store.getProducts();
    // act

    // assert
    assert.deepEqual(products, sandwiches);
});

test('Get shopping cart', assert => {
    // arrange
    const expected = [];
    // act
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('Order Product to Empty Cart', assert => {
    // arrange
    const expected = [{ 
        code: 'key-lime-pie',
        quantity: 1 
    }];
    // act
    store.orderProduct('key-lime-pie');
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('Order Product to not Empty Cart', assert => {
    // arrange
    const expected = [{ 
        code: 'key-lime-pie',
        quantity: 2
    }];
    // act
    store.orderProduct('key-lime-pie');
    store.orderProduct('key-lime-pie');
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('Order Product to not Empty Cart', assert => {
    // arrange
    const expected = [{ 
        code: 'key-lime-pie',
        quantity: 7
    }];
    // act
    store.orderProduct('key-lime-pie');
    store.orderProduct('key-lime-pie', 6);
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('remove product', assert => {
    // arrange
    const expected = [{ 
        code: 'key-lime-pie',
        quantity: 7
    }];
    // act
    store.orderProduct('apple-pie');
    store.orderProduct('key-lime-pie', 7);
    store.remove('apple-pie');
    const shoppingCart = store.getShoppingCart();
    
    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('add product to local storage products', assert => {
    // arrange
    const product = {
        code: 'red-eye',
        name: 'Red Eye',
        image: 'assets/red-eye.jpg',
        description: 'Creamy Espresso Mousse, Coffee Ice Cream, and Chocolate Shortbread Cookies.',
        category: 'chocolate-cookie',
        price: 6.50,
        cost: 2.50,
    };
    // act
    store.addProduct(product);
    const products = store.getProducts();

    // assert
    assert.deepEqual(products[products.length - 1], product);
});