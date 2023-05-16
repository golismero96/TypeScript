let user: [number, string] = [27, "mostafa"];

let price: number = 14_500_000;

const enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.Large;
mySize[0] === "m" && console.log("mySize is medium");
console.log(`mySize: ${mySize}`);

function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 50_000) {
    return income * 1.2;
  }
  return income * 1.4;
}

calculateTax(100_000, 2023);

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "mostafa",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
kgToLbs(90);

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

type Quantity = 50 | 100;
let quantity: Quantity = 50;
type Metric = "cm" | "inch";
let metric: Metric = "cm";

function greet(name: string | null | undefined) {
  name ? console.log(name.toUpperCase()) : console.log("Invalid argumanet");
}
greet(null);

type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

function getItems(items?: string[] | null) {
  if (items !== null && items !== undefined)
    console.log(`1- items: ${items[2]}`);
  console.log(`2- items: ${items?.[2]}`);
}
getItems();

let log: any = null;
// this is Error => log('a')
log?.("a"); // this is true
