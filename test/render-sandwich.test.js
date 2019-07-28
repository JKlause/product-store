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
    const expected = '<li class="cinnamon-cookie" title="Delicious Apple Pie Filling with Salted Caramel, Vanilla Ice Cream, and Cinnamon Shortbread Cookies."><h3>Apple Pie</h3><img src="assets/apple-pie.jpg" alt="Apple Pie Image."><p id="price"><select id="quantity" required="" name="order-quantity"><option disabled="" hidden="">Choose Quantity</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option></select>$6.00 each<button type="button" value="apple-pie">Add</button></p></li>';
        
    // act
    const dom = renderSandwich(applePie);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});