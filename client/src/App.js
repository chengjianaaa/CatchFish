import React, { Component } from 'react';
import './App.css';
import SearchFormComponent from './components/SearchFormComponent';
import ResultsPageComponent from './components/ResultsPageComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: false,
    };
  }

  renderResult() {
    this.setState({results: !this.state.results});
  }

  render() {
    let pageToRender = this.state.results ? <ResultsPageComponent renderResult={this.renderResult.bind(this)} /> : <SearchFormComponent renderResult={this.renderResult.bind(this)} />

    return (
      <div className="App">
        <div className="App-header">
          <h1>CatchFish</h1>
          <h3>Are you being catfished?</h3>
        </div>
        {pageToRender}
      </div>
    );
  }
}

export default App;
