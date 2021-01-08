import React, { Component } from "react";
//import Button from '@material-ui/core/Button';
import styles from "./styles";
import { withStyles } from "@material-ui/core";
//import Taskboard from "./../Taskboard/index";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./../../commons/Theme"; // mặc định nó vào file index;
import { Provider } from "react-redux";
import configureStore from "./../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GloabalLoading from "./../../components/GlobalLoading";
import Modal from "../../components/Modal";
import { BrowserRouter, Switch } from "react-router-dom";
import { ADMIN_ROUTES, ROUTES } from "./../../constants";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import CssBaseline from "@material-ui/core/CssBaseline";
import DefaultLayoutRoute from "../../commons/Layout/DefaultLayoutRoute";

const store = configureStore();

class App extends Component {
  renderAdminRouter() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          name={route.name}
          exact={route.exact}
          component={route.component}
        />
      );
    });
    return xhtml;
  }

  renderDefaultRouter() {
    let xhtml = null;
    xhtml = ROUTES.map((route) => {
      return (
        <DefaultLayoutRoute
          key={route.path}
          path={route.path}
          name={route.name}
          exact={route.exact}
          component={route.component}
        />
      );
    });
    return xhtml;
  }

  render() {
    //const {classes} = this.props;
    //console.log(this.props);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <GloabalLoading />
            <Modal />
            <Switch>
              {this.renderAdminRouter()}
              {this.renderDefaultRouter()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
