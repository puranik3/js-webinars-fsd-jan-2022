const range = ( min : number, max : number ) => {
    // [ min, min + 1, min + 2, ...  , max ]
    return new Array( max - min + 1 ).fill( min ).map( ( x, y ) => x + y );
}

export {
    range
};