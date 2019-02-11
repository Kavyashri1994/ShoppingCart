
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import LoginApp from './LoginApp/index.jsx'
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

 render() {
     return(
         <div className={"App"}>
             {/*<LoginApp />*/}
             <header className="App-header">
                 <h1> This is My Header  </h1>
                 <img src={logo} alt='Logo' className={"App-logo"}/>
             </header>
             <div>
                 <h1 className={"inner-div"}> REACT</h1>
                 <div className={"outer-div"}>
                     <img src={logo} alt="Forest" width="1000" height="600" />
                 </div>
             </div>
         </div>
     )
 }


}
export default App;
