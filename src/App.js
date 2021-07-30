import './App.css';
import React, { Component } from 'react';
import Timer from './Components/Timer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Timer />
      </div>
    );
  }
}