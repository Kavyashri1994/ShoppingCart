import React from 'react';
import './index.css';

export default class WarningBanner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
  render() {
    return(
      <div>
        <WarningTag warn={this.state.showWarning}/>
        <button onClick={this.handleChange}>
          {this.state.showWarning ? 'Hide':'Show'}
        </button>
      </div>
    );
  }
}

function WarningTag(props) {
  if(!props.warn) {
    return null;
  }
  return (
    <div class='warning'>
      warning!
    </div>
  );
}