import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Search.."></input>
          <select>
           <option value="volvo">Volvo</option>
           <option value="saab">Saab</option>
           <option value="mercedes">Mercedes</option>
           <option value="audi">Audi</option>
          </select>
      </div>
    );
  }

}

export default Search;
