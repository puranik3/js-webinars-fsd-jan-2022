interface Score {
    player1: number,
    player2: number
}

enum State {
    STOPPED,
    STARTED
}

interface Velocity {
    dx: number,
    dy: number
};

export {
    Score,
    State,
    Velocity
};