import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveNumber } from './actions';

import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class App extends Component {

  moveCell = (number) => {
    this.props.moveNumber(number);
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
  moveNumber: (n) => dispatch(moveNumber(n)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
