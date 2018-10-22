import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import "../index.css"
import {Container} from 'semantic-ui-react'

class RecipeList extends Component {

  state = {
    showMyRecipes: true
  }

  handleMyRecipes = (event) => {
    this.setState({
      showMyRecipes: true
    })
  }

  handleMyCollections = (event) => {
    this.setState({
      showMyRecipes: false
    })
  }

  handleShowDetail = (recipe) => {
    this.props.handleShowDetail(recipe)
    console.log(recipe);
  }

  render(){
    return (
      <React.Fragment>
        <Button className="myRecipeBtn"  onClick={this.handleMyRecipes}>My Recipes</Button>
        <Button className="myFavBtn" onClick={this.handleMyCollections}>My Favorites</Button>
        
        {this.state.showMyRecipes?
          <ul >
            {this.props.userRecipes.map(recipe => <li key={recipe.id} onClick={ () => this.handleShowDetail(recipe)}>{recipe.name}</li>)}
          </ul>

          :

          <ul>
            {this.props.userCollections.map(recipe => <li key={recipe.id} onClick={ () => this.handleShowDetail(recipe)} >{recipe.name}</li>)}
          </ul>


        }
      </React.Fragment>
    );
  }
}

export default RecipeList;
