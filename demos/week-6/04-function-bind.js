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

// bind() is used to create a new function that calls an underlying function with a given context
const cbJane = john.celebrateBirthday.bind( jane ); // "this" -> jane (ends up increasing jane's age)

// the effort of calling .call() decreases
cbJane();
cbJane();
cbJane();
cbJane();
cbJane();
cbJane();

console.log( jane );