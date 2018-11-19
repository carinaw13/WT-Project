import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Startseite SC Baierbrunn </p>
          <p> Spass am Sport </p>
        <NavBar />
        </header>
       </div>
    );
  }
}

export default App;