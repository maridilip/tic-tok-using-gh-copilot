let currentPlayer = 'X';
let gameActive = false;
let player1Name = '';
let player2Name = '';

function submitNames() {
    const player1Name = document.getElementById('player1Name').value;
    const player2Name = document.getElementById('player2Name').value;
    if (player1Name && player2Name) {
        document.getElementById('playerInputs').style.display = 'none';
        document.getElementById('gameControls').style.display = 'block';
        document.getElementById('gameContainer').style.display = 'grid';
        startGame();
    } else {
        alert('Please enter names for both players.');
    }
}

function startGame() {
    gameActive = true;
    currentPlayer = 'X';
    updateAnnouncement('');
    resetBoard();
}

function endGame() {
    gameActive = false;
    updateAnnouncement('Game Ended');
}

function restartGame() {
    startGame();
}

/**
 * Handles a player's move in the game.
 * 
 * This function updates the game state when a player makes a move by clicking on a cell.
 * It checks if the game is active and if the clicked cell is empty. If so, it updates the cell
 * with the current player's symbol, checks for a winner or a draw, and updates the game state accordingly.
 * 
 * @param {HTMLElement} cell - The cell element that was clicked by the player.
 */
function makeMove(cell) {
    if (gameActive && cell.textContent === '') {
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        if (checkWinner()) {
            const winnerName = currentPlayer === 'X' ? player1Name : player2Name;
            updateAnnouncement(`${winnerName} Wins!`);
            gameActive = false;
        } else if (isDraw()) {
            updateAnnouncement('It\'s a Draw!');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function isDraw() {
    const cells = document.querySelectorAll('.cell');
    return [...cells].every(cell => cell.textContent !== '');
}

function updateAnnouncement(message) {
    document.getElementById('winnerAnnouncement').textContent = message;
}

function resetBoard() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
}

function toggleVisibility(elementId, show) {
    document.getElementById(elementId).style.display = show ? 'block' : 'none';
}
