import store from './data/store.js';
import sandwiches from '../src/data/sandwiches.js';
import { renderRemoveProductLineItem } from '../src/render-remove-product-line-item.js';
import { clearingOutListBeforeReRender } from './shopping-cart.js';

const form = document.getElementById('product-input-form');
const removeProductList = document.getElementById('remove-item-list');

renderRemoveProductList();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputNewProductFromForm();
    updateRemoveProductList();
});

if(store.getProducts() === {}) {
    for(let i = 0; i < sandwiches.length; i++) {
        store.addProduct(sandwiches[i]);
    }
}

function inputNewProductFromForm() {
    const formData = new FormData(form);
    const product = {
        code: formData.get('code'),
        name: formData.get('name'),
        image: formData.get('image'),
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
    const products = store.getProducts();
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        const dom = renderRemoveProductLineItem(product);
        removeProductList.appendChild(dom);
    }
}

function updateRemoveProductList() {
    while(removeProductList.length) {
        removeProductList.removeChild(removeProductList.firstChild);
    }
    renderRemoveProductList();
}
