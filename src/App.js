import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsBox from "./components/NewsBox";

class App extends Component {
  render() {
    return (
      <div>
        <NewsBox/>
      </div>
    );
  }
}

export default App;
