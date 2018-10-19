import React, { Component } from 'react';

class SearchDetail extends Component {

  handleFavorite = (event) => {
    this.props.handleFavorite(this.props.recipe)
  }

  render() {
    console.log(this.props.recipe);
    const detail = this.props.isClicked?
    <div>
      <img src={this.props.recipe.image} alt="" />
      {this.props.recipe.ingredients.map(ingredient => <li>{ingredient.text}</li>)}
      <button onClick={this.handleFavorite}> Favorite it </button>
    </div>
  :
  null

    return (
      <div><h1>{detail}</h1></div>
    );
  }

}

export default SearchDetail;
