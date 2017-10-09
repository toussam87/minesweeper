class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    playMove(rowIndex, columnIndex) {
       this._board.flipTile(rowIndex, columnIndex);

        if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
            console.log('Game over! Final Board!');
            this._board.print();
        } else if (this._board.playerBoard[rowIndex][columnIndex] === ' ') {
            this._board.hasSafeTiles();
            this._board.print();
        } else {
            console.log('Current Board: ');
            this._board.print();
        }
    }
}



class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile(rowIndex, columnIndex) {
    if(this._playerBoard[rowIndex][columnIndex] !== ' ') {
        // console.log('This tile has already been flipped');
        return this._playerBoard;
    } else if (this._bombBoard[rowIndex][columnIndex] = 'B') {
        console.log('This tile has a bomb in it! BOOM!');
        return this._bombBoard;
    } else {
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        } 
        this._numberOfTiles--;
    }   

    getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
        ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;

    this._numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
        const neighborRowIndex = this._rowIndex + offset[0];
        const neighhorColumnIndex = this._columnIndex + offset[1];
            if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighhorColumnIndex >= 0 && neighhorColumnIndex < numberOfColumns) {
                if(this._bombBoard[neighborRowIndex][neighhorColumnIndex] === 'B')
                    this._numberOfBombs++; 
            }
        });
    }

    hasSafeTiles(numberOfTiles, numberOfBomb) {
        if (this._numberOfTiles === this._numberOfBomb) {
           return this._playerBoard;
        } else if (this._numberOfTiles !== this._numberOfBombs) {
            return this._playerBoard;
        }
    }

    print(board) {
    console.log(this._bombBoard.map(row => row.join(' | ')).join('\n'));
    };


    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        let board = [ ];

        for (let row = 0; row < numberOfRows; row++) {
            let row = [ ];
            for (let column = 0; column < numberOfColumns; column++) {
                row.push(' ');
            } board.push(row); 
        } return board;
    };


    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        let board = [ ];
        
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            const row = [];
            for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                row.push(null);
            } board.push(row);
        }

        let numberOfBombsPlaced = 0;
        // the while loop has the potential to place bombs on top of already existing bombs
        while (numberOfBombsPlaced < numberOfBombs) {
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
                if ((board[randomRowIndex][randomColumnIndex] !== 'B')) {
                    board[randomRowIndex][randomColumnIndex] = 'B';
                    numberOfBombsPlaced++;
                }
        } return board;        
    }
}

const g = new Game (3, 4, 2);
g.playMove(1,2);