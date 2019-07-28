import sandwiches from '../src/data/sandwiches.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-items.js';
import { renderNoLineItem, renderLineItemWithRemove } from '../src/render-line-items.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    // arrange
    const customerOrderItem = {
        code: 'key-lime-pie',
        quantity: 3
    };
    const sandwich = findProduct(sandwiches, customerOrderItem.code);
    const expected = '<tr><td class="left-align">Key Lime Pie</td><td>3</td><td>$7.50</td><td>$22.50</td></tr>';
    // act
    const dom = renderLineItem(customerOrderItem, sandwich);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('render no line item', assert => {
    const expected = '<tr><td class="center-align" colspan="5">There Aren\'t Any Products In Your Shopping Cart</td></tr>';

    const dom = renderNoLineItem();
    const html = dom.outerHTML;
    assert.equal(html, expected);
});

test('renders a line item with remove button', assert => {
    const customerOrderItem = {
        code: 'key-lime-pie',
        quantity: 3
    };
    const sandwich = findProduct(sandwiches, customerOrderItem.code);
    const expected = '<tr><td class="left-align">Key Lime Pie</td><td>3</td><td>$7.50</td><td>$22.50</td><td><button id="remove">Remove Item</button></td></tr>';

    const dom = renderLineItemWithRemove(customerOrderItem, sandwich);
    const html = dom.outerHTML;
    assert.equal(html, expected);
});
