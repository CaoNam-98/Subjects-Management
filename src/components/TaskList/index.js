import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import TaskItem from "./../TaskItem";
import PropTypes from "prop-types";

class TaskList extends Component {
  render() {
    const { task, classes, status } = this.props;
    return (
      <Grid md={4} xs={12} item>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {task.map((task, index) => {
            return <TaskItem key={index} task={task} status={status} />;
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.array,
  status: PropTypes.object,
};

export default withStyles(styles)(TaskList);
