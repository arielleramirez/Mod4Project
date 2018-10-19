import React, { Component } from 'react';
import Search from '../components/Search'
import SearchResult from '../components/SearchResult'
import RecipeList from '../components/RecipeList'
import SearchDetail from '../components/SearchDetail'
import Form from '../components/Form'


class MainPage extends Component {

  state={
    searchBar:'',
    searchResult: [],
    userRecipes: [],
    userCollections: [],
    currentUserId:1
  }

  componentDidMount(){
    fetch(`http://localhost:3002/users/${this.state.currentUserId}/recipes`)
    .then(r=>r.json())
    .then((json)=console.log(json,'recipes'))
    fetch(`http://localhost:3002/users/${this.state.currentUserId}/collections`)
    .then(r=>r.json())
    .then((json)=console.log(json,'collections'))
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

  handleFormSubmit=(e,name,ingredients)=>{
    e.preventDefault()
     fetch('http://localhost:3002/recipes',{
       method:"POST",
       headers:{
         "Accept":"Application/json",
         "Content-Type":"Application/json"
       },body:JSON.stringify({name:name,user_id:1})
     }).then(res=>res.json())
     .then(console.log)
  }

  render() {
    console.log(this.state.searchResult);
    return (
      <React.Fragment>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <SearchResult searchResult={this.state.searchResult} />
        <RecipeList userRecipes={this.state.userRecipes} userCollections={this.state.userCollections}/>
        <SearchDetail handleFavorite={this.handleFavorite}/>
        <Form handleFormSubmit={this.handleFormSubmit} />
      </React.Fragment>

    );
  }

}

export default MainPage;


//

// <FormDetail />
