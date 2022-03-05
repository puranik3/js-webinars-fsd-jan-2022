const map = new Map();

map.set( 'name', 'John' );
map.set( 123, 'One hundred and twenty three' );

for( let [ key, value ] of map ) {
    console.log( key, value );
}