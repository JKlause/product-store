
export function toUSD(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

//idea from mnd
export function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}