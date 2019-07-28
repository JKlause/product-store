export default renderSandwich;

import store from './data/store.js';

function renderSandwich(sandwich) {
    const li = document.createElement('li');
    li.className = sandwich.category;
    li.title = sandwich.description;

    const h3 = document.createElement('h3');
    h3.textContent = sandwich.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = sandwich.image;
    img.alt = sandwich.name + ' Image.';
    li.appendChild(img);

    const p = document.createElement('p');
    p.id = 'price';

    const select = document.createElement('select');
    select.id = `quantity`;
    select.required = true;
    select.name = 'order-quantity';

    const option = document.createElement('option');
    option.disabled = true;
    option.selected = true;
    option.hidden = true;
    option.textContent = 'Choose Quantity';
    select.appendChild(option);

    const option0 = document.createElement('option');
    option0.value = '0';
    option0.textContent = 0;
    select.appendChild(option0);

    const option1 = document.createElement('option');
    option1.value = '1';
    option1.textContent = 1;
    select.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = '2';
    option2.textContent = 2;
    select.appendChild(option2);

    const option3 = document.createElement('option');
    option3.value = '3';
    option3.textContent = 3;
    select.appendChild(option3);

    const option4 = document.createElement('option');
    option4.value = '4';
    option4.textContent = 4;
    select.appendChild(option4);

    const option5 = document.createElement('option');
    option5.value = '5';
    option5.textContent = 5;
    select.appendChild(option5);

    const option6 = document.createElement('option');
    option6.value = '6';
    option6.textContent = 6;
    select.appendChild(option6);

    const option7 = document.createElement('option');
    option7.value = '7';
    option7.textContent = 7;
    select.appendChild(option7);

    const option8 = document.createElement('option');
    option8.value = '8';
    option8.textContent = 8;
    select.appendChild(option8);

    const option9 = document.createElement('option');
    option9.value = '9';
    option9.textContent = 9;
    select.appendChild(option9);

    const option10 = document.createElement('option');
    option10.value = '10';
    option10.textContent = 10;
    select.appendChild(option10);

    const option11 = document.createElement('option');
    option11.value = '11';
    option11.textContent = 11;
    select.appendChild(option11);

    const option12 = document.createElement('option');
    option12.value = '12';
    option12.textContent = 12;
    select.appendChild(option12);

    const option13 = document.createElement('option');
    option13.value = '13';
    option13.textContent = 13;
    select.appendChild(option13);

    p.appendChild(select);

    const usd = sandwich.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + ' each';
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.type = 'button';
    button.value = sandwich.code;
    button.textContent = 'Add';
    button.addEventListener('click', () => {
        const sandwichOrderedQuantity = select.value;
        if(sandwichOrderedQuantity === 'Choose Quantity') {
            alert('Please select the number of ice cream sandwiches you would like to order from the drop down menu.');
        } else if(sandwichOrderedQuantity === '0') {
            alert('Please choose an amount other than zero!');
        } else {
            store.orderProduct(sandwich.code, sandwichOrderedQuantity);
            alert(`You added ${sandwichOrderedQuantity} of the ${sandwich.name} ice cream sandwich to your cart.`);
        }
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;

}