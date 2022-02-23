// some alternate forms to annotate types in functions
const add = (a: number, b: number): number => {
    return a + b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (msg: string): void => {
    console.log(msg);
}

// Super corner case
// Never si usa quando ci aspettiamo che la funzioni non 
// ritorni mai nulla e anzi termini l'esecuzione brutalmente
const throwError = (msg: string): never => {
    throw new Error(msg);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

// Destructuring ES2015 style
const logWeather = ({ 
    date, 
    weather
}: {
    date: Date, 
    weather: string
}): void => {
    console.log(date);
    console.log(weather);
};