import renderSalesSheetLineItem from './render-sales-sheet-line-item.js';
import store from './data/store.js';

const salesSheetTableBody = document.getElementById('sales-sheet-body');


while(salesSheetTableBody.firstChild) {
    salesSheetTableBody.removeChild(salesSheetTableBody.firstChild);
}

const salesSheetArray = store.getSales();
for(let i = 0; i < salesSheetArray.length; i++) {
    const product = store.getProduct(salesSheetArray[i].code);
    const quantity = salesSheetArray[i].quantity;
    const dom = renderSalesSheetLineItem(quantity, product);
    salesSheetTableBody.appendChild(dom);
}
//i need to get 