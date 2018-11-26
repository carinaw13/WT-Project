import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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

  Tab:{
    paddingLeft:"3.125em",
    paddingRight:"3.125em",
    fontSize:"0.938em"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: "5.000em",
      width: 'auto',
      padding:"0.500em",
      paddingRight:"4.125em",
      fontSize:"0.938em",
    },
  },
  searchIcon: {
    width: "40px",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    padding:"0.238em",
    paddingLeft:"12.000em"
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
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
        <AppBar position="static" >
          <Tabs value={value} onChange={this.handleChange} style={{backgroundColor: "#0040FF"}}>
            <Tab className={classes.Tab} value="one" label="Startseite" />
            <Tab className={classes.Tab} value="two" label="Über uns" />
            <Tab className={classes.Tab} value="three" label="Abteilung" />
            <Tab className={classes.Tab} value="foure" label="Kalender" />
            <Tab className={classes.Tab} value="fife" label="Login" />
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
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