import { Score, State, Velocity } from './models/utils';
import { random } from './helper';

const board = document.querySelector( '.board' ) as HTMLElement; // assert the type
const ball = document.querySelector( '.ball' ) as HTMLElement; // assert the type
const paddle_1 = document.querySelector( '.paddle_1' ) as HTMLElement; // assert the type
const paddle_2 = document.querySelector( '.paddle_2' ) as HTMLElement; // assert the type
const score_1 = document.querySelector( '.player_1_score' ) as HTMLElement; // assert the type
const score_2 = document.querySelector( '.player_2_score' ) as HTMLElement; // assert the type
const message = document.querySelector( '.message' ) as HTMLElement; // assert the type

const board_coord = board.getBoundingClientRect();

const initial_ball_coord = ball.getBoundingClientRect();
let ball_coord = initial_ball_coord;

let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();

const paddle_height = paddle_1_coord.height;
const ball_top = ball.style.top;
const ball_left = ball.style.left;

class Game {
    private SPEED = 0.085;

    private scores : Score = {
        player1: 0,
        player2: 0,
    };

    private state = State.STOPPED;

    start() {
        this.bindListeners();
    }

    reset() {
        this.state = State.STOPPED;

        ball_coord = initial_ball_coord;

        ball.style.top = ball_top;
        ball.style.left = ball_left;

        message.textContent = 'Press Enter to start the rally';
    }

    bindListeners() {
        document.addEventListener( 'keydown', ( event ) => {
            if( event.key === 'Enter' ) {
                console.log( 'Enter' );

                if( this.state === State.STOPPED ) {
                    this.state = State.STARTED;

                    message.textContent = 'Game on!';

                    requestAnimationFrame(() => {
                        let velocity = this.getVelocity();
                        this.moveBall( velocity );
                    });
                }
            }

            // w for up and s for down (paddle_1)
            if( event.key === 'w' ) {
                paddle_1.style.top = Math.max( paddle_1_coord.top - window.innerHeight * this.SPEED, board_coord.top ) + 'px'; 
                paddle_1_coord = paddle_1.getBoundingClientRect();
            }

            if (event.key == "s") {
                paddle_1.style.top =
                    Math.min(
                        board_coord.bottom - paddle_height,
                        paddle_1_coord.top + window.innerHeight * this.SPEED
                    ) + "px";
                paddle_1_coord = paddle_1.getBoundingClientRect();
            }

            // up and down arrow (for paddle 2)
            if (event.key == "ArrowUp") {
                paddle_2.style.top =
                    Math.max(
                        board_coord.top,
                        paddle_2_coord.top - window.innerHeight * this.SPEED
                    ) + "px";
                paddle_2_coord = paddle_2.getBoundingClientRect();
            }

            if (event.key == "ArrowDown") {
                paddle_2.style.top =
                    Math.min(
                        board_coord.bottom - paddle_height,
                        paddle_2_coord.top + window.innerHeight * this.SPEED
                    ) + "px";
                paddle_2_coord = paddle_2.getBoundingClientRect();
            }
        })
    }

    getVelocity() {
        const velocity : Velocity = {
            dx: random( 3, 8 ) * ( random( 0, 1 ) ? -1 : 1 ), // [ -8, -3 ] or [ 3, 8 ]
            dy: random( 3, 8 ) * ( random( 0, 1 ) ? -1 : 1 ) // [ -8, -3 ] or [ 3, 8 ]
        };

        return velocity;
    }

    bounce( velocity : Velocity ) {
        let newVelocity = this.getVelocity();
        
        // set opposite direction for x, and maintain direction for y
        let curXDirection = velocity.dx > 0 ? 1 : -1;
        let curYDirection = velocity.dy > 0 ? 1 : -1;
        
        newVelocity.dx = Math.abs( newVelocity.dx ) * -curXDirection;
        newVelocity.dy = Math.abs( newVelocity.dy ) * curYDirection;

        return newVelocity;
    };

    moveBall( velocity : Velocity ) {
        // ball hits the top or bottom edge? we need to "change" the direction"
        if(
            ball_coord.top <= board_coord.top
            ||
            ball_coord.bottom >= board_coord.bottom
        ) {
            velocity.dy = -velocity.dy
        }

        if(
            (
                ball_coord.left <= paddle_1_coord.right &&
                ball_coord.top >= paddle_1_coord.top && 
                ball_coord.bottom <= paddle_1_coord.bottom
            )
            ||
            (
                ball_coord.right >= paddle_2_coord.left &&
                ball_coord.top >= paddle_2_coord.top &&
                ball_coord.bottom <= paddle_2_coord.bottom
            )
        ) {
            // velocity.dx = -velocity.dx;
            velocity = this.bounce( velocity );
        }

        // ball moved out of right edge - player 1 wins
        if( ball_coord.right >= board_coord.right ) {
            this.scores.player1++;
            score_1.textContent = '' + this.scores.player1;
            this.reset();
            return;
        }
        
        // ball moved out of left edge - player 2 wins
        if( ball_coord.left <= board_coord.left ) {
            this.scores.player2++;
            score_2.textContent = '' + this.scores.player2;
            this.reset();
            return;
        }

        ball.style.top = ball_coord.top + velocity.dy + 'px';
        ball.style.left = ball_coord.left + velocity.dx + 'px';

        ball_coord = ball.getBoundingClientRect();

        requestAnimationFrame(() => {
            this.moveBall( velocity );
        });
    }
}

const game = new Game();
game.start();