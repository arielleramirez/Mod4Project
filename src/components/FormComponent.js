// import React, { Component } from 'react';
// import {Form} from 'semantic-ui-react'
//
// class FormComponent extends Component {
//     state={
//       name: '',
//       image: '',
//       calories: '',
//       cooking_time: '',
//       ingredient1: '',
//       ingredient2: '',
//       ingredient3: '',
//     }
//
//   handleChange=(e)=>{
//     this.setState({[e.target.name]:e.target.value})
//   }
//
//   handleSubmit=(e)=>{
//     this.props.handleFormSubmit(e,this.state)
//   }
//
//   render() {
//     return (
//       <div className="recipe-form">
//         <h1> Create New Recipe </h1>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Field>
//           <label> Recipe Name </label>
//           <input onChange={this.handleChange} type="text" name="name"/>
//           </Form.Field>
//           <br />
//           <label> Image </label>
//           <input onChange={this.handleChange} type="text" name="image"/>
//           <br />
//           <label> Calories </label>
//           <input onChange={this.handleChange} type="text" name="calories"/>
//           <br />
//           <label> Cooking Time </label>
//           <input onChange={this.handleChange} type="text" name="cooking_time"/>
//           <br />
//           <label> Recipe Ingredients </label>
//           <input onChange={this.handleChange} type="text" name="ingredient1"/>
//           <br />
//           <label> Recipe Ingredients </label>
//           <input onChange={this.handleChange} type="text" name="ingredient2"/>
//           <br />
//           <label> Recipe Ingredients </label>
//           <input onChange={this.handleChange} type="text" name="ingredient3"/>
//           <br />
//           <input type="submit" name="submit"/>
//         </Form>
//       </div>
//     );
//   }
//
// }
//
//
// export default FormComponent;

import React, { Component } from 'react';
import {Form,Input,Button} from 'semantic-ui-react'
const Cloud_Url="https://api.cloudinary.com/v1_1/oliviatian/upload"
const Preset="zuk87vgw"

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
    e.preventDefault()
    const file=this.state.image
    const formData=new FormData();
    formData.append('file',file)
    formData.append('upload_preset',Preset)
    fetch(Cloud_Url,{
      method:"POST",
      body:formData
    }).then(res=>res.json())
    .then(data=>this.setState({image:data.secure_url},()=>this.props.handleFormSubmit(e,this.state)))

  }

  handleImageChange=(e)=>{
    this.setState({image:e.target.files[0]})
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
          <label> Recipe Name </label>
          <input onChange={this.handleChange} type="text" name="name"/>
            </Form.Field>

          <input type="file" onChange={this.handleImageChange} className="inputfile" id="embedpollfileinput" />
           <label for="embedpollfileinput" className="ui huge green floated button">
             <i className="ui upload icon"></i>
             Upload image
           </label>

          <Form.Field>
          <label> Calories </label>
          <input onChange={this.handleChange} type="text" name="calories" />
          </Form.Field>
          <Form.Field>
          <label> Cooking Time </label>
          <input onChange={this.handleChange} type="text" name="cooking_time"/>
          </Form.Field>
          <Form.Field>
          <label> Recipe Ingredients </label>
          <input onChange={this.handleChange} type="text" name="ingredient1"/>
          </Form.Field>
          <Form.Field>
          <label> Recipe Ingredients </label>
          <input onChange={this.handleChange} type="text" name="ingredient2"/>
          </Form.Field>
          <Form.Field>
          <label> Recipe Ingredients </label>
          <input onChange={this.handleChange} type="text" name="ingredient3"/>
          </Form.Field>
          <Button content='SUBMIT' secondary />
        </Form>
      </div>
    );
  }

}


export default FormComponent;
