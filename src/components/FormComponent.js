import React, { Component } from 'react';
import {Form} from 'semantic-ui-react'

class FormComponent extends Component {
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
      <div className="recipe-form">
        <h1> Create New Recipe </h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
          <label> Recipe Name </label>
          <input onChange={this.handleChange} type="text" name="name"/>
          </Form.Field>
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
        </Form>
      </div>
    );
  }

}


export default FormComponent;
