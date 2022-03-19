// random( 10, 20 )
export const random = ( min : number, max : number ) => min + Math.floor( Math.random() * ( max - min + 1 ) );