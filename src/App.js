import React from 'react';
import './App.css';
import Header from './Components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startChronometer: false,
    };
  }

  render() {
    return (
      <>
        <Header />
        
      </>
    );
  }
}
