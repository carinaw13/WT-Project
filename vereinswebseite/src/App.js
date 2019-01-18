import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Button from "@material-ui/core/Button";

import './App.css'
import logo from './img/RZ_Logo_Baierbrunn.png'

import Menu from './components/Menu'
import Startseite from './pages/startseite'
import AbtBadminton from './pages/abtBadminton'
import AbtBasketball from './pages/abtBasketball'
import AbtLeichtathletik from './pages/abtLeichtathletik'
import AbtSki from './pages/abtSki'
import AbtStockschützen from './pages/abtStockschützen'
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
import DbTest from "./pages/dbTest";
import Mitgliedsantrag from "./pages/ueberUns/mitgliedsantrag";

import AuthService from './containers/AuthService'
const Auth = new AuthService('http://localhost:8080')

class App extends Component {
  state = {
    user: null
  }

  componentWillMount() {
    this._updateUser()
  }

  render() {
    const { user } = this.state

    return (
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
              {user != null ?
                (<React.Fragment>
                  <h3 style={{
                  fontSize: "15px",
                  marginLeft: "800px"

                }} >Herzlich Willkommen {user.username} ! </h3>
                  <p className="App-intro">
                    <Button
                      style={{ backgroundColor: "rgb(8, 8, 94)", color: "white", marginLeft: "800px" }}
                      onClick={this.handleLogout.bind(this)}
                    >Logout</Button>
                  </p>

                </React.Fragment>)
                :
                null
              }
            </div>
          </header>
          <Menu user={user} authService={Auth} onAuth={this._updateUser.bind(this)} />
          <Route path="/" exact component={Startseite} />
          <Route path="/badminton" component={AbtBadminton} />
          <Route path="/basketball" component={AbtBasketball} />
          <Route path="/leichtathletik" component={AbtLeichtathletik} />
          <Route path="/ski" component={AbtSki} />
          <Route path="/stockschützen" component={AbtStockschützen} />
          <Route path="/vorstand" component={Vorstand} />
          <Route path="/fotogalerie" component={Fotogalerie} />
          <Route path="/gemeinde" component={Gemeinde} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/unsereGeschichte" component={unsereGeschichte} />
          <Route path="/datenschutz" component={Datenschutz} />
          <Route path="/satzung" component={Satzung} />
          <Route path="/ehrenordnung" component={Ehrenordnung} />
          <Route path="/kalenderExtern" component={Kursplan} />
          <Route path="/kalenderIntern" component={Kalender} />
          <Route path="/dbTest" component={DbTest} />
          <Route path="/mitgliedsantrag" component={Mitgliedsantrag} />
        </div>
        <footer className="footer">
          <div className="wrapper">
            <a href="/">Home</a> | <a href="/kontakt">Kontakt</a>| <a href="/impressum">Impressum</a>
            <p className="p"> © 2019 </p>
          </div>
        </footer>
      </div>
    );
  }

  handleLogout() {
    Auth.logout()

    this.setState({
      user: null
    })

    this.props.history.replace('/');
  }


  _updateUser() {
    if (Auth.loggedIn()) {
      try {
        const profile = Auth.getProfile()
        this.setState({
          user: profile
        })
      }
      catch (err) {
        Auth.logout()
        this.props.history.replace('/')
      }
    }
  }
}

export default App





