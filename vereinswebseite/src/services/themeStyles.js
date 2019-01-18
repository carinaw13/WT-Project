const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
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

module.exports = styles;