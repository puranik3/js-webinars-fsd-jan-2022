interface IPerson {
    readonly name: string,
    age: number,
    celebrateBirthday: () => void,
    setAge: ( newAge : number ) => void;
};

// class Person implements IPerson {
//     public name: string;
//     public age: number;

//     constructor( name : string, age : number ) {
//         this.name = name;
//         this.age = age;
//     }

//     celebrateBirthday() {

//     }

//     setAge( newAge : number ) {

//     }
// }

class Person implements IPerson {
    constructor( public readonly name : string, public age : number ) {
    }

    celebrateBirthday() {
        this.age++;
    }

    setAge( newAge : number ) {
        this.age = newAge
    }
}

const john = new Person( 'John Doe', 32 );
console.log( john );

john.age++;
// john.name = 'Jonathan'; // readonly violation