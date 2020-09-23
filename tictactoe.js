// need plays from players, how?
// define a board
// counter will simulate O (even) X (odds)
// have a checker if a pattern is achieved that means they won (0,1,2) is winner because [[x,x,x
//  o,o,x,
//  n,n,o]

const prompt = require("prompt");

let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const checkWinner = (board, player) => {
  if (
    [board[0] === player && board[1] === player && board[2] === player] ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  ) {
    console.log(`${player} is the winner!!`);
    return;
  } else if (movesArray.indexOf("") === -1) {
    console.log("Tie Game!!");
    return;
  }
};

const checkMove = (player, number) => {
  if (board[number] === number) {
    console.log(player);
    board[number] = player;
    checkWinner(board, player);
  } else {
    console.log("invalid move, try again");
    return;
    turns(player);
    return;
  }
};

const turns = (player) => {
  console.log(`Its ${player}'s turn`);
  prompt.start();
  prompt.get(["number"], (err, res) => {
    if (checkMove(player, res)) {
      checkWinner(board, player);
    }
  });
};

turns("x");
