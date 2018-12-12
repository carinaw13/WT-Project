import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'
import logo from './img/RZ_Logo_Baierbrunn.png'

import Menu from './components/Menu'
import Startseite from './pages/startseite'
import AbtBadminton from './pages/abt-badminton'
import AbtBasketball from './pages/abt-basketball'
// import Gallery from './pages/image-gallery';





class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="App" >
          <p>
            <img style= {{float:"left"}} src={logo} className='App-logo' alt='logo' /> 
          </p>
          <header className="App-header">
            <h1> <i> SportClub Baierbrunn e.V.</i> </h1>
            <h2 style={{paddingLeft: "4.000em"}}> <i> Spass am Sport </i> </h2>
          </header>
          <Menu />
          {/* <Gallery/> */}
          <Route path="/" exact component={Startseite} />
          <Route path="/badminton/" component={AbtBadminton} />
          <Route path="/basketball/" component={AbtBasketball} />
        </div>
        <footer style={{paddingLeft: "30px"}}>
          <div class="wrapper">
            <a href="x.html">Home</a> | <a href="y.html">Kontakt</a>| <a href="z.html">Impressum</a>
				    <p>© 2018 by selfHTML</p>
			    </div>
        </footer>
       </div>
       </Router>
    );
  }
}

export default App;