import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon"; //
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "./../../constants";
import TaskList from "./../../components/TaskList";
import TaskForm from "./../../components/TaskForm";
import PropTypes from "prop-types";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read Material-ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play Game LoL",
    description: "with my friend",
    status: 1,
  },
  {
    id: 3,
    title: "Learn English - Toeic 700",
    description: "Cố lên",
    status: 2,
  },
];

class Taskboard extends Component {
  state = {
    open: false,
  };

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          var taskListFilter = listTask.filter(
            (task) => task.status === status.value,
          );
          return <TaskList key={index} task={taskListFilter} status={status} />;
        })}
      </Grid>
    );
    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openDialog = () => {
    this.setState({
      open: true,
    });
  };

  renderForm() {
    var { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBroad}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openDialog}
        >
          <Icon>add</Icon>Add New Task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Taskboard);
