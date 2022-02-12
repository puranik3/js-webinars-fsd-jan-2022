function greet() {
    // function context (extra info) - "this"
    console.log( this );
}

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: function() {
        this.age++;
    }
};

const jane = {
    name: 'Jane',
    age: 28
};

// call() is used to change the context when a function is called
john.celebrateBirthday.call( jane ); // "this" -> jane (ends up increasing jane's age)

console.log( jane );