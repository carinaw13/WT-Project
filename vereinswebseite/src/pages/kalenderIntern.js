import React, { Component } from "react";
import $ from "jquery";
import "fullcalendar";
import "moment";
import "bootstrap";
//import RModal from '../../node_modules/rmodal/dist/rmodal.js';
//import jQueryUI from '../../node_modules/react-jqueryui/node_modules/react/react.js';
//import DatePicker from 'react-jqueryui-datepicker';
//import Dialog from "@material-ui/core/Dialog";
import "@material-ui/core";

import * as moment from "moment";
//import Moment from '../../node_modules/moment/moment.js';
import StyleSheet from "../../node_modules/fullcalendar/dist/fullcalendar.css";
import Deutsch from "../../node_modules/fullcalendar/dist/locale/de.js";

//import { Calendar } from 'fullcalendar';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class kalenderIntern extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    $(document).ready(function() {
      $("#calendar").fullCalendar({
        header: {
          left: "prev, next, today, addEventButton",
          center: "title",
          right: "month, agendaWeek, agendaDay"
        },

        timezone: "local",
        minTime: "00:00:00",
        maxTime: "24:00:00",
        timeFormat: "hh:mm",

        selectable: true,
        selectHelper: true,
        editable: true,
        eventLimit: true,
        weekNumbers: true,

        //fetch event data
        events: {
          url: "http://localhost:5000/events",
          type: "GET",
          error: function() {
            alert("There was an error while fetching events!");
          }
        }
      });
    });

    return (
      <div class="kalender-mainbody-content">
        <div class="page-header">
          <div>
            <Button
              variant="outlined"
              color="darkblue"
              onClick={this.handleClickOpen}
            >
              neue Veranstaltung
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                <b>Veranstaltung</b>
              </DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name der Veranstaltung"
                  type="text"
                  fullWidth
                />
                <br />
                <p>
                  <font color="darkblue" size="1">
                    Anfang: Datum und Zeit
                  </font>
                </p>
                <TextField type="date" />
                <TextField type="time" />
                <br />
                <p>
                  <font color="darkblue" size="1">
                    Ende: Datum und Zeit
                  </font>
                </p>
                <TextField type="date" />
                <TextField type="time" />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Abbrechen
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Hinzufügen
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <div id="calendar" />
        </div>
      </div>
    );
  }
}

export default kalenderIntern;
