import products from './products';

let productName: string = 'shirt';
const product = products.find(product => product.name === productName);
let shipping: number;
let taxPercent: number;
let total: number;
let shippingAddress: string = '23 Elm St., Peoria IL 89290';

console.log(product);
if (product.preOrder === true) {
    console.log("Pre-order now, and we'll send you a message when it's on the way.");
}
if (Number(product.price) >= 25) {
    console.log("We'll provide free shipping for this item!");
} else {
    shipping = 5;
};
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
} else {
    taxPercent = 0.05;
};

const taxTotal = (Number(product.price) * taxPercent);

total = (Number(product.price) + taxTotal + shipping);

console.log(product.name);
console.log(shippingAddress);
console.log(product.price);
console.log(taxTotal);
console.log(shipping);
console.log(total);