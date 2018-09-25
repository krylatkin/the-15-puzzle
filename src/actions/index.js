export const MOVE_NUMBER = "MOVE_NUMBER";
export const SET_BOARD = "SET_BOARD";

export const moveNumber = (number) => ({
  type: MOVE_NUMBER,
  number
});

export const setBoard = (board) => ({
  type: SET_BOARD,
  board
});