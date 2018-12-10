import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import "../App.css"

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

const NavButton = withStyles({
})(Button);

class TabsWrappedLabel extends React.Component {


  handleChange = (event, value) => {
    this.setState({ value });
  };


  state = {
    anchorEl: null,
    currentMenu: null,
  };

  handleClick = menuName => {
    return (event) => {
      this.setState({ currentMenu: menuName, anchorEl: event.currentTarget });
    }
  };

  handleClose = () => {
    this.setState({ currentMenu: null, anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { anchorEl, currentMenu } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ flexDirection: 'row' }} >
                  <NavButton
                    onClick={() => { this.props.history.push("/") }}
                  >
                  Startseite
                  </NavButton>
                <NavButton
                  aria-owns={currentMenu === 'simple-menu' ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick('simple-menu')}
                >
                  Über uns
                </NavButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={currentMenu === 'simple-menu'}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
                <NavButton
                  aria-owns={currentMenu === 'abt-menu' ? 'abt-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick('abt-menu')}
                >
                  Abteilung
                </NavButton>
                <Menu
                  id="abt-menu"
                  anchorEl={anchorEl}
                  open={currentMenu === 'abt-menu'}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/badminton")
                  }}>Badminton</MenuItem>
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/basketball")
                  }}>Basketball</MenuItem>
                </Menu>
                <NavButton
                >
                  Kalender
                </NavButton>
                <NavButton
                  
                >
                  Login
                </NavButton>
                
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
        </AppBar>
       </div> 
    );
  }
}

TabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(TabsWrappedLabel));