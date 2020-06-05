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
import AdministratorStudentCommunity from './AdministratorStudentCommunity';
import GraduateSurvey from './GraduateSurvey';
import StudentEmployeeSurvey from './StudentEmployeeSurvey';
import CommunityPartnerLogin from './CommunityPartnerLogin';
import AdminLogin from './AdminLogin';
import AdminMain from './AdminMain';
import PaymentLog from './PaymentLog';

ReactDOM.render(

  <React.StrictMode>
     <Router>
      <Switch>
        <Route exact path="/" component={AdministratorStudentCommunity} />
        <Route path='/studentlogin' component={Main} />
        <Route path='/register' component={StudentRegistration} />
        <Route path='/forgotpassword' component={StudentForgotPass} />
        <Route path='/communitypartnerlogin' component={CommunityPartnerLogin} />
        <Route path='/adminlogin' component={AdminMain} />
      </Switch> 
     </Router>
    {/* <App /> */}
    {/* <Workhop /> */}

      {/* <PaymentLog /> */}
      {/* <StudentEmployeeSurvey /> */}
     
   
  </React.StrictMode>,
  document.getElementById('root')
);


