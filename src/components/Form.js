import React, { Component } from 'react';

class Form extends Component {
    state={
      name: '',
      image: '',
      calories: '',
      cooking_time: '',
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
    }

  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit=(e)=>{
    this.props.handleFormSubmit(e,this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Recipe Name </label>
          <input onChange={this.handleChange} type="text" name="name"/>
          <br />
          <label> Image </label>
          <input onChange={this.handleChange} type="text" name="image"/>
          <br />
          <label> Calories </label>
          <input onChange={this.handleChange} type="text" name="calories"/>
          <br />
          <label> Cooking Time </label>
          <input onChange={this.handleChange} type="text" name="cooking_time"/>
          <br />
          <label> Recipe Ingredients </label>
          <input onChange={this.handleChange} type="text" name="ingredient1"/>
          <br />
          <label> Recipe Ingredients </label>
          <input onChange={this.handleChange} type="text" name="ingredient2"/>
          <br />
          <label> Recipe Ingredients </label>
          <input onChange={this.handleChange} type="text" name="ingredient3"/>
          <br />
          <input type="submit" name="submit"/>
        </form>
      </div>
    );
  }

}


export default Form;
