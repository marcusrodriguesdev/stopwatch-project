import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
    };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState((prevState, props) => ({
      currentTime: prevState.currentTime + 1,
    }));
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.click(), 1000
    );
  }

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <h1>{ currentTime }</h1>
      </div>
    );
  }
}
