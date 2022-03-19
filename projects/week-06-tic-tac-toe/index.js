const state = {
    cells: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
    nextPlayer: 'X',
    isGameOver: false
};

function isGameOver() {
    const winningStates = [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],
        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 5, 8 ],
        [ 0, 4, 8 ],
        [ 2, 4, 6 ]
    ];

    for( let i = 0; i < winningStates.length; i++ ) {
        const ws = winningStates[i];

        if( state.cells[ws[0]] !== '' && state.cells[ws[0]] === state.cells[ws[1]] && state.cells[ws[1]] === state.cells[ws[2]] ) {
            return true;
        }
    }
    
    return false;
}

function showNextPlayer() {
    document.querySelector( '.next-player' ).textContent = state.nextPlayer;
}

function bindListeners() {
    const gridCells = Array.from( document.querySelectorAll( '.grid-cell' ) );

    gridCells.forEach(function( gridCell ) {
        gridCell.addEventListener( 'click', function( event ) {
            // console.log( gridCell );
            // source of the evnt
            const cell = event.target;
            const cellIndex = cell.getAttribute( 'data-cell-index' );

            console.log( cellIndex );

            if( state.cells[cellIndex] === '' ) {
                state.cells[cellIndex] = state.nextPlayer;
                state.nextPlayer = ( state.nextPlayer === 'X' ) ? 'O' : 'X';

                render();

                if( isGameOver() ) {
                    alert( 'Game over' );
                }
            } else {
                alert( 'You need to select some other cell' );
            }
        });
    })
}

function render() {
    const gridCells = Array.from( document.querySelectorAll( '.grid-cell' ) );

    gridCells.forEach(function( gridCell, index ) {
        gridCell.textContent = state.cells[index];
    });

    showNextPlayer();
}

function init() {
    render();
    bindListeners();
}

// Hey browser! Whenever you are ready, please execute the init function
document.addEventListener( 'DOMContentLoaded', init );