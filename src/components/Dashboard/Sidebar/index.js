import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import { ADMIN_ROUTES } from "./../../../constants";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  toggleDrawer = (value) => {
    const { onToggleSidebar } = this.props;
    onToggleSidebar(value);
  };

  renderList() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item) => {
            return (
              <NavLink
                to={item.path}
                exact={item.exact}
                key={item.path}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
              >
                <ListItem className={classes.menuItem} button>
                  {" "}
                  {/* button để nó hover vào như 1 cái link*/}
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { showSidebar, classes } = this.props;
    return (
      <Drawer
        anchor="top"
        open={showSidebar}
        onClose={() =>
          this.toggleDrawer(false)
        } /*just work when sidebar is closed.But not use icon in header*/
        classes={{ paper: classes.drawerPaper }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};

export default withStyles(styles)(Sidebar);
