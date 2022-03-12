type Person = {
    name: string,
    readonly age: number,
    email : string,
    spouse?: Person
};

const jane : Person = {
    name: 'Jane Doe',
    age: 28,
    email: 'jane.doe@example.com'
}

const john : Person = {
    name: 'John Doe',
    age: 32,
    email: 'john.doe@example.com',
    spouse: jane
};

jane.spouse = john;

// john.age++; // violation of readonly

export {}