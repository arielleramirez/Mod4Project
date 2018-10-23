import React, { Component } from 'react';
import Search from '../components/Search'
import SearchResult from '../components/SearchResult'
import RecipeList from '../components/RecipeList'
import SearchDetail from '../components/SearchDetail'
import FormComponent from '../components/FormComponent'
import RecipeDetail from '../components/RecipeDetail'
import {connect} from 'react-redux';
import Navbar from '../components/Navbar'
import {createUser} from '../actions/SignUp';
import {Container} from 'semantic-ui-react'
import {Grid} from 'semantic-ui-react'



class MainPage extends Component {

  state={
    showDetail: false,
    targetRecipe: {},
    searchBar:'',
    searchResult: [],
    userRecipes: [],
    userCollections: [],
    showForm: true
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
    fetch(`https://api.edamam.com/search?q=${this.state.searchBar}&app_id=a4e59699&app_key=24b18ce7a1e475a71220602f373751f4&from=0&to=5`,{
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
      targetRecipe: recipe,
      showForm: false
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

  handleDelete = (recipe) => {
    console.log(recipe);
    let position;
    fetch(`http://localhost:3001/users/2/recipes/${recipe.id}`, {
      method: "DELETE",
      headers:{
       "Access-Control-Allow-Origin": "http://localhost:3002"
     }
    })
    .then(response => response.json())
    .then(console.log)

    if (recipe.user_id === 2) {
      position = this.state.userRecipes.indexOf(recipe)
      this.setState({
        userRecipes: [...this.state.userRecipes.splice(0, position), ...this.state.userRecipes.splice(position + 1)]
      })
    } else {
      position = this.state.userCollections.indexOf(recipe)
      this.setState({
        userCollections: [...this.state.userCollections.splice(0, position), ...this.state.userCollections.splice(position + 1)]
      })
    }
    // .then(collections => collections.find(collection => collection))
    // console.log(recipe);
  }

  handleShowForm = (event) => {
    this.setState({
      showForm: true,
      showDetail: false
    })
  }

  render() {
    console.log(this.state.searchResult);
    return (
      <React.Fragment>
        <Navbar handleLogOut={this.handleLogOut} />
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <SearchResult searchResult={this.state.searchResult} handleFavorite={this.handleFavorite}/>
        <Grid columns={2} padded='horizontally' className="Grid">
          <Grid.Column>
        <RecipeList
          handleShowDetail={this.handleShowDetail}
          userRecipes={this.state.userRecipes}
          userCollections={this.state.userCollections}
          handleDelete={this.handleDelete}
          handleShowForm={this.handleShowForm}
          />
          </Grid.Column>
            {this.state.showDetail?
             <Grid.Column>
               <RecipeDetail recipe={this.state.targetRecipe} />
             </Grid.Column>
               :
               null
             }
             {this.state.showForm?
               <Grid.Column>
                 <FormComponent handleFormSubmit={this.handleFormSubmit} />
               </Grid.Column>
                 :
                 null
               }
        </Grid>

      </React.Fragment>

    );
  }

}

export default connect (state => ({currentUserId: state.currentUserId}),{createUser}) (MainPage);


//

// <FormDetail />
