import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../App.css";

const styles = require("../services/themeStyles");

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <h1>Stockschützen</h1>
            <p>
              Stockschießen, Eisstocksport bzw. Stocksport oder Eisstockschießen
              ist eine Sportart, die vor allem im Alpenraum verbreitet ist und
              eine gewisse Ähnlichkeit mit Curling hat. Dennoch hat der
              Stocksport seinen eigenen Schwerpunkt, der als unabhängig vom
              Curling anzusehen ist. Eisstockschießen ist ein alter Volkssport
              und historisch gesehen dem Brauchtum zuzurechnen, das sich nur in
              Gegenden mit zufrierenden Gewässern verbreitete und nur im Winter
              gespielt wurde. In der modernen Form als Freizeit- oder auch
              Leistungssport, die von Regeln und Vereinen geprägt ist, wird
              ganzjährig gespielt und zwischen dem Mannschafts-, Weiten- und
              Zielwettbewerb unterschieden. Stocksport ist ein Präzisionssport.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h4>Abteilungsleiter</h4>
            <div>
              Peter Dittert
              <br />
              Mobil: 0171/209 55 84
              <br />
              E-Mail:&nbsp;
              <span>
                <a href="mailto:pd@dittert-baierbrunn.de">
                  pd@dittert-baierbrunn.de
                </a>
              </span>
            </div>
            <h4>Trainingszeiten</h4>
            <div>
              Mittwoch und Samstag
              <br />
              von 13:00 - ca. 17:00 Uhr
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
