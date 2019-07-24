import sandwiches from '../src/data/sandwiches.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-items.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    // arrange
    const lineItem = {
        code: 'key-lime-pie',
        quantity: 3
    };
    const sandwich = findProduct(sandwiches, lineItem.code);
    const expected = '<tr><td class="left-align">Key Lime Pie</td><td>3</td><td>$7.50</td><td>$22.50</td></tr>';
    // act
    const dom = renderLineItem(lineItem, sandwich);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});