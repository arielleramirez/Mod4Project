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

  handleFavorite = (event) => {
    console.log(this.props.recipe)
    fetch(`http://localhost:3001/users/1/recipes`, {
      method:"POST",
      headers:{
        "Accept":"Application/json",
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({
        user_id: 1,//fix user id to 1,recipes from api
        name: this.props.recipe.label,
        image: this.props.recipe.image,
        calories: Number(this.props.recipe.calories),
        cooking_time: Number(this.props.recipe.cooking_time),
        ingredients: [this.props.recipe.ingredient1, this.props.recipe.ingredient2, this.props.recipe.ingredient3].filter(ingredient => ingredient !== "")
      })
    }).then(res=>res.json())
    .then(newRecipe=> {
      fetch('http://localhost:3001/users/2/collections',{
      method:"POST",
      headers:{
        "Accept":"Application/json",
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({
        collector_id: 2,
        recipe_id: newRecipe.id
    })
  }).then(response=> response.json())
  .then(console.log)
})
}
 render(){
    return (
      <React.Fragment>
      <div onClick={this.handleClick}> {this.props.recipe.label} </div>
      <SearchDetail isClicked={this.state.isClicked}  recipe={this.props.recipe} handleFavorite={this.handleFavorite}/>
      </React.Fragment>
    )
  }
}

export default Result;
