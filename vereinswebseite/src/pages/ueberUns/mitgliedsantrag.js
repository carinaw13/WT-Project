import React from "react";
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

//import SignaturePad from "react-signature-pad-wrapper";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  menu: {
    width: 200
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class OutlinedTextFields extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  state = {
    gender: ""
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
        <form className={classes.root} autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
            >
              Geschlecht
            </InputLabel>
            <Select
              value={this.state.gender}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="gender"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"männlich"}>männlich</MenuItem>
              <MenuItem value={"weiblich"}>weiblich</MenuItem>
              <MenuItem value={"divers"}>divers</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-required"
            label="Titel"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Vorname"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Name"
            className={classes.textField}
            variant="outlined"
          />

          <TextField
            required
            id="outlined-required"
            label="Straße"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Hausnummer"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Postleitzahl"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Ort"
            className={classes.textField}
            variant="outlined"
          />

          <TextField
            required
            id="outlined-required"
            label="Geburtsdatum"
            placeholder="TT.MM.JJJJ"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Telefon/Mobil"
            className={classes.textField}
            variant="outlined"
          />

          <p className="left-p">2. Anmeldedaten für den Online-Zugang</p>
          <TextField
            required
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />

          <p className="left-p">
            3. Hiermit ermächtige ich den SC Baierbrunn e.V. bis auf Widerruf
            die fälligen Beiträge (Jahresbeiträge, Kursbeiträge oder Umlagen)
            ganzjährig von meinem folgenden Konto abzubuchen
          </p>
          <TextField
            required
            id="outlined-required"
            label="Kontoinhaber"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Bank"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="IBAN"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="BIC"
            className={classes.textField}
            variant="outlined"
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
            id="outlined-required"
            label="Ort"
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Datum"
            className={classes.textField}
            variant="outlined"
          />
          <Button
            id="submitButton"
            type="submit"
            variant="contained"
            className={classes.button}
          >
            Antrag abschicken
          </Button>
        </form>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
