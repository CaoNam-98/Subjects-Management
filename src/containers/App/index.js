import React, { Component } from "react";
//import Button from '@material-ui/core/Button';
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Taskboard from "./../Taskboard/index";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./../commons/Theme"; // mặc định nó vào file index;

class App extends Component {
  render() {
    //const {classes} = this.props;
    //console.log(this.props);
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
