export const MOVE_NUMBER = "MOVE_NUMBER";
export const SET_BOARD = "SET_BOARD";
export const UNDO_MOVE = "UNDO_MOVE";

export const moveNumber = (number) => ({
  type: MOVE_NUMBER,
  number
});

export const setBoard = (board) => ({
  type: SET_BOARD,
  board
});

export const undoMove = () => ({
  type: UNDO_MOVE,
});