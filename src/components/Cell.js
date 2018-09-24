import React from "react";
import pt from "prop-types";


export default class Cell extends React.Component {

  onClick = () => {
    this.props.moveCell(this.props.number);
  };

  render() {
    const { number } = this.props;

    return (
      number !== 0 ?
        <td className="tile" onClick={this.onClick}>{number}</td> :
        <td className='empty'/>
    );
  }
}


Cell.propTypes = {
  number: pt.number,
  moveCell: pt.func.isRequired,
};