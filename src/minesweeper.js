class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    playMove(rowIndex, columnIndex) {
        this._board = flipTIle(rowIndex, columnIndex);

        if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
            console.log('The game is over!');
            print(this._board);
        } else if (this._board.playerBoard[rowIndex][columbIndex] !== ' ') {
            console.log('The player has won!');
        } else {
            console.log('Current Board: ');
            print(this._board);
        }
    }
}



class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile(rowIndex, columnIndex) {
    if(this._playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped');
        return;
    } else if (this._bombBoard[rowIndex][columnIndex] = 'B') {
        console.log('This tile has a bomb in it! BOOM!');
    } else {
        playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        } 
        this.numberOfTiles--;
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
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;

    this._numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighhorColumnIndex = columnIndex + offset[1];
            if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighhorColumnIndex >= 0 && neighhorColumnIndex < numberOfColumns) {
                if(bombBoard[neighborRowIndex][neighhorColumnIndex] === 'B')
                    this._numberOfBombs++; 
            }
        });
    }

    hasSafeTiles() {
        if (this._numberOfTiles !== this._numberOfBomb) {
            console.log('the player has won');
        } else if (this._numberOfTiles !== numberOfBombs) {
            
        }
    }

    print(board) {
    console.log(this.board.map(row => row.join(' | ')).join('\n'));
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
            // console.log('row ' + randomRowIndex);
            // console.log('column ' + randomColumnIndex);
            if(board[randomRowIndex][randomColumnIndex] !== 'B'){
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            }
        } return board;
            
    }
}
const g = new Game (3, 3, 3);

// console.log(generatePlayerBoard(3, 4));

// const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
//     let board = [ ];
    
//         for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
//             const row = [];
//             for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
//                 row.push(null);
//             } board.push(row);
//         }
     
//         let numberOfBombsPlaced = 0;
//         // the while loop has the potential to place bombs on top of already existing bombs
//         while (numberOfBombsPlaced < numberOfBombs) {
//             let randomRowIndex = Math.floor(Math.random() * numberOfRows);
//             let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
//             // console.log('row ' + randomRowIndex);
//             // console.log('column ' + randomColumnIndex);
//             if(board[randomRowIndex][randomColumnIndex] !== 'B'){
//                 board[randomRowIndex][randomColumnIndex] = 'B';
//                 numberOfBombsPlaced++;
//             }
//     } return board;
// }

// const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
//     const neighborOffsets = [
//         [-1, -1],
//         [-1, 0],
//         [-1, 1],
//         [0, -1],
//         [0, 1],
//         [1, -1],
//         [1, 0],
//         [1, 1]
//         ];
//     const numberOfRows = bombBoard.length;
//     const numberOfColumns = bombBoard[0].length;

//     let numberOfBombs = 0;
//     neighborOffsets.forEach(offset => {
//         const neighborRowIndex = rowIndex + offset[0];
//         const neighhorColumnIndex = columnIndex + offset[1];
//             if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighhorColumnIndex >= 0 && neighhorColumnIndex < numberOfColumns) {
//                 if(bombBoard[neighborRowIndex][neighhorColumnIndex] === 'B')
//                     numberOfBombs++; 
//             }
//     });
// }
// console.log(generateBombBoard(3, 4, 5))


// print(board) {
//     console.log(this.board.map(row => row.join(' | ')).join('\n'));
// };

// const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
//     let board = [ ];

//     for (let row = 0; row < numberOfRows; row++) {
//         let row = [ ];
//         for (let column = 0; column < numberOfColumns; column++) {
//             row.push(' ');
//         } board.push(row); 
//     } return board;
// };


// static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
//     let board = [ ];
    
//         for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
//             const row = [];
//             for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
//                 row.push(null);
//             } board.push(row);
//         }
     
//         let numberOfBombsPlaced = 0;
//         // the while loop has the potential to place bombs on top of already existing bombs
//         while (numberOfBombsPlaced < numberOfBombs) {
//             let randomRowIndex = Math.floor(Math.random() * numberOfRows);
//             let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
//             // console.log('row ' + randomRowIndex);
//             // console.log('column ' + randomColumnIndex);
//             if(board[randomRowIndex][randomColumnIndex] !== 'B'){
//                 board[randomRowIndex][randomColumnIndex] = 'B';
//                 numberOfBombsPlaced++;
//             }
//     } return board;
// }

// // printBoard(generateBombBoard(3, 4, 5)); 
// let playerBoard = generatePlayerBoard(3, 4);
// let bombBoard = generateBombBoard(3, 4, 5);

// printBoard(generatePlayerBoard(3, 4));
// printBoard(generateBombBoard(3, 3, 3));

// console.log('Bomb Board: ' + printBoard(generateBombBoard(3, 4, 3)));
// const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
//     if(playerBoard[rowIndex][columnIndex] !== ' ') {
//         console.log('This tile has already been flipped');
//         return;
//     } else if (bombBoard[rowIndex][columnIndex] = 'B') {
//         console.log('This tile has a bomb in it! BOOM!');
//     } else {
//         playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
//     }
// }

// flipTile(playerBoard, bombBoard, 2, 0);

// printBoard(playerBoard);
// flipTile(generatePlayerBoard(3, 4, 5) generateBombBoard(3, 4, 5), 0, 0);
// console.log('Updated Player Board: ');
// printBoard(generatePlayerBoard(3, 4, 3));
