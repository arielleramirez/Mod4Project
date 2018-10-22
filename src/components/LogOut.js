import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/SignUp';
import {Button} from 'semantic-ui-react'


class LogOut extends Component {



  render() {
    console.log(this.props)
    return (
      <div className="logoutBtn"><Button onClick={this.props.handleLogOut}>LogOut</Button></div>
    );
  }

}

export default connect(null, {createUser}) (LogOut);
