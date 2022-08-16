let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];

let printName: (name: string) => void

// function printName(name: string) {
//   console.log(name);
// }
// printName('Piyush');

// //tuple
// let role: [number, string];

// //object
// type Person = {
//   name: string;
//   age?: number;
// }
// let person: Person = {
//   name: 'Piyush',
//   age: 22
// }
// let lotsOfPeople: Person[];

interface Person extends X {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

//difference between type and interface
type X = {
  a: string;
  b: number;
}
type Y= X & {
  c: string;
  d: number;
}
let y: Y = {
  a: 'Queen',
  b: 23,
  c: 'Laure',
  d: 40
}