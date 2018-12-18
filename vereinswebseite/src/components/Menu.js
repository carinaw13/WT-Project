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
import Popover from '@material-ui/core/Popover'
import TextField from '@material-ui/core/TextField';

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
    fontSize:"0.938em",
    backgroundColor:"#304FFE"
  },
  search: {
    paddingLeft:'60px',
    paddingRight:'20px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: "14.000em",
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
  NavButton:{
    paddingLeft:'60px',
    paddingRight:'60px'
  },
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

const NavButton = withStyles({
})(Button);

class TabsWrappedLabel extends React.Component {


  handleChange = name => (event, value, name ) => {
    this.setState({ value, [name]: event.target.value });
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
    const { anchorEl, currentMenu } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ flexDirection: 'row' }} >
                  <NavButton
                    onClick={() => { this.props.history.push("/") }}
                    className={classes.NavButton}
                  >
                  Startseite
                  </NavButton>
                <NavButton
                  aria-owns={currentMenu === 'about-us-menu' ? 'about-us-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick('about-us-menu')}
                  className={classes.NavButton}
                >
                  Über uns
                </NavButton>
                <Menu
                  id="about-us-menu"
                  anchorEl={anchorEl}
                  open={currentMenu === 'about-us-menu'}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/badminton")
                  }}>Unsere Geschichte</MenuItem>
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/basketball")
                  }}>Gemeinde Baierbrunn</MenuItem>
                    <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/vorstand")
                  }}>Vorstand</MenuItem>
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/basketball")
                  }}>Mitglied werden</MenuItem>
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/basketball")
                  }}>Kontakt</MenuItem>
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/basketball")
                  }}>Impressum</MenuItem>

                </Menu>
                <NavButton
                  aria-owns={currentMenu === 'abt-menu' ? 'abt-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick('abt-menu')}
                  className={classes.NavButton}
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
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/leichtathletik")
                  }}>Leichtathletik</MenuItem>
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/ski")
                  }}>Ski</MenuItem>
                  <MenuItem onClick={() => {
                    this.handleClose()
                    this.props.history.push("/stockschützen")
                  }}>Stockschützen</MenuItem>
                </Menu>
                <NavButton
                className={classes.NavButton}
                >
                  Kalender
                </NavButton>
                <NavButton
                    onClick={() => { this.props.history.push("/fotogalerie") }}
                    className={classes.NavButton}
                  >
                  Fotogalerie
                </NavButton>
                <NavButton
                  aria-owns={currentMenu === 'login-menu' ? 'login-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick('login-menu')}
                  className={classes.NavButton}>
                  Login
                  </NavButton>
                <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    open={currentMenu === 'login-menu'}
                  >
                    <Typography className={classes.typography}>
                    <TextField
                      id="standard-name"
                      label="Benutzername"
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                    <br></br>
                    <TextField
                      id="standard-name"
                      label="Passwort"
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                    <br></br>
                    <Button style={{ paddingTop: "10px", paddingRight: "40px", paddingLeft:"40px", paddingBottom:"10px" }} >
                      Einloggen
                    </Button>
                   </Typography>
                  </Popover>
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