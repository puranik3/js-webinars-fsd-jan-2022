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

export {
    Movie
}