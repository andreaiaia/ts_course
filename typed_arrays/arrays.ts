// type inference understands the type is string[]
const carMakers = ['ford', 'toyota', 'chevy'];
// other type inference magic
const dates = [new Date(), new Date()];
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camero']
];

// Corner cases
// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();
// Prevent incompatible values
// carMakers.push(100); // ERR

// Autocomplete methods
carMakers.map((car: string): string => {
    return car.toUpperCase(); // autocompleted
});

// Multiple types in arrays
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(5); // ERR
