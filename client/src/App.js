import React, { Component } from 'react';
import './App.css';
import SearchFormComponent from './components/SearchFormComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>CatchFish</h2>
        </div>
        <SearchFormComponent />
      </div>
    );
  }
}

export default App;
