import renderSandwich from '../src/render-sandwich.js';

const test = QUnit.test;

QUnit.module('Render Sandwich');

test('renders a pie', assert => {
    // arrange
    const applePie = {
        code: 'apple-pie',
        name: 'Apple Pie',
        image: 'assets/apple-pie.jpg',
        description: 'Delicious Apple Pie Filling with Salted Caramel, Vanilla Ice Cream, and Cinnamon Shortbread Cookies.',
        category: 'cinnamon-cookie',
        price: 6.00,
        cost: 2.30,
    };
    const expected = '<li class="cinnamon-cookie" title="Delicious Apple Pie Filling with Salted Caramel, Vanilla Ice Cream, and Cinnamon Shortbread Cookies."><h3>Apple Pie</h3><img src="assets/apple-pie.jpg" alt="Apple Pie Image."><p id="price">$6.00<button type="button" value="apple-pie">Add</button></p></li>';
        
    // act
    const dom = renderSandwich(applePie);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});