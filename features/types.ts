const today: Date = new Date();
today.getMonth();

const person = {
    age: 20
};

// Object
class Car {}
const car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i) => {
    console.log(i);
}

// When to use type annotation
// example 1: json parsing
const json = "{'x':10,'y':20}"
const coordinates: {x: number; y:number} = JSON.parse(json);
console.log(coordinates);

// example 2 : When we declare a var on one line and init it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') foundWord = true;
}

// example 3: var whose type cannot inferred correctly
let numbers = [-10, -1, 12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[1] > 0) numAboveZero = numbers[1];
}