import React, { Component } from 'react';

class Search extends Component {
  handleChange=(event) => {
    this.props.handleChange(event.target.value)
  }

  handleSubmit=(event) => {

    this.props.handleSubmit(event)
  }

  render() {
    // console.log(event)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}type="text" placeholder="Search.."></input>
          <select>
           <option value="Advance Search">Advance Search</option>
           <option value="Name">Name</option>
           <option value="Calories">Calories</option>
           <option value="Time">Time</option>
          </select>
           <input type="submit"value="Submit"/>
        </form>
      </div>
    );
  }

}

export default Search;
