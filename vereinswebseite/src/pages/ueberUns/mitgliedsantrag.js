import React from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import ReactDOM from "react-dom";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const styles = require("../../services/themeStyles");

const MyLink = props => <Link to="/" {...props} />;

class UserForm extends React.Component {
  state = {
    gender: ""
  };

  sendForm() {
    const data = {
      gender: this.state.gender,
      title: this.state.title,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      postCode: this.state.postCode,
      city: this.state.city,
      birthDate: this.state.birthDate,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      accountOwner: this.state.accountOwner,
      bankName: this.state.bankName,
      iban: this.state.iban,
      bic: this.state.bic,
      cityOfRegistration: this.state.cityOfRegistration,
      dateOfRegistration: this.state.dateOfRegistration
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(users =>
        this.setState({ users }, () => console.log("data sent...", users))
      )
      .catch(error => {
        alert(error);
      });
  }

  //form control - unterbricht Rahmen, um Label korrekt anzuzeigen
  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="form-div">
        <h1>SportClub Baierbrunn e.V.</h1>
        <h2>Aufnahmeantrag</h2>
        <br />

        <p className="left-p">
          1. Ich beantrage hiermit meine Aufnahme als Mitglied im SC Baierbrunn
          e.V.
        </p>
        <form className={classes.container} noValidate autoComplete="off">
          <FormControl variant="outlined" className="gender-select">
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
            >
              Geschlecht
            </InputLabel>
            <Select
              value={this.state.gender}
              onChange={this.handleChange("gender")}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="gender"
                />
              }
            >
              <MenuItem value={"männlich"}>männlich</MenuItem>
              <MenuItem value={"weiblich"}>weiblich</MenuItem>
              <MenuItem value={"divers"}>divers</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Titel"
            className="text-field"
            variant="outlined"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
          <TextField
            required
            label="Vorname"
            className="text-field"
            variant="outlined"
            value={this.state.firstName}
            onChange={this.handleChange("firstName")}
          />
          <TextField
            required
            label="Name"
            className="text-field"
            variant="outlined"
            value={this.state.lastName}
            onChange={this.handleChange("lastName")}
          />

          <TextField
            required
            label="Straße"
            className="text-field"
            variant="outlined"
            value={this.state.street}
            onChange={this.handleChange("street")}
          />
          <TextField
            required
            label="Hausnummer"
            className="text-field"
            variant="outlined"
            value={this.state.houseNumber}
            onChange={this.handleChange("houseNumber")}
          />
          <TextField
            required
            label="Postleitzahl"
            className="text-field"
            variant="outlined"
            value={this.state.postCode}
            onChange={this.handleChange("postCode")}
          />
          <TextField
            required
            label="Ort"
            className="text-field"
            variant="outlined"
            value={this.state.city}
            onChange={this.handleChange("city")}
          />

          <TextField
            required
            label="Geburtsdatum"
            placeholder="TT.MM.JJJJ"
            className="text-field"
            variant="outlined"
            value={this.state.birthDate}
            onChange={this.handleChange("birthDate")}
          />
          <TextField
            label="Telefon/Mobil"
            className="text-field"
            variant="outlined"
            value={this.state.phoneNumber}
            onChange={this.handleChange("phoneNumber")}
          />
          <TextField
            required
            id="outlined-email-input"
            label="Email"
            className="text-field"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />

          <p className="left-p">2. Anmeldedaten für den Online-Zugang</p>
          <TextField
            required
            label="Benutzername"
            className="text-field"
            variant="outlined"
            value={this.state.username}
            onChange={this.handleChange("username")}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            className="text-field"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />

          <p className="left-p">
            3. Hiermit ermächtige ich den SC Baierbrunn e.V. bis auf Widerruf
            die fälligen Beiträge (Jahresbeiträge, Kursbeiträge oder Umlagen)
            ganzjährig von meinem folgenden Konto abzubuchen
          </p>
          <TextField
            required
            label="Kontoinhaber"
            className="text-field"
            variant="outlined"
            value={this.state.accountOwner}
            onChange={this.handleChange("accountOwner")}
          />
          <TextField
            required
            label="Bank"
            className="text-field"
            variant="outlined"
            value={this.state.bankName}
            onChange={this.handleChange("bankName")}
          />
          <TextField
            required
            label="IBAN"
            className="text-field"
            variant="outlined"
            value={this.state.iban}
            onChange={this.handleChange("iban")}
          />
          <TextField
            required
            label="BIC"
            className="text-field"
            variant="outlined"
            value={this.state.bic}
            onChange={this.handleChange("bic")}
          />

          <p className="left-p">
            Eine Änderung der oben aufgeführten Daten werde ich dem Verein
            unverzüglich mitteilen. Eventuelle Kosten für Beitrags-Rückbuchungen
            gehen zu Lasten des Mitgliedes. Gezahlte Beiträge werden nicht
            zurückerstattet.
          </p>
          <p className="left-p">
            Die Kündigung ist gemäß Satzung nur zum Jahresende möglich und muß
            beim Vorstand bis zum 31.12. des Jahres in schriftlicher Form
            eingegangen sein.
          </p>
          <p className="left-p">
            Die{" "}
            <a
              target="_blank"
              href="https://www.sc-baierbrunn.de/downloads/Sportverein/Datenschutzerkl%c3%a4rung.pdf"
            >
              Datenschutzerklärung
            </a>{" "}
            habe ich gelesen und bin damit einverstanden.
          </p>

          <TextField
            required
            label="Ort"
            className="text-field"
            variant="outlined"
            value={this.state.cityOfRegistration}
            onChange={this.handleChange("cityOfRegistration")}
          />
          <TextField
            required
            label="Datum"
            className="text-field"
            variant="outlined"
            value={this.state.dateOfRegistration}
            onChange={this.handleChange("dateOfRegistration")}
          />
          <Button
            id="submitButton"
            variant="contained"
            onClick={this.sendForm.bind(this)}
            component={MyLink}
          >
            Antrag abschicken
          </Button>
        </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserForm);
