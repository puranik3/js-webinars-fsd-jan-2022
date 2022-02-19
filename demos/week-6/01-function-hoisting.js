console.log( sum( 12, 13 ) );

// function declaration - hoisted
function sum( x, y ) {
    return x + y;
}

console.log( add( 12, 13 ) );

// function expression - not hoisted
const add = function( x, y ) {
    return x + y;
};