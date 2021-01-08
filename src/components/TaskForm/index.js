import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
//import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "./../../actions/modal";
// eslint-disable-next-line import/no-cycle
import * as taskActions from "./../../actions/task";
import { Field, reduxForm } from "redux-form";
import renderTextField from "./../FormHelper/TextField";
import validate from "./validate";
import renderSelectField from "../FormHelper/TextField/Select";

class TaskForm extends Component {
  //handleClose = () => {
  //this.props.onClose();
  //};
  onHandleSubmitForm = (data) => {
    const { taskEditing, taskActionCreators } = this.props;
    const { title, description, status } = data;
    // data là value của form ở trong state.
    //console.log("data :", data); // {name của field: giá trị nhập}
    if (taskEditing && taskEditing.id) {
      const { updateTask } = taskActionCreators;
      updateTask(title, description, status);
    } else {
      const { addTask } = taskActionCreators;
      addTask(title, description);
    }
  };

  //C1: Validation ch từng <Field>
  /*required = (value) => {
    let error = "Vui lòng nhập tiêu đề ";
    if(value && typeof value !== "undefined" && value !== ""){
      error = null;
    }
    return error;
  }

  minLength = (value) => {
    let error = null;
    if(value && value.trim().length < 5){
      error = "Tiêu đề phải lớn hơn 5 ký tự";
    }
    return error;
  } */

  renderStatusSelection() {
    let xhtml = null;
    const { taskEditing, classes } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Grid item md={12}>
          <Field
            id="status"
            label="Trạng thái"
            className={classes.select}
            name="status"
            //validate={[this.required, this.minLength]}
            component={renderSelectField}
          >
            <option value={0}>Ready</option>
            <option value={1}>In Progress</option>
            <option value={2}>Completed</option>
          </Field>
        </Grid>
      );
    }
    return xhtml;
  }

  render() {
    //console.log(this.props); // kiểm tra xem prop của redux form và props của component có những gì ?
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      invalid,
      submitting,
    } = this.props; // handleSubmit là props của redux-form
    const { hideModal } = modalActionCreators;
    //const handleClose = this.props.onClose; // cái này gọi hàm bên ngoài cũng giống như hàm trên
    return (
      <form onSubmit={handleSubmit(this.onHandleSubmitForm)}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            {/* <TextField
              id="standard-multiline-flexible"
              label="Tiêu đề:"
              multiline
              rowsMax={4}
              className={classes.textField}
            /> */}
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              //validate={[this.required, this.minLength]}
              component={renderTextField} // để lấy component phù hợp thì vào example => materialUI => renderSelectField
            />
          </Grid>
          <Grid item md={12}>
            {/* <TextField
              id="standard-textarea"
              label="Mô tả:"
              multiline
              className={classes.textField}
            /> */}
            <Field
              id="description"
              label="Mô tả"
              className={classes.textField}
              multiline
              rowsMax={4}
              margin="normal"
              name="description"
              component={renderTextField}
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={1}>
              <Box ml={1}>
                <Button
                  disabled={invalid || submitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Lưu lại
                </Button>
              </Box>
              <Button variant="contained" onClick={hideModal}>
                Huỷ bỏ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  //onClose: PropTypes.func,
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  taskEditing: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing
        ? state.task.taskEditing.description
        : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null,
    }, // để lấy dữ liệu đổ vào redux-form thì dùng initialValue dựa vào API initialValues và Initialize From State giúp khởi tạo giá trị cho form nó sẽ ditpatch 1 action "@@redux-form/INITIALIZE"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};

const FORM_NAME = "TASK_MANAGEMENT";

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
