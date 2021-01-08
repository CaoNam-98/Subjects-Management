import React, { Component } from "react";
import { Button, TextField, Typography, withStyles } from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div>
                  <Typography variant="h6" gutterBottom>
                    Đăng Nhập
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
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Đăng Nhập
                  </Button>
                  <div>
                    <Link to="/signin">
                      <Button>Tạo tài khoản</Button>
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

Login.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Login);
