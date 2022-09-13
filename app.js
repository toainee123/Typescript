"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const b = 30;
const myName = "Bui Viet Toai";
const status = true;
const myob = {};
const numberArr = [1, 3, 5, 6];
const objectArr = [{ id: 1, name: 'Toai' }, { id: 2, name: 'Hung' }];
function sum(numA, numB) {
    return numA + numB;
}
sum(5, 6);
const getProduct = (Product) => {
    const result = Product.map(item => `<div> ${item.name}</div>`);
};
getProduct([{ id: 1, name: 'B' }, { id: 2, name: 'B' }]);
const person = (a) => {
};
person([{ id: 2, name: 'Bui Viet Toai' }]);
//# sourceMappingURL=app.js.map