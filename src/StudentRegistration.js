import React from 'react';
import  {Link} from 'react-router-dom';
// import './StudentRegistration.css'


function StudentRegistration(props) {
  return (
    <div className="App">
        <h1> Welcome To tracker-Bee </h1>
        
        <form action="action_page.php">
            <div class="container">
            <h3> Student Registration </h3>
            <p>Please fill in this form to create an account.</p>
            
            <label for="Student Name"><b>Name</b></label>
            <input type="text" placeholder="Student Name" name="Enter Email" required/>
            <br/>
            <br/>
            <label for="Student Email"><b>Email</b></label>
            <input type="text" placeholder="Student Email" name="Enter Email" required/>
            <br/>
            <br/>
            <label for="Psword"><b>Password</b></label>
            <input type="Password" placeholder="Password" name="psw" required/>
            <br/>
            <br/>
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
            <br/>
            <br/>
            <label for="Work Site"><b> Work Site </b></label>
            <input type="text" placeholder="Enter" name="Work Site" required/>
            <br/>
            <br/>

            <label for="School Code"><b>School Code</b></label>
            <input type="School" placeholder="Ener your school" name="School Code" required/>
            <br/>
            <br/>
            <div>
                <input type="radio" id="male" name="gender"/><label for="Male">Male</label>
                <input type="radio" id="Female" name="gender"/><label for="Female">Female</label><br/><br/>
            </div>
        
            <p>By creating an account you agree to our <a >Terms & Privacy</a>.</p>
            <button type="submit" class="registerbtn" >Register</button>
            </div>
        
            <div class="container signin">
            <p>Already have an account? <a  onClick={props.goToApp}>Sign in</a>.</p>
            </div>
        </form>  

    </div>
  );
};

export default StudentRegistration;