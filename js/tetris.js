
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// 상수를 사용해 캔버스의 크기를 계산한다.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

class Board {
    grid;

    // 새 게임이 시작되면 보드를 초기화한다.
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // 0으로 채워진 행렬을 얻는다.
    getEmptyBoard() {
        return Array.from(
            { length: ROWS }, () => Array(COLS).fill(0)
        );
    }
}

let board = new Board();

function play() {
    board.reset();
    console.table(board.grid);
}

[2, 0, 0], [2, 2, 2], [0, 0, 0];

class Piece {
    x;
    y;
    color;
    shape;
    ctx;

    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }

    spawn() {
        this.color = 'blue';
        this.shape = [
            [2, 0, 0],
            [2, 2, 2],
            [0, 0, 0]
        ];

        // Starting position.
        this.x = 3;
        this.y = 0;
    }
}

draw () {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            // this.x, this.y는 shape의 상단 왼쪽 좌표이다
            // shape 안에 있는 블록 좌표에 x, y를 더한다.
            // 보드에서 블록의 좌표는 this.x + x가 된다.
            if (value > 0) {
                this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
            }
        });
    });
}

function play() {
    board = getEmptyBoard();
    let piece = new Piece(ctx);
    piece.draw();

    board.piece = piece;
}