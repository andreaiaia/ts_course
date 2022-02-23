class Vehicle {
    constructor(public color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('honk honk!');
    }
}

// typescript makes inheritance easy
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
        this.wheels = wheels;
    }
    private drive(): void {
        console.log('vroom');
    }

    start(): void {
        this.drive();
        this.honk();
        console.log(this.wheels);
        console.log(this.color);
    }
}

const car = new Car(4, 'orange');
car.start();

// the modifiers are: public, private and protected
// public: nothing to say, function can be accessed from everywhere
// protected: function can be accessed only inside class and child classes
// private: function can be accessed only inside the class that created it