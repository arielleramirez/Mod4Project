import React, { Component } from 'react';

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
        <button onClick={this.handleMyRecipes}>My Recipes</button>
        <button onClick={this.handleMyCollections}>My Collections</button>
        {this.state.showMyRecipes?
          <ul>
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
