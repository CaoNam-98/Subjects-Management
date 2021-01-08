import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { PropTypes } from "prop-types";

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-multiline-flexible"
            multiline
            rowsMax={4}
            onChange={handleChange}
            placeholder="Nhập từ khoá tìm kiếm :"
            className={classes.textField}
          />
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
