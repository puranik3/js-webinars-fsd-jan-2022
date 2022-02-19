function printPerson( person, getName ) {
    console.log( getName( person ) + ' is of age ' + person.age );
}

function getNameWithTitle( person ) {
    if( person.gender === 'male' ) {
        return 'Mr. ' + person.name;
    } else {
        return 'Ms. ' + person.name;
    }
}

function getPlainName( person ) {
    return person.name;
}

const john = {
    name: 'John',
    gender: 'male',
    age: 32
};

const jane = {
    name: 'Jane',
    gender: 'female',
    age: 28
};

printPerson( john, getNameWithTitle );
printPerson( jane, getNameWithTitle );

printPerson( john, getPlainName );