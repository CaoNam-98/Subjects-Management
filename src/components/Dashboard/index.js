import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as uiActions from "./../../actions/ui";
import cn from "classnames";

class Dashboard extends Component {
  onToggleSidebar = (value) => {
    const { uiActionCreators } = this.props;
    const { hideSidebar, showSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };

  render() {
    const { children, classes, name, showSidebar } = this.props;
    return (
      <div className={classes.Dashboard}>
        <Header
          name={name}
          showSidebar={showSidebar}
          onToggleSidebar={this.onToggleSidebar}
        />
        <div className={classes.wrapper}>
          <Sidebar
            showSidebar={showSidebar}
            onToggleSidebar={this.onToggleSidebar}
          />
          <div
            className={cn(classes.wrapperContent, {
              [classes.shiftLeft]: showSidebar === false, // Nếu showSidebar === false thì add thêm class shiftLeft. để sử dụng nhiều classes trong 1 element thì npm install classnames --save.
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    showSidebar: state.ui.showSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Dashboard);
