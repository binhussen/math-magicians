/** @format */

import { Component } from 'react';
import './App.css';
import Calculator from './components/Calulator';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
