"use strict";
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
//# sourceMappingURL=index.js.map