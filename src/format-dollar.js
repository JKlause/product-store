
export function toUSD(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}