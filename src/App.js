import React, { Component } from 'react';
import './App.css';
import { CardsList } from "./components/cards-list/cards-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }));
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearch={this.handleSearch} />
        <CardsList monsters={filteredMonsters}/>   
      </div>
    )
  }
}

export default App;
