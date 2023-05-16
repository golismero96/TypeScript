"use strict";
var _a;
let user = [27, "mostafa"];
let price = 14500000;
let mySize = "l";
mySize[0] === "m" && console.log("mySize is medium");
console.log(`mySize: ${mySize}`);
function calculateTax(income, taxYear) {
    if (taxYear < 50000) {
        return income * 1.2;
    }
    return income * 1.4;
}
calculateTax(100000, 2023);
let employee = {
    id: 1,
    name: "mostafa",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(90);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
let metric = "cm";
function greet(name) {
    name ? console.log(name.toUpperCase()) : console.log("Invalid argumanet");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
function getItems(items) {
    if (items !== null && items !== undefined)
        console.log(`1- items: ${items[2]}`);
    console.log(`2- items: ${items === null || items === void 0 ? void 0 : items[2]}`);
}
getItems();
//# sourceMappingURL=index.js.map