
import React from 'react';
import ReactDOM from 'react-dom';
import Tick from './Tick';
import App from './App';
import FirstComp from './FirstComp';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom';

/*import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';*/


  /*ReactDOM.render(
    <Router>
      <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/firstComp' component={FirstComp}/>
      </Switch>

    </Router>, document.getElementById('root'));*/

/*ReactDOM.render(
    {/*<Router>
      <div className='container'>
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/page1"> Page 1 </NavLink> </li>
      <li><NavLink to="/page2"> Page 2 </NavLink> </li>
      <li><NavLink to="/page3"> Page 3 </NavLink> </li>
    </ul>
  </div>
</nav>

      <Switch>
        <Route exact path='/home' component={Home}/>
      <Route  path='/page1' component={Page1}/>
      <Route path='/page2' component={Page2}/>
      <Route path='/page3' component={Page3}/>
      <Route path='/firstComp' component={FirstComp}/>
      </Switch>
      </div>

    </Router> }, document.getElementById('root'));*/

    ReactDOM.render(<App/>, document.getElementById('root'));
