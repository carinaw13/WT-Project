import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 100 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});

class TabsWrappedLabel extends React.Component {
  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="Home" />
            <Tab value="two" label="Über uns" />
            <Tab value="three" label="Abteilung" />
            <Tab value="foure" label="Kalender" />
            <Tab value="fife" label="Login" />
          </Tabs>
        </AppBar>
        {value === 'one' && <TabContainer>NEWS</TabContainer>}
        {value === 'two' && <TabContainer>Item Two</TabContainer>}
        {value === 'three' && <TabContainer>Item Three</TabContainer>}
        {value === 'foure' && <TabContainer>Item foure</TabContainer>}
        {value === 'fife' && <TabContainer>Item fife</TabContainer>}
       </div> 
    );
  }
}

TabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsWrappedLabel);