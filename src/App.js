import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import Header from './containers/Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;

