import React, { Component } from 'react';
import Background from '../img/3.jpg'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import "../index.css"

const sectionStyle = {
 width: "100%",
 height: "100vh",
 position: "absolute",
 backgroundPosition: "center",
 backgroundSize: "cover",
 backgroundImage: `url(${Background})`
};

class Home extends Component {

  render() {

    return (
      <React.Fragment>
        <div style={sectionStyle}>
          <h1 className="title" >Let's Cook</h1>
          <Button className="logInButton" color='orange' > <NavLink to="/login" style={{color: "white", textDecoration: "none"}}>Log In </NavLink> </Button>
          <Button className="signUpButton" color='orange' > <NavLink to="/signup" style={{color: "white", textDecoration: "none"}}>Sign Up </NavLink></Button>
        </div>
      </React.Fragment>

    );
  }

}

export default Home;
