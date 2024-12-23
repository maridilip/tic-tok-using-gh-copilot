# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to play against each other, and it announces the winner or if the game is a draw.

## Features

- Two-player game
- Players can enter their names before starting the game
- Game board with 3x3 grid
- Announce the winner or if the game is a draw
- Options to end or restart the game

## How to Play

1. Open the  `index.html` file in a web browser.
2. Enter the names of Player 1 and Player 2 in the input fields and click the "Submit" button.
3. The game will start automatically.
4. Players take turns clicking on the cells to make their moves.
5. The game announces the winner or if the game is a draw.
6. Use the "End Game" button to end the game or the "Restart Game" button to start a new game.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the game.
- `styles.css`: The CSS file that contains the styles for the game.
- `script.js`: The JavaScript file that contains the game logic.

## Code Overview

### HTML

The `index.html` file contains the structure of the game, including input fields for player names, game controls, and the game board.

### CSS

The `styles.css` file contains styles for the game, including the layout of the game board, styles for the cells, and styles for the game controls and winner announcement.

### JavaScript

The `script.js` file contains the game logic, including functions to handle player moves, check for a winner or draw, and update the game state.

## Functions

- `submitNames()`: Handles the submission of player names and starts the game.
- `startGame()`: Initializes the game state and resets the board.
- `endGame()`: Ends the current game and announces that the game has ended.
- `restartGame()`: Restarts the game by reinitializing the game state and resetting the board.
- `makeMove(cell)`: Handles a player's move and updates the game state.
- `checkWinner()`: Checks if there is a winner.
- `isDraw()`: Checks if the game is a draw.
- `updateAnnouncement(message)`: Updates the winner announcement message.
- `resetBoard()`: Resets the game board.
- `toggleVisibility(elementId, show)`: Toggles the visibility of an element.

## License

This project is licensed under the MIT License.
