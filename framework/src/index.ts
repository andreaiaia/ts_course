import { User } from "./models/User";

const user = new User({ name: 'giorgio', age: 20});

user.on('change', () => {
    console.log('change run');
});

user.on('change', () => {
    console.log('run again');
    
});

user.on('falcon', () => {
    console.log("that's not how the force works");
    
})

user.trigger('change');

user.trigger('falcon');