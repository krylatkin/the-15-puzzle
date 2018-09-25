import { clone } from 'ramda';
import { MOVE_NUMBER } from "../actions";
import { getPositionByNumber, shuffleBoard } from './helpers';

const initialState = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,0],
];

export default (state = shuffleBoard(initialState), action) => {
  switch (action.type) {
    case MOVE_NUMBER:
      const {number} = action;
      const [row, col] = getPositionByNumber(state, number);
      const [emptyRow, emptyCol] = getPositionByNumber(state, 0);

      /* eslint-disable no-mixed-operators */
      if (number > 0 && (
             row === emptyRow     && col === emptyCol - 1
          || row === emptyRow     && col === emptyCol + 1
          || row === emptyRow - 1 && col === emptyCol
          || row === emptyRow + 1 && col === emptyCol) )
      {
        /* eslint-enable no-mixed-operators */
        const newBoard = clone(state);
        newBoard[emptyRow][emptyCol] = number;
        newBoard[row][col] = 0;
        return newBoard;
      } else {
        return state;
      }


    default:
      return state;
  }
}
