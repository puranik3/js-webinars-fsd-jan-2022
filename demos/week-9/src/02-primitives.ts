// number, boolean, string
let x = 1; // type has been "inferred" as number

// x = 'hello'; // type violation

// any type will be used if no type were provided
let greeting : string; // explicit type if required to avoid the "any" type

greeting = 'Hello';
// greeting = 123;

export {}