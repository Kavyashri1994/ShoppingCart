import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(evt) {
    alert("Name is :" + this.state.value );
    evt.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name:
          <input type='text' value={this.state.value}></input>
          <input type='submit' value='Submit' ></input>
        </label>
      </form>
    );
  }
}