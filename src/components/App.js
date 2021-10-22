import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {images : []};
  
  onSearchSubmit = async (value) => {
    console.log(value);

    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: value,
      },
      headers: {
        Authorization: "Client-ID 8cyN8rxt4pfN5maP4XFYFK6EyvNMD2x1IE-vx2O8wdc",
      },
    });

    this.setState({images : response.data.results});

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images} />
      </div>
    );
  }
}

export default App;
