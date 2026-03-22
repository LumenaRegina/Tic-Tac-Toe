function Gameboard() {
  const scaleFactor = 3;
  const board = [];

  for (let i = 0; i < scaleFactor; i++) {
    board[i] = [];
    for (let j = 0; j < scaleFactor; j++) {
      board[i].push(Cell());
    }
  }

  const getGameboard = () => board;

  return {getGameboard};
}

function Cell() {
  let value = 0;

  const getValue = () => value;

  const setValue = (playerToken) => {
    value = playerToken;
  }

  return {getValue, setValue};
}

function Player(name, token){
    return {name, token}
}

function Gamecontroller() {
    const playerOne = Player("One","X");
    const playerTwo = Player("Two","O");

    let activePlayer = playerOne;

    const switchPlayer =() => {
        activePlayer = activePlayer===playerOne ? playerTwo : playerOne; 
    }

    const getActivePlayer = () => activePlayer



    return {switchPlayer, getActivePlayer}
}

const game = Gameboard()