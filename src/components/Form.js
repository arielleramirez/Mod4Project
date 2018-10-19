import React, { Component } from 'react';

class  Form extends Component {
    state={
      name:'',
      ingredients:''
    }

  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit=(e)=>{
    this.props.handleFormSubmit(e,this.state.name,this.state.ingredients)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Recipe Name </label>
          <input onChange={this.handleChange} type="text" name="name"/>
          <label> Recipe Ingredients </label>
          <input onChange={this.handleChange} type="text" name="ingredients"/>
          <input type="submit" name="submit"/>
        </form>
      </div>
    );
  }

}


export default Form;
