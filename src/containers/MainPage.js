import React, { Component } from 'react';
import Search from '../components/Search'
import SearchResult from '../components/SearchResult'
import RecipeList from '../components/RecipeList'
import SearchDetail from '../components/SearchDetail'
import Form from '../components/Form'
import RecipeDetail from '../components/RecipeDetail'
import {connect} from 'react-redux';
import LogOut from '../components/LogOut'
import {createUser} from '../actions/SignUp';


class MainPage extends Component {

  state={
    showDetail: false,
    targetRecipe: {},
    searchBar:'',
    searchResult: [],
    userRecipes: [],
    userCollections: []
  }

  // ${this.props.currentUserId}

  componentDidMount(){
    fetch(`http://localhost:3001/users/2/recipes`)
    .then(r=>r.json())
    .then(userRecipes => this.setState({userRecipes}))

    fetch(`http://localhost:3001/users/2/collections`)
    .then(r=>r.json())
    .then(userCollections => this.setState({userCollections}))
  }


  handleChange=(input) => {
    this.setState({
      searchBar:input
    })
  }

  handleSubmit=(event) => {
    event.preventDefault()
    fetch(`https://api.edamam.com/search?q=${this.state.searchBar}&app_id=a4e59699&app_key=24b18ce7a1e475a71220602f373751f4&from=0&to=30`,{
      headers:{
       "Access-Control-Allow-Origin":"http://localhost:3001"
     }
    })
    .then(response=>response.json())
    .then(recipeData =>{ this.setState({
      searchResult: recipeData.hits
    })
    })
  }

  // handleFavorite = (recipe) => {
  //
  // }

  handleFormSubmit=(e, recipeInfo)=>{
    console.log(e);
    console.log(recipeInfo);
    e.preventDefault()
     fetch(`http://localhost:3001/users/2/recipes`, {
       method:"POST",
       headers:{
         "Accept":"Application/json",
         "Content-Type":"Application/json"
       },
       body:JSON.stringify({
         user_id: 2,
         name: recipeInfo.name,
         image: recipeInfo.image,
         calories: Number(recipeInfo.calories),
         cooking_time: Number(recipeInfo.cooking_time),
         ingredients: [recipeInfo.ingredient1, recipeInfo.ingredient2, recipeInfo.ingredient3].filter(ingredient => ingredient !== "")
       })
     }).then(res=>res.json())
     .then(recipe=>this.setState(prev=>({userRecipes:[...prev.userRecipes,recipe]})))

     e.target.reset()
  }

  handleShowDetail = (recipe) => {
    this.setState({
      showDetail: true,
      targetRecipe: recipe
    })
  }

  handleLogOut =(event) => {
    this.props.createUser(null)
    this.props.history.push("/")
    console.log(this.props.currentUserId)
  }

  handleFavorite=(recipe)=>{
     this.setState(prev=>({userCollections:[...prev.userCollections,recipe]}))
  }



  render() {
    console.log(this.state.searchResult);
    return (
      <React.Fragment>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <LogOut handleLogOut={this.handleLogOut} />
        <SearchResult searchResult={this.state.searchResult} handleFavorite={this.handleFavorite}/>
        <RecipeList handleShowDetail={this.handleShowDetail} userRecipes={this.state.userRecipes} userCollections={this.state.userCollections}/>
        <Form handleFormSubmit={this.handleFormSubmit} />
        {this.state.showDetail?
          <RecipeDetail recipe={this.state.targetRecipe} />
          :
          null
        }

      </React.Fragment>

    );
  }

}

export default connect (state => ({currentUserId: state.currentUserId}),{createUser}) (MainPage);


//

// <FormDetail />
