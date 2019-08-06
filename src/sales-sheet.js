import renderSalesSheetLineItem from './render-sales-sheet-line-item.js';
import store from './data/store.js';
import { toUSD } from './format-dollar.js';
import { getRevenueLineItemTotal, getProfitLineItemTotal } from './register.js';

const salesSheetTableBody = document.getElementById('sales-sheet-body');
const totalProductsSoldCell = document.getElementById('total-products-sold-cell');
const totalCostCell = document.getElementById('total-cost-cell');
const totalRevenueCell = document.getElementById('total-revenue-cell');
const totalProfitCell = document.getElementById('total-profit-cell');

let totalProductsSold = 0;
let totalCost = 0;
let totalRevenue = 0;
let totalProfit = 0;


clearOldSalesSheet();

generateNewSalesSheet();

function clearOldSalesSheet() {
    while(salesSheetTableBody.firstChild) {
        salesSheetTableBody.removeChild(salesSheetTableBody.firstChild);
    }
}

function generateNewSalesSheet() {
    const salesSheetArray = store.getSales();
    for(let i = 0; i < salesSheetArray.length; i++) {
        const product = store.getProduct(salesSheetArray[i].code);
        const quantity = salesSheetArray[i].quantity;
        const dom = renderSalesSheetLineItem(quantity, product);
        salesSheetTableBody.appendChild(dom);

        totalProductsSold = totalProductsSold + +salesSheetArray[i].quantity;
        totalCost = totalCost + product.cost;
        totalRevenue = totalRevenue + getRevenueLineItemTotal(quantity, product.price, product.cost);
        totalProfit = totalProfit + getProfitLineItemTotal(quantity, product.price, product.cost);
    }

    totalProductsSoldCell.textContent = totalProductsSold;
    totalCostCell.textContent = toUSD(totalCost);
    totalRevenueCell.textContent = toUSD(totalRevenue);
    totalProfitCell.textContent = toUSD(totalProfit);
}

