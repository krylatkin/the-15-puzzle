import { clone } from 'ramda';
import { MOVE_NUMBER, SET_BOARD, UNDO_MOVE } from "../actions";
import { getPositionByNumber, shuffleBoard } from './helpers';

const completedBoard = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,0],
];

const initialState = {
  board: shuffleBoard(completedBoard),
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_NUMBER:
      const {board} = state;
      const {number} = action;
      const [row, col] = getPositionByNumber(board, number);
      const [emptyRow, emptyCol] = getPositionByNumber(board, 0);

      /* eslint-disable no-mixed-operators */
      if (number > 0 && (
             row === emptyRow     && col === emptyCol - 1
          || row === emptyRow     && col === emptyCol + 1
          || row === emptyRow - 1 && col === emptyCol
          || row === emptyRow + 1 && col === emptyCol) )
      {
        /* eslint-enable no-mixed-operators */
        const newBoard = clone(board);
        newBoard[emptyRow][emptyCol] = number;
        newBoard[row][col] = 0;
        return {
          ...state,
          board: newBoard,
          history: [...state.history, state.board]
        }
      } else {
        return state;
      }

    case SET_BOARD:
      return {
        ...initialState,
        board: action.board,
      };

    case UNDO_MOVE:
      const { history } = state;
      if (!history.length) return state;
      return {
        ...state,
        board: history[history.length - 1],
        history: history.slice(0, history.length - 1),
      };

    default:
      return state;
  }
}
