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
            <h1>Badminton</h1>
            <h2>Taktik und Technik</h2>
            <p><strong>Im Einzel</strong></p>
            <ul className="list">
              <li>sollte man seinen Gegner laufen lassen</li>
              <li>selber möglichst immer wieder in die Mitte zurückkehren</li>
            </ul>
            <p><strong>Im Doppel</strong></p>
            <ul className="list">
              <li>
                sollte man den Ball möglichst früh spielen, möglichst schon am
                Netz
              </li>
              <li>
                teilt sich eine Mannschaft ihr Feld beim Angriff am besten nach
                "vorne/hinten", beim Abwehr-Spiel in linke/rechte Hälfte
              </li>
            </ul>
            <h2>Spielarten</h2>
            <ul className="list">
              <li>
                <strong>Drop:&ensp;</strong>
                Kurzer Ball hinters Netz, um den Gegner zu hetzen - wenn man die
                Zeit hat ihn zu platzieren.
              </li>
              <li>
                <strong>Smash:&ensp;</strong>
                Schmetterball ins Feld, nachdem der Gegner einen Drive zu hoch
                oder einen Clear zu kurz gespielt hat.
              </li>
              <li>
                <strong>Clear:&ensp;</strong>
                Hoher, weiter Ball an die Grundlinie. Wegen der langen Flugzeit
                gewinnt man Zeit.
              </li>
              <li>
                <strong>Drive:&ensp;</strong>
                Schneller Ball aus der Feldmitte in die Feldmitte: steht beim
                Doppel der Gegner "vorne/hinten", erreicht der Vordere den Ball
                nur selten und der Hintere kann nicht schmettern.
              </li>
              <li>
                <strong>Töten:&ensp;</strong>
                Ball gleich am Netz abfangen und schnell ins Feld schlagen. Geht
                gut, wenn der Gegner einen Drop zu hoch spielt.
              </li>
            </ul>
            <h2>Trainingsmethoden</h2>
            <p>
              Nicht nur wenn das Spielfeldangebot etwas begrenzt ist, bieten
              sich folgende Trainingsmöglichkeiten zur Verbesserung der
              Spielfähigkeit, Taktik und Koordination an:
            </p>
            <p><strong>Alleine</strong></p>
            <ul className="list">
              <li>
                gegen die Wand spielen (evtl. mit Gummiball), dabei möglichst
                immer die gleiche Stelle treffen, wechselweise Vorhand/Rückhand,
                ...
              </li>
              <li>
                Ball möglichst lange auf dem Schläger hüpfen lassen, dabei
                Wechsel Vorhand/Rückhand, rechte/linke Seite, ...
              </li>
              <li>
                mit mehreren Bällen hintereinander Angabe über Schnur üben:
                möglichst immer den gleichen Fleck treffen (mal vorne rechts,
                dann hinten links, ...), möglichst flach über die Schnur spielen
              </li>
            </ul>
            <p><strong>Mit Partner</strong></p>
            <ul className="list">
              <li>Wechsel Zuspiel: Hoch/Tief, Vorhand/Rückhand, ...</li>
              <li>Ball erst stoppen, dann weiterspielen</li>
              <li>
                ein Partner schmettert immer auf die gleiche Stelle, der andere
                stoppt und spielt hoch zurück
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h4>Abteilungsleiter</h4>
            <div>
              Peter Breitfelder
              <br />
              Telefon: 089-7930289
              <br />
              E-Mail:&nbsp;
              <span>
                <a href="mailto:badminton@sc-baierbrunn.de">
                  badminton@sc-baierbrunn.de
                </a>
              </span>
            </div>
            <h4>Übungsleiter</h4>
            <div>Peter Breitfelder</div>
            <h4>Trainingszeiten</h4>
            <div>
              Spielbetrieb jeden Donnerstag
              <br />
              von 20 - 22 Uhr
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
