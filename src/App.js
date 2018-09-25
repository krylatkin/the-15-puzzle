import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveNumber, setBoard, undoMove } from './actions';

import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class App extends Component {

  moveCell = (number) => {
    this.props.moveNumber(number);
  };

  undoMove = () => {
    this.props.undoMove();
  };

  saveGame = () => {
    localStorage.setItem('board', JSON.stringify(this.props.board));
    alert('Game saved!');
  };

  loadGame = () => {
    const board = JSON.parse(localStorage.getItem('board'));
    console.log(board);
    if (board) {
      this.props.setBoard(board);
    } else {
      alert('No saved game!');
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React "The 15 Puzzle"</h1>
        </header>
        <Board
          board={this.props.board}
          moveCell={this.moveCell}
        />
        <button onClick={this.saveGame}>Save Game</button>
        <button onClick={this.loadGame}>Load Game</button>
        <button onClick={this.undoMove}>Undo Move</button>
        <pre>
         {
           false && JSON.stringify(this.props)
         }
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.board,
});

const mapDispatchToProps = dispatch => ({
  moveNumber: (n) => dispatch(moveNumber(n)),
  setBoard: (board) => dispatch(setBoard(board)),
  undoMove: () => dispatch(undoMove()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
