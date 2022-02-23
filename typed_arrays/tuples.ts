// Object: easy to read and solid
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// array, order can be mixed so it may become confusing and prone to errors
const pepsi = ['brown', true, 40];
pepsi[0] = 40; // I broke the order, now I have no idea what the values represents

// I can define a fixed order thus creating a tuple
type Drink = [string, boolean, number];

const coca: Drink = ['brown', true, 40];
// string[0] = 40 // ERR
const sprite: Drink = ['clear', true, 50];
