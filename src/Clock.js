import React from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  render() {
    return (
      <div>
        <h1> current time is</h1>
        <h2> {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}
