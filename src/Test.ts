// let sales: number = 12345;
// let course: string = 'TypeScript';
// let is_published: boolean = true;

// function render(document: any) {
//   console.log(document);
// }

// let numbers: number[] = [1, 2, 3, 4];

// let user: [number, string] = [1, 'sam'];

// const enum Size {
//   Small = 1,
//   Medium = 3,
//   Large = 4,
// }

// let mySize: Size = Size.Medium;

// function calculateTax(income: number, taxYear = 2000): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   } else {
//     return income * 1.5;
//   }
// }

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: 'Sam',
//   retire: (date: Date) => {},
// };

// function kgToLbs(weight: number | string): number {
//   if (typeof weight === 'number') {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

//Literal

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'mm';

// function greet(name: string | null | undefined) {
//   if (name) {
//     console.log(name.toUpperCase());
//   } else {
//     console.log('Hello');
//   }
// }

// greet(null);

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(10);

//optional property access operator

console.log(customer?.birthday?.getFullYear());

//optional element access operator

console.log(customer?.[0]);

//optional call

let log: any = null;
log?.('a');
