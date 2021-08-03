import React from 'react';
import './App.css';
import Cronometer from './Components/Cronometer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startChronometer: false,
    };
  }

  render() {
    return (
      <main>
        <h1>Cronômetro</h1>
        <section>
          <Cronometer />
        </section>
      </main>
    );
  }
}
