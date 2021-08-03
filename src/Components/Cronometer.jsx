import React, { Component } from 'react';

export default class Cronometer extends Component {
  render() {
    const { seconds, minutes, hour } = this.props;
    return (
      <section>
        <input
          type="text"
          placeholder="hh"
          maxLength="2"
          className="format-hour"
        />
        <input
          type="text"
          placeholder="mm"
          maxLength="2"
          className="format-hour"
        />
        <input
          type="text"
          placeholder="ss"
          maxLength="2"
          className="format-hour"
          value={ seconds }
        />
      </section>
    );
  }
}