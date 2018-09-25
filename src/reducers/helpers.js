import { clone } from 'ramda';

export const getPositionByNumber = (board, number) => {
  const index = board.toString().split(',').indexOf(String(number));

  if (index === -1) {
    return [0, 0];
  }

  const row = parseInt(index / 4, 10);
  const col = index - row * 4;

  return [row, col];
};

export function shuffleBoard(board) {
  const newBoard = clone(board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let i1 = Math.floor(Math.random() * (board.length));
      let j1 = Math.floor(Math.random() * (board.length));

      let temp = newBoard[i][j];
      newBoard[i][j] = newBoard[i1][j1];
      newBoard[i1][j1] = temp;

    }
  }

  return newBoard;
}