import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon"; //
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
// eslint-disable-next-line import/no-cycle
import { STATUSES } from "./../../constants";
import TaskList from "./../../components/TaskList";
// eslint-disable-next-line import/no-cycle
import TaskForm from "./../../components/TaskForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// eslint-disable-next-line import/no-cycle
import * as taskActions from "./../../actions/task";
import * as modalActions from "./../../actions/modal";
import SearchBox from "./../../components/SearchBox";
import Box from "@material-ui/core/Box";

class Taskboard extends Component {
  /*state = {
    open: false,
  };*/
  onTaskEditing = (task) => {
    const { taskActionCreators, modalActionCreators } = this.props;
    const { taskEditing } = taskActionCreators;
    taskEditing(task);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Cập Nhật Công Việc");
    changeModalContent(<TaskForm />);
  };

  onDeleteTask = (task) => {
    const { taskActionCreators } = this.props;
    const { deleteTask } = taskActionCreators;
    deleteTask(task.id);
  };

  showModalDeleteTask = (task) => {
    const { modalActionCreators, classes } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
      hideModal,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xoá Công Việc");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn có chắc chắn muốn xoá{" "}
          <span className={classes.modalConfirmTextBold}>{task.title}</span>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
              {" "}
              {/* có thể dùng onClick là 1 action */}
              Huỷ Bỏ
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.onDeleteTask(task)}
            >
              Đồng ý
            </Button>
          </Box>
        </Box>
      </div>,
    );
  };

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          var taskListFilter = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList
              key={index}
              task={taskListFilter}
              status={status}
              onClickEditing={
                this.onTaskEditing
              } /* Gọi đến 1 hàm thì dùng this.func */
              onClickDelete={this.showModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  /*handleClose = () => {
    this.setState({
      open: false,
    });
  };*/

  openDialog = () => {
    const { modalActionCreators, taskActionCreators } = this.props;
    const { taskEditing } = taskActionCreators;
    taskEditing(null);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Thêm Mới Công Việc");
    changeModalContent(<TaskForm />);
  };

  componentDidMount() {
    //sẽ được gọi sau lần render đầu tiên
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  /*loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }; */

  /*renderForm() {
    var { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }*/

  handleFilter = (event) => {
    const { value } = event.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  renderSearchBox() {
    let html = null;
    html = <SearchBox handleChange={this.handleFilter} />;
    return html;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBroad}>
        {/*<Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.loadData}
          style={{
            marginRight: "20px",
          }}
        >
          Load Data
        </Button> */}

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openDialog}
        >
          <Icon>add</Icon>Add New Task
        </Button>
        <Box mt={2} />
        {this.renderSearchBox()}
        {this.renderBoard()}
        {/*{this.renderForm()} */}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    taskEditing: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch), // taskActions sẽ chứa rất nhiều export const
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard),
);
