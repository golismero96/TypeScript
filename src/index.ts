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

class Account {
  // readonly id: number; // readonly => That is, it cannot be changed
  // name: string;
  nickname?: string; // optional
  // Here's a convention: we start Private Variable names with an underscore
  // private _balance: number; // private => can't access from outside of class And Underline is a convention for private properties

  constructor(
    public readonly uuId: number,
    public name: string,
    private _balance: number
  ) {
    // this is comment on because variables in constructor exist
    // this.id = id;
    // this.name = name;
    // this._balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
    this._calculateTax();
  }
  get balance(): number {
    // this is one geter Method - 'getBalance()' method change to 'get balance()'
    return this._balance;
  }
  set balance(value: number) {
    // this is one seter Method
    if (value <= 0) throw new Error("Invalid amount");
    this._balance += value;
  }
  private _calculateTax(): number {
    return 0;
  }
}

// access modifier => public, private, protected
let account = new Account(1, "mostafa", 0);
account.deposite(14_500_000);
console.log(account instanceof Account);
console.log(account.balance);
account.balance = 2;

class SeatAssignment {
  [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = "Mostafa";
seats.A2 = "Amir";
seats["A3"] = "Kaveh";

class Ride {
  private static _activeRides: number = 0;

  static get activeRides(): number {
    return Ride._activeRides;
  }
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
}
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
  constructor(public firstName: string, public lastName: string) {}

  // protected: It is similar to private, with the difference that child classes that inherit from this parent class can access this method.
  protected walk() {
    console.log("walk");
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking a test");
  }
}

class Teacher extends Person {
  override get fullName(): string {
    return `Professor: ${super.fullName}`;
  }
}

let teacher = new Teacher("Mostafa", "Dadfar");
console.log(teacher.fullName);

class Princopal extends Person {
  override get fullName(): string {
    return `Princopal: ${super.fullName}`;
  }
}

const printNames = (people: Person[]) => {
  people.forEach((person: Person) => {
    console.log(person.fullName);
  });
};

printNames([
  new Student(1, "Mostafa", "Dadfar"),
  new Teacher("Kaveh", "Dadkhah"),
  new Teacher("Amir", "Radfar"),
]);
