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
import StudentForgotPass from './StudentForgotPass';
import StudentSurvey from './StudentSurvey'


ReactDOM.render(

  <React.StrictMode>
     <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path='/Register' component={StudentRegistration} />
        <Route path='/ForgotPassword' component={StudentForgotPass} />
      </Switch> 
     </Router>
    {/* <App /> */}
    {/* <Workhop /> */}
      {/* <StudentSurvey /> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);


