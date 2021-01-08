import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  withStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./styles";

const renderFromHelper = ({ touched, error }) => {
  // nó lấy theo dạng object (renderFormHeloper cũng là 1 component và nó nhận vào 2 props là touched, error)
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

renderFromHelper.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.bool,
};

const renderSelectField = ({
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: "color-native-simple",
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderSelectField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.array,
};

export default withStyles(styles)(renderSelectField);
