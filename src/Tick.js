import React from 'react';
//import ReactDOM from 'react-dom';

export default class Tick extends React.Component {
  render (){
    var date = this.props.date;
    return(
      <div>
        <h1> Time is</h1>
        <h2>{date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}