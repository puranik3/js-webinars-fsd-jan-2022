function sum1( x : number, y : number ) /*: number */ {
    return x + y;
}

// const sum2 : ( x : number, y : number ) => number = ( x , y ) => x + y;

type BinaryFunction = ( x : number, y : number ) => number;

const sum2 : BinaryFunction = ( x , y ) => x + y;
const multiple : BinaryFunction = ( x, y ) => x * y;

export {}