import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../App.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: "5px 20px 20px 30px",
    margin: "15px",
    textAlign: "left",
    "min-height": "300px"
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <h1>Skiabteilung</h1>
            <p>
              Liebe Freunde der Skiabteilung,
              <br />
              <br />
              endlich, das Programmheft 2019 ist nun fertig und liegt ab Ende
              nächster Woche im Ort Baierbrunn aus, z.B. Apotheke, Bankautomaten
              Raiffeisenbank und Sparkasse, Waldgasthof Buchenhain, Grundschule
              und Kindergärten.
              <br />
              <br />
              Wir freuen uns auf Euch,
              <br />
              Eure Skilehrer des SC Baierbrunn
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h4>Abteilungsleiter</h4>
            <div>
              Tobias Rapp
              <br />
              Forstenrieder Weg 3a
              <br />
              82065 Baierbrunn
              <br />
              Telefon: 089-45345023
              <br />
              E-Mail:&nbsp;
              <span>
                <a href="mailto:tobiasrapp@t-online.de">
                  tobiasxrapp@t-online.de
                </a>
              </span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
