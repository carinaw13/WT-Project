import React, { Component } from 'react'
import './App.css'
import Startseite from './components/Startseite'
import logo from './RZ_Logo_Baierbrunn.svg'







class App extends Component {
  render() {
    return (
      <div className="App">
      <p><img src={logo} className='App-logo' alt='logo' />  </p>
        <header className="App-header">
          <h1> <i> SportClub Baierbrunn e.V.</i> </h1>
          <h2 style={{paddingLeft: "8.000em"}}> <i> Spass am Sport </i> </h2>
        </header>
        <Startseite />
       </div>
    );
  }
}

export default App;