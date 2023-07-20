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
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
        this._calculateTax();
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error("Invalid amount");
        this._balance += value;
    }
    _calculateTax() {
        return 0;
    }
}
let account = new Account(1, "mostafa", 0);
account.deposite(14500000);
console.log(account instanceof Account);
console.log(account.balance);
account.balance = 2;
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Mostafa";
seats.A2 = "Golnaz";
seats["A3"] = "Kaveh";
class Ride {
    static get activeRides() {
        return Ride._activeRides;
    }
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
ride2.start();
ride2.start();
ride2.start();
ride2.stop();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walk() {
        console.log("walk");
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking a test");
    }
}
let student = new Student(1, "Mostafa", "Dadfar");
student.walk();
class Teacher extends Person {
    get fullName() {
        return `Professor: ${super.fullName}`;
    }
}
let teacher = new Teacher("Mostafa", "Dadfar");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map