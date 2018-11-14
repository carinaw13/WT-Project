import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello World.
          </p>
          <p>
        <NavBar />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
