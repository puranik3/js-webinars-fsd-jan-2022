function Person( name, age ) {
    console.log( this );
    this.name = name;
    this.age = age;
}

// add all methods to the prototype
Person.prototype.celebrateBirthday = function() {
    this.age++;
};

// 1. A new object {} is created
// 2. The newly created object is returned automatically
const john = new Person( 'John', 32 );
const jane = new Person( 'Jane', 28 );
console.log( john );

console.log( john.__proto__ === Person.prototype );

john.celebrateBirthday();
console.log( john );

jane.celebrateBirthday();
console.log( jane );