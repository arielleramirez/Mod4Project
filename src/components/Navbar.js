import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/SignUp';
import {Button} from 'semantic-ui-react'
import faker from 'faker'
import { Dropdown, Image } from 'semantic-ui-react'


class LogOut extends Component {

  handleChange=(e)=>{
    if (e.target.innerText==="Profile") {
      this.props.handleProfile()
    } else if (e.target.innerText === "Main Page") {
      this.props.handleMainPage()
    } else {
      this.props.handleLogOut()
    }
  }


  render() {
    console.log(this.props)
    const trigger = (
      <span>
        <Image avatar src={faker.internet.avatar()} /> {faker.name.findName()}
      </span>
    )
    const options = [
      { key: 'user', text: 'Profile', icon: 'user'},
      { key: 'mainpage', text: 'Main Page', icon: 'home' },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]

    return (
      <div >
    <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} onChange={this.handleChange} />
      </div>
    );
  }

}

export default connect(null, {createUser}) (LogOut);
