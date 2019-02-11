import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
import "bootstrap";
// require("bootstrap");

import "./login.css";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail:"",
      password: "",
      items: [],
      sName: "",
      sPassword: "",
      sMail: ""
    }
  }

  onClickLogin() {
    let {mail, password} = this.state,
     bodyOfData;
     if(mail && password) {
       if(password.length < 8) {
         alert("Enter Minimum Password length 8");
         return;
       }
      bodyOfData = {
        "emailId": mail
      }
      this.props.onClickLogin(bodyOfData)

     } else {
       alert("Please Enter the Email and Password")
     }
  }

  render() {
    let {mail, password} = this.state;
    return(
      <div className={"loginForm"}>
          <h2 className={"header"}>Login App</h2>
        <form className={"form"}>
          <div className="form-group row ml-2 mr-2">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="staticEmail"
                value={mail}
                placeholder="Email"
                onChange={(e)=>{this.setState({mail: e.target.value})}}/>
            </div>
          </div>
          <div className="form-group row ml-2 mr-2">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                minLength={8}
                id="inputPassword"
                placeholder="Password"
                value={password}
                onChange={(e)=>{this.setState({password: e.target.value})}}/>
            </div>
          </div>
          <button type="button" className={"button"} onClick={this.onClickLogin.bind(this)}>Login </button>
        </form>
      </div>
    )
  }
}

export default Project;