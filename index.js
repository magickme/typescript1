"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
let productName = 'shirt';
const product = products_1.default.find(product => product.name === productName);
let shipping;
let taxPercent;
let total;
let shippingAddress = '23 Elm St., Peoria IL 89290';
console.log(product);
if (product.preOrder === true) {
    console.log("Pre-order now, and we'll send you a message when it's on the way.");
}
if (Number(product.price) >= 25) {
    console.log("We'll provide free shipping for this item!");
}
else {
    shipping = 5;
}
;
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
;
const taxTotal = (Number(product.price) * taxPercent);
total = (Number(product.price) + taxTotal + shipping);
console.log(product.name);
console.log(shippingAddress);
console.log(product.price);
console.log(taxTotal);
console.log(shipping);
console.log(total);
