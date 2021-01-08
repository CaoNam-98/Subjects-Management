import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid} // touched là true do mình đã focus và blur ra ngoài rồi, invalid là true do error đã có giá trị
    helperText={touched && error} // helperText hiển thị tiêu đề và lỗi error lên giao diện.
    {...input} // id, className, margin,... <=> id: {id}, className={className}
    {...custom}
  />
);

renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderTextField;
