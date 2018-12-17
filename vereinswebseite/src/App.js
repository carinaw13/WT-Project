import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'
import logo from './img/RZ_Logo_Baierbrunn.png'

import Menu from './components/Menu'
import Startseite from './pages/startseite'
import AbtBadminton from './pages/abtBadminton'
import AbtBasketball from './pages/abtBasketball'
import AbtLeichtathletik from './pages/abtLeichtathletik'
import AbtSki from './pages/abtSki'
import AbtStockschützen from './pages/abtStockschützen'
import Login from './containers/Login'
// import Vorstand from './pages/ueber-uns/vorstand'
//import Impressum from './pages/ueber-uns/impressum'
import Vorstand from './pages/ueberUns/vorstand'
import Leichtathletik from './pages/abtLeichtathletik'
//import Gallery from './pages/image-gallery';




class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="App" >
          <header className="App-header">
          <div>
          <p>
            <img style= {{float:"left"}} src={logo} className='App-logo' alt='logo' /> 
          </p>
          <h1 style={{paddingTop: "0.5em", paddingLeft:"3.000em", fontSize:"3em"}}> <i> SportClub Baierbrunn e.V.</i> </h1>
          <h2 style={{paddingLeft: "9.000em",fontSize:"2em"}}> <i> Spass am Sport </i> </h2>
          </div>
          </header>
          <Menu />
          <Route path="/" exact component={Startseite} />
          <Route path="/badminton/" component={AbtBadminton} />
          <Route path="/basketball/" component={AbtBasketball} />
          <Route path="/leichtathletik" component={AbtLeichtathletik} />
          <Route path="/ski" component={AbtSki}/>
          <Route path="/stockschützen" component={AbtStockschützen} />
          <Route path="/login" exact component={Login} />
          {/* <Route path="/vorstand/" component={Vorstand}/>  */}
          {/* <Route path="/impressum/" component={Impressum} />  */}
          <Route path="/leichtathletik/" component={Leichtathletik} />
          <Route path="/vorstand/" component={Vorstand}/> 
         {/* <Route path="/impressum/" component={Impressum} />  */}
          {/* <Route path="/leichtathletik/" component={Leichtathletik} /> */}
        </div>
        <footer className="footer">
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