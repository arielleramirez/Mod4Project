import React, { Component } from "react";
import PropTypes from "prop-types";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions/SignUp";

// const styles = theme => ({
//   layout: {
//     width: "auto",
//     display: "block", // Fix IE11 issue.
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//       width: 400,
//       marginLeft: "auto",
//       marginRight: "auto"
//     }
//   },
//   paper: {
//     marginTop: theme.spacing.unit * 8,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
//       .spacing.unit * 3}px`
//   },
//   avatar: {
//     margin: theme.spacing.unit,
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE11 issue.
//     marginTop: theme.spacing.unit
//   },
//   submit: {
//     marginTop: theme.spacing.unit * 3
//   }
// });

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleClick = () => this.setState({ active: !this.state.active });

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:3001/users")
      .then(response => response.json())
      .then(allUsers => {
        const user = allUsers.find(user => {
          return (
            user.email === this.state.email &&
            user.password === this.state.password
          );
        });
        this.props.createUser(user);
      })
      .then(() => this.props.history.push("/mainpage"));
  };

  render() {
    const { classes } = this.props;
    const { active } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className="background">
          <form className="login" onSubmit={this.handleSubmit}>
            <h1 className="log">Login </h1>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                htmlFor="email"
                style={{
                  color: "white"
                }}
              >
                Email Address
              </InputLabel>
              <Input
                onChange={this.handleOnChange}
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                className="color"
                style={{
                  color: "white"
                }}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                style={{
                  color: "white"
                }}
                htmlFor="password"
              >
                Password
              </InputLabel>
              <Input
                onChange={this.handleOnChange}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                className="color"
                style={{
                  color: "white"
                }}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="white" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="submit"
              active={active}
              onClick={this.handleClick}
              style={{
                paddingLeft: 100,
                paddingRight: 100,
                backgroundColor: active ? "#e55b00" : "#16203d"
              }}
            >
              <NavLink
                style={{
                  color: "white"
                }}
                to="/mainpage"
              >
                Log In
              </NavLink>
            </Button>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default Login;
export default connect(null, {createUser}) (Login);
