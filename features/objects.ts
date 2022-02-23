// How to work with objects
const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lon: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// Destructuring objects
const { age }: { age: number } = profile;
const { 
    coords: {lat, lon} 
}: { coords: { lat: number, lon: number } } = profile;
