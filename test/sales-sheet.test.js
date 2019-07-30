import store from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('Sales Sheet');

test('gets sales', assert => {
    // arrange
    const expected = [];
    // act
    const sales = store.getSales();
    
    // assert
    assert.deepEqual(sales, expected);
});

test('place order', assert => {
    //arange
    const order = { code: 'key-lime-pie', quantity: 2 };
    const expected = { code: 'key-lime-pie', quantity: 2 };
    //act
    store.placeOrder(order.code, order.quantity);
    //assert
    assert.deepEqual(order, expected);
});