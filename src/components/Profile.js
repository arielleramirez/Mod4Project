import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'
import RecipeList from './RecipeList'
import FormComponent from './FormComponent'
import RecipeDetail from './RecipeDetail'
import Navbar from './Navbar'


class Profile extends Component {


    state={
      showDetail: false,
      targetRecipe: {},
      searchBar:'',
      searchResult: [],
      userRecipes: [],
      userCollections: [],
      showForm: true
    }


    componentDidMount(){
      fetch(`http://localhost:3001/users/2/recipes`)
      .then(r=>r.json())
      .then(userRecipes => this.setState({userRecipes}))

      fetch(`http://localhost:3001/users/2/collections`)
      .then(r=>r.json())
      .then(userCollections => this.setState({userCollections}))
    }




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
       .then(console.log)

       e.target.reset()
    }


    handleShowDetail = (recipe) => {
      this.setState({
        showDetail: true,
        targetRecipe: recipe,
        showForm: false
      })
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

    handleMainPage =() => {
      this.props.history.push("/mainpage")
    }

    handleLogOut =(event) => {
      this.props.createUser(null)
      this.props.history.push("/")
      console.log(this.props.currentUserId)
    }

    handleProfile=() => {
      this.props.history.push("/profile")
    }


  render() {
    console.log(this.state.props)
    return (
      <div>
        <Navbar handleLogOut={this.handleLogOut} handleProfile={this.handleProfile} handleMainPage={this.handleMainPage}/>
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
    </div>
    );
  }

}

export default Profile;
