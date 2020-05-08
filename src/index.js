import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import App from './App';
import StudentLogIn from './StudentLogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import StudentRegistration from './StudentRegistration';
import WorkShop from './WorkShop';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={StudentLogIn} />
        <Route path='/register' component={StudentRegistration} />
      </Switch>
    </Router>
    {/* <Main /> */}
    {/* <App /> */}
    {/* <Workhop /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


