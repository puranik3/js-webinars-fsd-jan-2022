function sum( ...args ) {
    return args.reduce( ( acc, item ) => acc + item, 0 );
}

console.log( sum( 12, 13, 14, 15 ) );