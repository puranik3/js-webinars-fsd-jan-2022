const numbers = [ 2, 7, 9, 15, 4, 18 ];

// iterator methods - forEach, find, filter, map, reduce

// even numbers in the array - use find()
const evenNumbers = numbers.filter(function( item ) {
    return item % 2 === 0;
});

console.log( evenNumbers );

const squaredEvenNumbers = evenNumbers.map(function( item ) {
    return item ** 2;
});

console.log( squaredEvenNumbers );


const sameResult = numbers
    .filter(function( item ) {
        return item % 2 === 0;
    })
    .map(function( item ) {
        return item ** 2;
    });

console.log( sameResult );
