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
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function render(document) {
    if (typeof document === "string") {
        return document.toUpperCase();
    }
    return document;
}
function processEvents() {
    while (true) {
        console.log("process");
    }
}
console.log("hey");
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
        this._calculateTax();
    }
    getBalance() {
        return this._balance;
    }
    _calculateTax() {
        return 0;
    }
}
let account = new Account(1, "mostafa", 0);
account.deposite(14500000);
console.log(account instanceof Account);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map