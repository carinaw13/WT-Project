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
import Vorstand from './pages/ueberUns/vorstand'
import Gemeinde from './pages/ueberUns/gemeinde'
import Kontakt from './pages/ueberUns/kontakt'
import Impressum from './pages/ueberUns/impressum';
import unsereGeschichte from './pages/ueberUns/unsereGeschichte';
import Datenschutz from './pages/ueberUns/datenschutz';
import Satzung from './pages/ueberUns/satzung';
import Ehrenordnung from './pages/ueberUns/ehrenordnung';
import Kursplan from './pages/kalenderExtern';
import Kalender from './pages/kalenderIntern';
import Fotogalerie from "./pages/fotogalerie";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <div>
                <p>
                  <img
                    style={{ float: "left" }}
                    src={logo}
                    className="App-logo"
                    alt="logo"
                  />
                </p>
                <h1
                  style={{
                    paddingTop: "0.5em",
                    paddingLeft: "3.000em",
                    fontSize: "3em"
                  }}
                >
                  <i> SportClub Baierbrunn e.V.</i>
                </h1>
                <h2 style={{ paddingLeft: "9.000em", fontSize: "2em" }}>
                  <i> Spass am Sport </i>
                </h2>
              </div>
            </header>
            <Menu />
            <Route path="/" exact component={Startseite} />
            <Route path="/badminton/" component={AbtBadminton} />
            <Route path="/basketball/" component={AbtBasketball} />
            <Route path="/leichtathletik" component={AbtLeichtathletik} />
            <Route path="/ski" component={AbtSki} />
            <Route path="/stockschützen" component={AbtStockschützen} />
            <Route path="/login" exact component={Login} />
            <Route path="/vorstand/" component={Vorstand} />
            <Route path="/fotogalerie" component={Fotogalerie} />
            <Route path="/login" exact component={Login} />
            <Route path="/vorstand/" component={Vorstand}/>
            <Route path="/gemeinde/" component={Gemeinde}/>
            <Route path="/kontakt/" component={Kontakt}/>
            <Route path="/impressum/" component={Impressum}/>
            <Route path="/unsereGeschichte/" component={unsereGeschichte}/>
            <Route path="/datenschutz/" component={Datenschutz}/>
            <Route path="/satzung/" component={Satzung}/>
            <Route path="/ehrenordnung/" component={Ehrenordnung}/>
            <Route path="/kalenderExtern/" component={Kursplan}/>
            <Route path="/kalenderIntern/" component={Kalender}/>
          </div>
          <footer className="footer">
            <div class="wrapper">
              <a href="/">Home</a> | <a href="/kontakt/">Kontakt</a>| <a href="/impressum/">Impressum</a>
              <p className="p"> © 2018 by selfHTML</p>
            </div>
          </footer>
          </div>
      </Router>
    );
  }
}

export default App;
