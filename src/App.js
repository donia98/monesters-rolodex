import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { CardList } from "./components/Card-list/Card-list.component";
import { SearchBox } from "./components/Search box/Search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monesters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monesters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monesters, searchField } = this.state;
    const filteredMonesters = monesters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Mosteres Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monesters={filteredMonesters} />
      </div>
    );
  }
}

export default App;
