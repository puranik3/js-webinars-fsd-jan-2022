// array destructuring
const fruits = [ 'Apples', 'Oranges', 'Bananas' ];

// const first = fruits[0], third = fruits[2];
const [ first, , third ] = fruits;

console.log( first, third );

// object destructuring
const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bangalore',
        area: 'Whitefield'
    }
};

// const name = john.name, age = john.age, city = john.address.city, area = john.address.area;
const { name, age, address: { city, area } } = john;

console.log( name, age, city, area );
