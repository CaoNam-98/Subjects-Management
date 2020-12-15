import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PropTypes from "prop-types";

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid container item md={9}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid container item md={3}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.ActionCard}>
          <Fab color="primary" aria-label="edit" size="small">
            <EditIcon />
          </Fab>
          <Fab color="secondary" aria-label="delete" size="small">
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
};

export default withStyles(styles)(TaskItem);
