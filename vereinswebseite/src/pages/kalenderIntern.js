import React, { Component } from "react";
import $ from "jquery";
import "fullcalendar";
import "moment";
import "bootstrap";
import "@material-ui/core";

import StyleSheet from "../../node_modules/fullcalendar/dist/fullcalendar.css";
import Deutsch from "../../node_modules/fullcalendar/dist/locale/de.js";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class kalenderIntern extends Component {
  sendForm() {
    const data = {
      title: this.state.title,
      start: this.state.startDate + 'T' + this.state.startTime,
      end: this.state.endDate + 'T' + this.state.endTime
    };
    debugger;
    fetch("http://localhost:5000/events", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(events =>
        this.setState({ events }, () => console.log("data sent...", events))
      )
      .catch(error => {
        alert(error);
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addEvent = () => {
    this.sendForm();
    setTimeout(() => window.location.reload(), 500);
  };

  render() {
    $(document).ready(function() {
      $("#calendar").fullCalendar({
        header: {
          left: "prev, next, today",
          center: "title",
          right: "month, agendaWeek, agendaDay"
        },

        timezone: "local",
        minTime: "08:00:00",
        maxTime: "20:00:00",
        timeFormat: "HH:mm",

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
            alert("Fehler beim Laden der Daten!");
          }
        }
      });
    });

    return (
      <div className="kalender-mainbody-content">
        <div className="page-header">
          <div>
            <Button
              variant="outlined"
              color="inherit"
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
                  value={this.state.title}
                  onChange={this.handleChange("title")}
                />
                <br />
                <p>
                  <font color="darkblue" size="1">
                    Startdatum und -zeit
                  </font>
                </p>
                <TextField
                  type="date"
                  value={this.state.startDate}
                  onChange={this.handleChange("startDate")}
                />
                <TextField
                  type="time"
                  value={this.state.startTime}
                  onChange={this.handleChange("startTime")}
                />
                <br />
                <p>
                  <font color="darkblue" size="1">
                    Enddatum und -zeit
                  </font>
                </p>
                <TextField
                  type="date"
                  value={this.state.endDate}
                  onChange={this.handleChange("endDate")}
                />
                <TextField
                  type="time"
                  value={this.state.endTime}
                  onChange={this.handleChange("endTime")}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Abbrechen
                </Button>
                <Button onClick={this.addEvent} type="submit" color="primary">
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
