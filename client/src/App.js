import React, { Component } from 'react';
import './App.css';
import SearchFormComponent from './components/SearchFormComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <h1>CatchFish</h1>
          <h2>Are you being catfished?</h2>
        </div>*/}
        <SearchFormComponent />
      </div>
    );
  }
}

export default App;
