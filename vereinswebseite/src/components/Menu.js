import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import "../App.css";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 100 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  },

  Tab: {
    paddingLeft: "3.125em",
    paddingRight: "3.125em",
    fontSize: "0.938em"
  },
  search: {
    paddingLeft: "60px",
    paddingRight: "20px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "14.000em",
      width: "auto",
      padding: "0.500em",
      paddingRight: "4.125em",
      fontSize: "0.938em"
    }
  },
  searchIcon: {
    width: "40px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.238em",
    paddingLeft: "12.000em"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  NavButton: {
    paddingLeft: "60px",
    paddingRight: "60px",
    color: "white"
  },
  typography: {
    margin: theme.spacing.unit * 2
  }
});

const NavButton = withStyles({})(Button);

class TabsWrappedLabel extends React.Component {
  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  state = {
    anchorEl: null,
    currentMenu: null
  };

  handleClick = menuName => {
    return event => {
      this.setState({ currentMenu: menuName, anchorEl: event.currentTarget });
    };
  };

  handleClose = () => {
    this.setState({ currentMenu: null, anchorEl: null });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes, user, authService, onAuth } = this.props;
    const { anchorEl, currentMenu } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ flexDirection: 'row', backgroundColor: "#08085e" }} >
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
              this.props.history.push("/unsereGeschichte")
            }}>Unsere Geschichte</MenuItem>
            <MenuItem onClick={() => {
              this.handleClose()
              this.props.history.push("/gemeinde")
            }}>Gemeinde Baierbrunn</MenuItem>
            <MenuItem onClick={() => {
              this.handleClose()
              this.props.history.push("/vorstand")
            }}>Vorstand</MenuItem>
            <MenuItem onClick={() => {
              this.handleClose()
              this.props.history.push("/mitgliedsantrag")
            }}>Mitglied werden</MenuItem>
            <MenuItem onClick={() => {
              this.handleClose()
              this.props.history.push("/kontakt")
            }}>Kontakt</MenuItem>
            <MenuItem onClick={() => {
              this.handleClose()
              this.props.history.push("/impressum")
            }}>Impressum</MenuItem>
            {user === null ?
              null
              :
              (<MenuItem onClick={() => {
                this.handleClose()
                this.props.history.push("/datenschutz")
              }}>Datenschutz</MenuItem>)
            }
            {user === null ?
              null
              :
              (<MenuItem onClick={() => {
                this.handleClose()
                this.props.history.push("/satzung")
              }}>Satzung</MenuItem>)
            }

            {user === null ?
              null
              :
              (<MenuItem onClick={() => {
                this.handleClose()
                this.props.history.push("/ehrenordnung")
              }}>Ehrenordnung</MenuItem>)}
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
            aria-owns={currentMenu === 'kalender-menu' ? 'kalender-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick('kalender-menu')}
            className={classes.NavButton}
          >
            Kalender
                </NavButton>
          <Menu
            id="kalender-menu"
            anchorEl={anchorEl}
            open={currentMenu === 'kalender-menu'}
            onClose={this.handleClose}
          >
            {user === null ?
              (<MenuItem onClick={() => {
                this.handleClose()
                this.props.history.push("/kalenderExtern")
              }}>Kursplan</MenuItem>)
              :
              (<MenuItem onClick={() => {
                this.handleClose()
                this.props.history.push("/kalenderIntern")
              }}>Kalender</MenuItem>)
            }
          </Menu>
          <NavButton className={classes.NavButton} onClick={() => { this.props.history.push("/fotogalerie") }}>Fotogalerie</NavButton>
          <NavButton
            aria-owns={currentMenu === 'login-menu' ? 'login-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick('login-menu')}
            className={classes.NavButton}
          >
            Intern
                </NavButton>
          <Popover
            id="simple-popper"
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
                onChange={this.handleChange('username')}
                margin="normal"
                required
              />
              <br></br>
              <TextField
                id="standard-name"
                label="Passwort"
                value={this.state.name}
                onChange={this.handleChange('password')}
                type={this.state.showPassword ? 'text' : 'password'}
                margin="normal"
                required
              />
              <IconButton
                  style={{marginTop:"20px"}}
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              <br></br>
              <Button style={{ paddingTop: "10px", paddingRight: "40px", paddingLeft: "40px", paddingBottom: "10px" }}
                onClick={(e) => {
                  e.preventDefault();

                  authService.login(this.state.username, this.state.password)
                    .then(res => {
                      this.setState({ currentMenu: null })
                      onAuth && onAuth()
                    })
                    .catch(err => {
                      alert(err);
                    })
                }}
              >
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
                input: classes.inputInput
              }}
            />
          </div>
        </AppBar>
      </div>
    );
  }
}

TabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(TabsWrappedLabel));
