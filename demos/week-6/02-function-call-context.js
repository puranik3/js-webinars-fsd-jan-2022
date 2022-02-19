function greet() {
    // function context (extra info) - "this"
    console.log( this );
}

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: function() {
        console.log( this );
    }
};

john.celebrateBirthday();