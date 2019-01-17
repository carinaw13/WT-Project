import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../App.css";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({});

let id = 0;
function createData(name, kontakt, lizenz, gruppe) {
  id += 1;
  return { id, name, kontakt, lizenz, gruppe };
}

const rows = [
  createData(
    "Werner Tüting",
    "08178-7555",
    "Lizensierter Leichtathletik-Trainer C und B",
    "Schüler/-innen U 12 sowie U 14 + U 16 und älter sowie Wettkampf-Training ab U 12"
  ),
  createData(
    "Anna Kaleita",
    <a href="mailto:anna.kaleita@t-online.de">anna.kaleita@t-online.de</a>,
    "Lizensierte Assistentin",
    "aktuell Springerin"
  )
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <div class="abt-mainbody-content">
      <div class="page-header">
        <h1>Leichtathletik</h1>
      </div>
      <div class="page-body">
        <h4>Abteilungsleiter</h4>
        <div>
          Werner Tüting
          <br />
          Jahnstrasse 18
          <br />
          82069 Schäftlarn
          <br />
          Telefon: 08178-7555
          <br />
          Mobil: 0172-8527747
          <br />
          E-Mail:&nbsp;
          <span>
            <a href="mailto:werner@tueting.net" target="new">
              werner@tueting.net
            </a>
          </span>
        </div>
        <h4>Übungsleiter</h4>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell>Kontakt</CustomTableCell>
                <CustomTableCell>Lizenz</CustomTableCell>
                <CustomTableCell>Gruppe</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow className={classes.row} key={row.id}>
                    <CustomTableCell component="th" scope="row">
                      {row.name}
                    </CustomTableCell>
                    <CustomTableCell>{row.kontakt}</CustomTableCell>
                    <CustomTableCell>{row.lizenz}</CustomTableCell>
                    <CustomTableCell>{row.gruppe}</CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
