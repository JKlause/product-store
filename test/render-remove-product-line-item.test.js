import { renderRemoveProductLineItem } from '../src/render-remove-product-line-item.js';
import { findProduct } from '../src/register.js';
import sandwiches from '../src/data/sandwiches.js';


const test = QUnit.test;

QUnit.module('Render a remove Line Item');

test('render a remove line item for product-input page', assert => {
    const sandwich = {
        code: 'apple-pie',
        name: 'Apple Pie',
        image: 'assets/apple-pie.jpg',
        description: 'Delicious Apple Pie Filling with Salted Caramel, Vanilla Ice Cream, and Cinnamon Shortbread Cookies.',
        category: 'cinnamon-cookie',
        price: 6.00,
        cost: 2.30,
    };
    const productToBeRemoved = findProduct(sandwiches, sandwich.code);
    const expected = '<tr><td class="left-align">Apple Pie</td><td class="left-align">apple-pie</td><td>6.00</td><td>2.30</td><td><button id="remove-product-button">Remove Product</button></td></tr>';

    const dom = renderRemoveProductLineItem(productToBeRemoved);
    const html = dom.outerHTML;
    assert.equal(html, expected);
});