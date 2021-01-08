import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import loadingIcon from "./../../assets/images/loading.gif";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
//import * as uiActions from "./../../actions/ui";

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    var html = null;
    if (showLoading) {
      html = (
        <div className={classes.globalLoading}>
          <img src={loadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return html;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
