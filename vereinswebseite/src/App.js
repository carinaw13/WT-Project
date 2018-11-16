import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello World. Carina 
          </p>
          <p>
        <NavBar />
          </p>
        </header>
      </div>
    );
  }
}

export default App;

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ButtonAppBar);