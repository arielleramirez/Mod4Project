// import React from 'react';
// import PropTypes from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import LockIcon from '@material-ui/icons/LockOutlined';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import withStyles from '@material-ui/core/styles/withStyles';
// import {connect} from 'react-redux';
// import {createUser} from '../actions/SignUp';
//
//
// const styles = theme => ({
//   layout: {
//     width: 'auto',
//     display: 'block', // Fix IE11 issue.
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//       width: 400,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing.unit * 8,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
//   },
//   avatar: {
//     margin: theme.spacing.unit,
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE11 issue.
//     marginTop: theme.spacing.unit,
//   },
//   submit: {
//     marginTop: theme.spacing.unit * 3,
//   },
// });
//
// class SignUp extends React.Component {
//   state={
//     username: '',
//     password: '',
//     email: '',
//   }
//
//   handleOnChange =(event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//
//   handleSubmit =(event) => {
//    event.preventDefault()
//
//    fetch('http://localhost:3001/users',{
//      method: 'POST',
//      headers: {
//        'Accept': 'Application/json',
//        'content-type': 'Application/json'
//      }, body: JSON.stringify({
//        username: this.state.username,
//        password: this.state.password,
//        email: this.state.email
//      })
//    }).then(response=> response.json())
//    .then(newUser => this.props.createUser(newUser) )
//    .then(() => this.props.history.push("/mainpage"))
//   }
//
//  render(){
//    console.log(this.props);
//   const {classes} = this.props
//
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign Up
//           </Typography>
//           <form onSubmit={this.handleSubmit} className={classes.form}>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="username">User Name</InputLabel>
//               <Input onChange={this.handleOnChange} id="username" name="username" autoComplete="username" autoFocus />
//             </FormControl>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="email">Email Address</InputLabel>
//               <Input onChange={this.handleOnChange} id="email" name="email" autoComplete="email" autoFocus />
//             </FormControl>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="password">Password</InputLabel>
//               <Input onChange={this.handleOnChange}
//                 name="password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </FormControl>
//             <Button
//
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign Up
//             </Button>
//           </form>
//         </Paper>
//       </main>
//     </React.Fragment>
//   );
// }
// }
//
// SignUp.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default connect(null, {createUser}) (withStyles(styles)(SignUp));

//--------------------------------------------------------------------------------

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
// import withStyles from "@material-ui/core/styles/withStyles";
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

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  handleClick = () => this.setState({ active: !this.state.active });

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "content-type": "Application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
    })
      .then(response => response.json())
      .then(newUser => this.props.createUser(newUser))
      .then(() => this.props.history.push("/mainpage"));
  };

  render() {
    console.log(this.props);
    const { classes } = this.props;
    const { active } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className="background">
          <form onSubmit={this.handleSubmit} className="login">
            <h1 className="log">SignUp </h1>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                htmlFor="username"
                style={{
                  color: "white"
                }}
              >
                Username
              </InputLabel>
              <Input
                onChange={this.handleOnChange}
                id="username"
                name="username"
                autoComplete="username"
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
                htmlFor="email"
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
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
                SignUp
              </NavLink>
            </Button>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { createUser }
)(SignUp);
