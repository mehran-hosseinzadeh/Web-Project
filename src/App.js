import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsBox from "./components/NewsBox";
import MatchBox from "./components/MatchBox";

class App extends Component {
  render() {
    return (
      <div>
        <NewsBox/>
        {/*<MatchBox/>*/}
      </div>
    );
  }
}

export default App;
