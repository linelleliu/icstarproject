import React from 'react';
import  {Link} from 'react-router-dom';
import logo from "./mlogo.jpg";
import './StudentLogIn.css';


function myFunction() {
  let userData = [
  {
    username:'user1',
    password:'pass1'
  }, 
  {
    username:'user2',
    password:'pass2'
  }, 
  {
    username:'user3',
    password:'pass3'
  }
  ]

  let username=document.getElementById('eid')
  let password=document.getElementById('pass')
    
  for(let i=0;i<userData.length;i++) {
    let username=document.getElementById('eid')
    let password=document.getElementById('pass')
  
    for(let i=0;i<userData.length;i++) {
      if(username.value==userData[i].username && password.value==userData[i].password) {
        myFunction.isAuthenticated = true;
          alert("user access granted")
      return
      }
    }
      alert("Incorrect Email or Password")
    }
  }
  
function StudentLogIn() {
    return(
      <div>
        <img src={logo} width="90%" height="auto" paddingLeft="20px"></img>
        <br/>
        <br/>
        <input id="eid" className="email" placeholder="Email" type="text" />
        <br/>
        <lable id = "error" style={{ visibility:"hidden", color:"red" }}>Invalid Email</lable>
        <br/>
        <input id="pass" className= "passw" placeholder="Password" type="password" />
        <br/>
        <lable id = "word" style={{ visibility:"hidden", color:"red" }}>Invalid password</lable>
        <Link to="/forgotPass" className="linkForgot"><i>Forgot Password?</i></Link>
        <br/>
        <br/>
        <button onClick={myFunction} className="button">LOGIN</button>
        <br/>
        <br/>
        <br/>
        <br/> 
        <br/>
        <Link to="/register" className="linkRegister">REGISTER</Link>
      </div>
    );
};

export default StudentLogIn;



