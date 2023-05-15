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

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "mostafa",
  retire: (date: Date) => {
    console.log(date);
  },
};
