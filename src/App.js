import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveRight, moveLeft } from './reducers/boardReducer'

import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class App extends Component {

  moveRight = () => {
    this.props.moveRight();
  };

  moveLeft = () => {
    this.props.moveLeft();
  };

  moveCell = (number) => {
    alert(number);
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
        <button onClick={this.moveLeft}>{'<--'} Move 15 Left </button>
        <button onClick={this.moveRight}>Move 15 Right {'-->'}</button>
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
  ...state
});

const mapDispatchToProps = dispatch => ({
  moveRight: () => dispatch(moveRight()),
  moveLeft: () => dispatch(moveLeft()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
