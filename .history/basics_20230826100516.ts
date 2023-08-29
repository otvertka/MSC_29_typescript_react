// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives:
let age: number;
age = 12;

let userName: string;
userName = "Jeka";

let isInstructor: boolean;
isInstructor = true;

type Person = {
  name: string;
  age: number;
};

// More complex types:
let person: Person;

person = {
  name: "Jeka",
  age: 36,
};

// person = {
//   isEmployee: true,
// };

// Types inference
let course: string | number = "React - The Complete Guide";
course = 123213;

// Functions & types

function add(a: string, b: string): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1,2,3];

// updatedArray[0].split("");
