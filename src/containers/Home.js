import React, { Component } from 'react';
import Background from '../img/1.jpg'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const sectionStyle = {
 width: "100%",
 height: "100vh",
 position: "absolute",
 backgroundPosition: "bottom",
 backgroundSize: "cover",
 backgroundImage: `url(${Background})`
};

class Home extends Component {

  render() {

    return (
      <React.Fragment>
        <div style={sectionStyle}>
          <h1>Let's Cook</h1>
          <button> <NavLink to="/login">Log In </NavLink> </button>
          <button> <NavLink to="/signup">Sign Up </NavLink></button>
        </div>
      </React.Fragment>

    );
  }

}

export default Home;
