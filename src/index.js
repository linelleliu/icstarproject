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
import StudentSurvey from './StudentSurvey';
import AdministratorStudentCommunity from './AdministratorStudentCommunity'
import GraduateSurvey from './GraduateSurvey'
import StudentEmployeeSurvey from './StudentEmployeeSurvey'


ReactDOM.render(

  <React.StrictMode>
     <Router>
      <Switch>
        <Route exact path="/" component={AdministratorStudentCommunity} />
        <Route path='/studentlogin' component={StudentLogIn} />
        <Route path='/register' component={StudentRegistration} />
        <Route path='/forgotpassword' component={StudentForgotPass} />
      </Switch> 
     </Router>
    {/* <App /> */}
    {/* <Workhop /> */}
      {/* <StudentSurvey /> */}
      {/* <GraduateSurvey /> */}
      {/* <StudentEmployeeSurvey /> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);


