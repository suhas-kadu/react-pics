import React from "react";

class Searchbar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: "" };

  // binding this with class instance
  // 1st way using constructor
  // constructor() {
  //   super();
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // 2nd way using arrow function
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    // console.log(this.state.term);
  }

  render() {
    return (
      <div>
        <div className="ui" >
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label style={{fontSize: "1.25rem"}}>Image Search</label>
              <input
                type="text"
                placeholder="search"
                value={this.state.term}
                onChange={(e) => {
                  this.setState({ term: e.target.value });
                }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
