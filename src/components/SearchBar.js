import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }; //Initializing state

  onFormSubmit = (event) => {
    event.preventDefault(); //preventing from self-refreshing
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} //go look at state to get current value
              onChange={(e) => this.setState({ term: e.target.value })} //inform state what user typed
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
