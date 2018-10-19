import React, { Component } from 'react';

class RecipeList extends Component {

  render() {
    return (
      <React.Fragment>
        My Recipes
        <div>

        </div>
        My Collections
        <div>

        </div>
      </React.Fragment>
    );
  }

}

export default RecipeList;

  // {this.props.userRecipes.map(recipe => recipe)}
  // {this.props.userCollections.map(recipe => recipe)}
