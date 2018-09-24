import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveRight, moveLeft } from './reducers/boardReducer'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  moveRight = () => {
    this.props.moveRight();
  };

  moveLeft = () => {
    this.props.moveLeft();
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.moveRight}>Move Right</button>
        <button onClick={this.moveLeft}>Move Left</button>
        <pre>
         {
           JSON.stringify(this.props)
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
