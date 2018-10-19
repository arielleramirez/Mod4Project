import React, { Component } from 'react';
import SearchDetail from "./SearchDetail"

class Result extends Component {
  state={
    isClicked: false
  }
  handleClick=(event)=>{
    this.setState({
      isClicked: !this.state.isClicked
    })
  }
 render(){
    return (
      <React.Fragment>
      <div onClick={this.handleClick}> {this.props.recipe.label} </div>
      <SearchDetail isClicked={this.state.isClicked}  recipe={this.props.recipe}/>
      </React.Fragment>
    )
  }
}

export default Result;
