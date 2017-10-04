const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [ ];

    for (let row = 0; row < numberOfRows; row++) {
        row = [ ];
        for (let column = 0; column < numberOfColumns; column++) {
            row.push(' ');
            board.push(row); 
        } 
    } return board;
};

// console.log(generatePlayerBoard(3, 4));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [ ];
    
        for (let row = 0; row < numberOfRows; row++) {
            row = [ ];
            for (let column = 0; column < numberOfColumns; column++) {
                row.push(' ');
                board.push(row); 
            } 
        }
     
        let numberOfBombsPlaced = 0;
        // the while loop has the potential to place bombs on top of already existing bombs
        while (numberOfBombsPlaced < numberOfBombs) {
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
            // console.log('row ' + randomRowIndex);
            // console.log('column ' + randomColumnIndex);
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
            
    } return board;
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
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

    const numberOfRows = bombBoard[0].length;
    const numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
        neighborRowIndex = rowIndex + offset[0];
        neightborColumnIndex = columnIndex + offset[1];
            if {neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neightborColumnIndex >= 0 && neightborColumnIndex < numberOfColumns} {
                if(bombBoard[neighborRowIndex]
            }
    }); 
}
// console.log(generateBombBoard(3, 4, 5))
const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

//printBoard(generateBombBoard(3, 4, 5)); 
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

// console.log('Player Board: ' + printBoard(generatePlayerBoard(3, 4)));

// console.log('Bomb Board: ' + printBoard(generateBombBoard(3, 4, 5)));
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped');
        return;
    } else if (playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('test');
    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
    }
    console.log(columnIndex)
}

flipTile(playerBoard, bombBoard, 0 , 0);
console.log('Updated Player Board: ');
printBoard(generatePlayerBoard(3, 4, 5));