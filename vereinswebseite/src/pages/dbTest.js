import React, { Component } from "react";
import "../App.css";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/members")
      .then(res => res.json())
      .then(members =>
        this.setState({ members }, () =>
          console.log("members fetched...", members)
        )
      );
  }

  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h2>Mitglieder</h2>
        <ul>
          {this.state.members.map(member => (
            <li key={member.member_id}>{member.name}</li>
          ))}
        </ul>

        <h2>POST Test</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            variant="outlined"
          />
        </form>
        <Button type="submit" variant="contained" className={classes.button}>
          Submit
        </Button>
      </div>
    );
  }
}

Test.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Test);
