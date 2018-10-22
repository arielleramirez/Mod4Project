import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/SignUp';


class LogOut extends Component {



  render() {
    console.log(this.props)
    return (
      <div><button onClick={this.props.handleLogOut}>LogOut</button></div>
    );
  }

}

export default connect(null, {createUser}) (LogOut);
