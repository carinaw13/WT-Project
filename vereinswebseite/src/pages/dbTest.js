import React from "react";
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
      members: [],
      tests: []
    };
  }

  sendForm() {
    const data = { name: this.state.name };
    debugger;
    fetch("http://localhost:5000/tests", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(tests =>
        this.setState({ tests }, () => console.log("data sent...", tests))
      )
      .catch(error => {
        alert(error);
      });
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
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            variant="outlined"
          />
          <Button onClick={this.sendForm.bind(this)} variant="contained" className={classes.button}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

Test.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Test);
