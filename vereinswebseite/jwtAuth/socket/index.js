<div>
  <div className="App">
    <div>
      <p><input type="button" value="Poke the server" id="poke" /></p>


      <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
      <script src="/socket.io/socket.io.js"></script>
      <script>
        var socket = io.connect('http://localhost:4000');
    socket.on('message', function(message) {
          alert('Der Server sendet eine Nachricht: ' + message)
        })
    
    $('#poke').click(function () {
          socket.emit('message', 'Hallo Server?')
        })
</script>
    </div>
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






