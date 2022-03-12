const primes = [ 2, 3, 5, 7, 11 ];

let composites : number[];
composites = [ 1, 4, 6, 8 ];

let evens : Array<number>;
evens = [ 2, 4, 6 ];

let employeeMap1 : (number | string)[] = [ 1234, 'John Doe', 'john.doe@example.com' ];
employeeMap1.push( 9876543210 );
employeeMap1[0] = 'Web developer';

let employeeMap2 : [ number, string, string ] = [ 1234, 'John Doe', 'john.doe@example.com' ];
employeeMap2.push( 9876543210 );
// employeeMap2[0] = 'Web developer'; // type violation

export {}