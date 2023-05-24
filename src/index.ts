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

let speed: number | null = null;
let ride = {
  speed: speed ?? 30,
};

// let phone = <HTMLInputElement>document.getElementById("phone");
// <HTMLInputElement> === as HTMLInputElement
// phone.value = "0912";

function render(document: unknown): string | unknown {
  if (typeof document === "string") {
    return document.toUpperCase();
  }
  return document;
}

function processEvents(): never {
  // never => this function never return anything
  while (true) {
    console.log("process");
  }
}
// processEvents();
console.log("hey");

class Account {
  // readonly id: number; // readonly => can't change
  name: string;
  nickname?: string; // optional
  private _balance: number; // private => can't access from outside of class And Underline is a convention for private properties

  constructor(public id: number, name: string, balance: number) {
    // this.id = id; => this is comment because of public id in constructor
    this.name = name;
    this._balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
    this._calculateTax();
  }
  getBalance(): number {
    return this._balance;
  }
  private _calculateTax(): number {
    return 0;
  }
}

// access modifier => public, private, protected
let account = new Account(1, "mostafa", 0);
account.deposite(14_500_000);
console.log(account instanceof Account);
console.log(account.getBalance());
