class Movie {
    constructor( name, year ) {
        this.name = name;
        this.year = year;
        this.awards = []
    }

    addAward( award ) {
        this.awards.push( award );
    }
}

const pushpa = new Movie( 'Pushpa', 2022 );
pushpa.addAward( 'FIlmfare 2022' );

console.log( pushpa );