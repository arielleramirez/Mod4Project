import React, { Component } from 'react';
import Search from '../components/Search'
class MainPage extends Component {

  render() {
    return (
      <React.Fragment>
        <Search />
        <SearchResult />
        <RecipeList />


      </React.Fragment>

    );
  }

}

export default MainPage;


//

// <FormDetail />
