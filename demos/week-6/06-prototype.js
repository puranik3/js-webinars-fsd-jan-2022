/**
 * Prototypal inheritance
 * Object inherit from objects
 */
const john = {
    name: 'John',
    age: 32
};

// "mentor" (i.e. the prototype)
console.log( john.__proto__ );

const jane = {
    name: 'Jane',
    age: 28
};

console.log( jane.__proto__ );

const personPrototype = {
    nationality: 'Indian',
    celebrateBirthday: function() {
        this.age++;
    }
};

// assign john, jane a new prototype
john.__proto__ = personPrototype;
jane.__proto__ = personPrototype;

console.log( john.nationality );
john.celebrateBirthday();
jane.celebrateBirthday();

console.log( john );
console.log( jane );