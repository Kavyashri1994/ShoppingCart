import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./login.css";
class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {items} = this.props;
    return (
      <div className="row">
        {items.map((data,i)=>
          <div className="col-sm-4 " key={i}>
            <div className="card list-card ">
              <div className="card-body clearfix">
                <img src={data.imageUrl} className="rounded float-left image" alt="No Image" />
                <div className={"information"}>
                <div><span className={"text-muted"}>First Name:</span><span className={"font-weight-bold"}>{data.firstName}</span></div>
                <div><span className={"text-muted"}>Last Name:</span><span className={"font-weight-bold"}>{data.lastName}</span></div>
                <div><span className={"text-muted"}>Email:</span><a className={"font-weight-bold"}>{data.emailId}</a></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default List;