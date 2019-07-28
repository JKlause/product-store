import store from './data/store.js';
import { renderRemoveProductLineItem } from '../src/render-remove-product-line-item.js';

const form = document.getElementById('product-input-form');

renderRemoveProductList();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputNewProductFromForm();
});

function inputNewProductFromForm() {
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
}

function renderRemoveProductList() {
    const removeProductList = document.getElementById('remove-item-list');
    const products = store.getProducts();
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        const dom = renderRemoveProductLineItem(product);
        removeProductList.appendChild(dom);
    }
}