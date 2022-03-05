// copying arrays and objects using spread operator
// ... (same as rest)

const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];

const arr3 = [
    ...arr1, // arr1[0], arr1[1], arr1[2],
    ...arr2 // arr1[0], arr1[1], arr1[2], arr2[0], arr3[1], arr2[2]
];

console.log( arr3 );

const john = {
    name: 'John',
    age: 32
};

const johnOfficial = {
    company: 'Example Dot Com',
    designation: 'Accountant',
    emails: [
        'john@example.com',
        'john@exampleconsulting.com'
    ]
};

const johnMaster = {
    ...john, // name: john.name, age: john.age
    ...johnOfficial
};

johnOfficial.emails[0] = 'john@example.co';
johnOfficial.company = 'Example Consulting';

console.log( johnMaster );
console.log( johnOfficial );