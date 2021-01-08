import React, { Component } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

class Signin extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signin}>
          <Card>
            <CardContent>
              <form>
                <div>
                  <Typography variant="h6" gutterBottom>
                    Đăng Ký
                  </Typography>
                  <TextField
                    id="email"
                    label="Email"
                    margin="normal"
                    fullWidth // bằng kích thước card
                    className={classes.textField}
                  />
                  <TextField
                    id="password"
                    label="Password"
                    margin="normal"
                    fullWidth
                    type="password"
                    className={classes.textField}
                  />
                  <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    margin="normal"
                    fullWidth
                    type="password"
                    className={classes.textField}
                  />
                  <FormControlLabel
                    control={<Checkbox value="agree" />}
                    label="Tôi đã đọc và đồng ý với các điều khoản." // khi nhấn vào dòng chữ này nó vẫn check được
                    className={classes.paddingLeft}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Đăng Ký
                  </Button>
                  <div>
                    <Link to="/login">
                      <Button>Đã Có Tài Khoản?</Button>
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Signin);
