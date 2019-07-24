import sandwiches from '../src/data/sandwiches.js';
import cart from '../src/data/order.js';
import { findProduct, getLineTotal, calcOrderTotal } from '../src/register.js';

const test = QUnit.test;

QUnit.module('Register');

test('find product by code', assert => {
    //arrange
    const code = 'pecan-pie';
    const expected = {
        code: 'pecan-pie',
        name: 'Pecan Pie',
        image: 'assets/pecan-pie.jpg',
        description: 'Pecan Pie Filling made with Maple Syrup, Vanilla Ice Cream, and Regular Shortbread Cookies.',
        category: 'regular-cookie',
        price: 7.50,
        cost: 3.00,
    };
    //act
    const foundProduct = findProduct(sandwiches, code);
    //assert
    assert.deepEqual(foundProduct, expected);
});

test('get line total', assert => {
    //arrange
    const quantity = 2;
    const price = 2.50;
    const expected = 5.00;
    //act
    const lineTotal = getLineTotal(quantity, price);
    //assert
    assert.equal(lineTotal, expected);
});

test('calculate order total', assert => {
    //arrange
    const expected = '$82.00';
    //act
    const lineTotal = calcOrderTotal(cart, sandwiches);
    //assert
    assert.equal(lineTotal, expected);
});