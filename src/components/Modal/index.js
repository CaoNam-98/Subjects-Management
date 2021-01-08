import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import styles from "./styles";
import * as modalActions from "./../../actions/modal";

class CommonModal extends Component {
  render() {
    const { classes, open, modalActionCreators, component, title } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <Icon className={classes.icon} onClick={hideModal}>
              clear
            </Icon>
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

CommonModal.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  component: PropTypes.object,
  title: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
