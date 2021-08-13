let apples: number = 5;

apples = 10;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}
let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
// 1) Function that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinate: { x: number; y: number } = JSON.parse(json);
console.log(coordinate);

// 2) when we declare a variable on one line and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
