import store from './data/store.js';

const form = document.getElementById('product-input-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const product = {
        code: formData.get('code'),
        name: formData.get('name'),
        image: `assets/${formData.get('code')}.jpg`,
        description: formData.get('description'),
        category: formData.get('category'),
        price: formData.get('price'),
        cost: formData.get('cost'),
    };
    store.addProduct(product);
    alert('New Ice Cream Sandwich Product Added');
    form.reset();
});

//render table of products
    // name, code, price, remove button
//construct table with header
    //get products from local storage
    //render products in table with remove button
        //wire button to remove product from local storage
        //wire button to remove parent element (tr)