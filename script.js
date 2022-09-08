const gameField = document.getElementById('game-field');
const winnerResult = document.getElementById('winner-result');
const restart = document.getElementById('restart');

let move = 0;

gameField.addEventListener('click', e => {
    if(e.target.className = 'cell') {
        if(e.target.innerHTML !== 'X' && e.target.innerHTML !== 'O') {
            move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O'
            move++;
        }
        checkWin();
    }
})

restart.addEventListener('click', () => {
    location.reload();
});

const checkWin = () => {
    const cells = document.getElementsByClassName('cell');
    const winArray = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let result;
    let player1 = false, player2 = false;
    for(let i = 0; i < winArray.length; i++) {
        if(cells[winArray[i][0]].innerHTML === 'X' && cells[winArray[i][1]].innerHTML === 'X' && cells[winArray[i][2]].innerHTML === 'X') {
            result = 'Player X';
            player1 = true;
            gameField.style.pointerEvents = 'none';
            prepareResult(result);
        } else if(cells[winArray[i][0]].innerHTML === 'O' && cells[winArray[i][1]].innerHTML === 'O' && cells[winArray[i][2]].innerHTML === 'O') {
            result = 'Player O';
            player2 = true;
            gameField.style.pointerEvents = 'none';
            prepareResult(result);
        } else {
            if(move === 8 && (!player1 && !player2))
            {
                console.log('draw ' + i);
                result = 'Draw'
                prepareResult(result);
                gameField.style.pointerEvents = 'none';
            }
        }
    }
}

const prepareResult = (winner) => {
    winner === 'Draw' ? winnerResult.innerHTML = `${winner}!` : winnerResult.innerHTML = `${winner} is winner!`;
    winnerResult.style.display = 'block';
}