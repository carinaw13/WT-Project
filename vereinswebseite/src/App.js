import React, { Component } from 'react'
import './App.css'
import Startseite from './components/Startseite'
import logo from './img/RZ_Logo_Baierbrunn.svg'





class App extends Component {
  render() {
    return (
      <div>
      <div className="App" >
      <p><img style= {{float:"left"}}src={logo} className='App-logo' alt='logo' />  </p>
        <header className="App-header">
          <h1> <i> SportClub Baierbrunn e.V.</i> </h1>
          <h2 style={{paddingLeft: "4.000em"}}> <i> Spass am Sport </i> </h2>
        </header>
        <Startseite />
        </div>
      <footer 
        style= {{
        padding: "10px",
        bottom: "0",
        left: "0",
        right: "0" }}
        >
          <div class="wrapper">
          <a href="x.html">Impressum</a> | <a href="y.html">Kontakt</a>
				<p>© 2014 by selfHTML</p>
			</div>
        </footer>
       </div>
    );
  }
}

export default App;