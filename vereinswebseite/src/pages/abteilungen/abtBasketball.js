import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../../App.css";

const styles = require("../../services/themeStyles");

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <h1>Basketball</h1>
            <h2>Was macht die Abteilung Basketball?</h2>
            <p>
              Wir trainieren wöchentlich Mittwoch von 17:30 - 19:00 Uhr, mit
              Mädchen und Jungen im Alter von 10 bis 13 Jahren.
            </p>
            <p>
              In diesem Jahr nehmen wir auch mit einer Mannschaft an den
              Punktspielen des bayerischen Basketballvernbandes teil. Hier
              spielt eine Mixmannschaft U14 (unter 14) ab dem 01.10., wo wir mit
              einem Heimspiel in der Grundschule Baierbrunn um 16:15 Uhr
              beginnen, um Spaß und Punkte.
            </p>
            <h2>Wir suchen noch...</h2>
            <p>
              ...Erwachsene Damen und Herren, die Mittwochs von 21:00 - 22:00
              Uhr Lust auf Basketball haben.
            </p>
            <p>
              Treffpunkt ist die Halle in der Grundschule Baierbrunn. Spaß
              garantiert!
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h4>Abteilungsleiter</h4>
            <div>
              Peter Schröder
              <br />
              Mobil: 0171 209 55 84
              <br />
              E-Mail:&nbsp;
              <span>
                <a href="mailto:basketball@sc-baierbrunn.de">
                  basketball@sc-baierbrunn.de
                </a>
              </span>
            </div>
            <h4>Trainingszeiten</h4>
            <div>
              Jugend Mittwochs 17:30 - 19:00 Uhr
              <br />
              Erwachsene Mittwochs 21:00 - 22:00 Uhr
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
