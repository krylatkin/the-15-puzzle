import React from "react";
import pt from "prop-types";
import Cell from "./Cell";

export default class Board extends React.Component {
  render() {
    const { board, moveCell } = this.props;

    const rows = board.map( (row, i) => {
      const cells = row.map( (number) => {
        return (
          <Cell key={number }
                number={number}
                moveCell={moveCell} />
        );
      } );

      return (
        <tr key={i} >
          {cells}
        </tr>
      );
    });

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}


Board.propTypes = {
  board: pt.arrayOf(pt.arrayOf(pt.number)).isRequired,
  moveCell: pt.func.isRequired,
};