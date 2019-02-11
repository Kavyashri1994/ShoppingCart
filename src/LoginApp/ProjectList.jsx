import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./login.css";
import {  Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from "jquery";
import "bootstrap";
import Dialog from "./Dialog.jsx";

const axios = require('axios');

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      show: false,
      filterVal: ""
    }
  }

  componentDidMount() {
   axios.get('https://mk-api.herokuapp.com/resume/project/all')
  .then((res) => {
      this.setState({items: res.data})
    })
  }

  onClickAddProject() {
    this.setState({show: !this.state.show})
  }
  onChangeDropdown(e) {
    let {items} = this.state;
    console.log(e.target.value);
      this.setState({filterVal: e.target.value?e.target.value: ""})
  }

  compareData(data, type) {
    var list = [];
    if(type == "DESC") {
    list = data.sort(function(a, b) {
					return a.description.localeCompare(b.description);
    });
  } else {
    list = data.sort(function(a, b) {
					return b.description.localeCompare(a.description);
    });
  }

    return list;
  }

  render() {
    let {items, show, filterVal} = this.state;
      console.log(items);
      if(filterVal && items) {
        if(filterVal == 1) {
          /*items = items.sort(function(a, b) {
					return b.name.localeCompare(a.name);
				});*/
          this.compareData(items, "DESC")
        } else if(filterVal == 2) {
          /*items = items.sort(function(a, b) {
					return a.name.localeCompare(b.name);
				});*/
         this.compareData(items, "AESC")
        } else if(filterVal == 3 ) {
          items = items.slice(0, 2)
        } else if(filterVal == 4 ) {
          items = items.slice(0, 4)
        } else if(filterVal == 5) {
          items = items.slice(0, 6)
        }
      }

    return (
      <div>
        <button type="button" className={"btn btn-primary mt-4 mb-2 add-btn"} data-toggle="modal" data-target="#myModal" onClick={this.onClickAddProject.bind(this)}>Add Project</button>
        <select className="custom-select custom-select-lg select-box" style={{"width":"20%"}}
        onChange={this.onChangeDropdown.bind(this)} >
          <option selected>Filters</option>
          <option value="1">A-Z</option>
          <option value="2">Z-A</option>
          <option value="3">2</option>
          <option value="4">4</option>
          <option value="5">6</option>
        </select>
        <Dialog show={show}/>
        <div className="row">
          {items.map((data,i)=>
            <div className="col-sm-4 " key={i}>
              <div className="card list-card ">
                <div className="card-body clearfix">
                  <img src={data.image} className="rounded float-left image" alt="No Image" />
                  <div className={"information"}>
                  <div><span className={"text-muted"}>Project Name:</span><span className={"font-weight-bold"}>{data.name}</span></div>
                  <div><span className={"text-muted"}>Technology:</span><span className={"font-weight-bold"}>{data.technology}</span></div>
                  <div><span className={"text-muted"}>Link:</span><a className={"font-weight-bold"}>{data.link}</a></div>
                  <div><span className={"text-muted"}>Description:</span><span className={"font-weight-bold"}>{data.description}</span></div>
                  <div><span className={"text-muted"}>Members:</span><span className={"font-weight-bold"}>{data.team}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default List;