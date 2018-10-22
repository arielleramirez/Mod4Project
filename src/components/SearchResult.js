import React, { Component } from 'react';
import Result from './Result'

class SearchResult extends Component {

  render() {
    console.log(this.props.searchResult)
    return (
      <div>
        {this.props.searchResult.map((recipe,idx)=>{
          return <Result key={idx} {...recipe} handleFavorite={this.props.handleFavorite} />
        })}
      </div>
    );
  }

}

export default SearchResult;
