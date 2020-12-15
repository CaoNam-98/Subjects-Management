import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import PropTypes from "prop-types";

class TaskForm extends Component {
  //handleClose = () => {
  //this.props.onClose();
  //}

  render() {
    const { open } = this.props;
    const handleClose = this.props.onClose; // cái này gọi hàm bên ngoài cũng giống như hàm trên
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Thêm Mới Công Việc
        </DialogTitle>
        <DialogContent>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
          />
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TaskForm.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default withStyles(styles)(TaskForm);
