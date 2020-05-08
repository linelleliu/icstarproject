// below is for additional(here added styles but it has bug we need to fix this)
// let username=document.getElementById('eid')
//     let password=document.getElementById('pass')
    
//     for(let i=0;i<userData.length;i++)
//     {
//     if(username.value!==userData[i].username) 
//     {
      
//       username.style.border = "solid 3px red";
//        document.getElementById("error").style.visibility="visible";
//        return
//     }
//    else if (password.value!==userData[i].password)
//    {
//     password.style.border = "solid 3px red";
//     document.getElementById("word").style.visibility="visible";
//     return
//    }
//    else
//    {
//     alert("user access granted")
//    }
//   }
// }

import React from 'react';
import logo from "./logo.jpg";
import './StudentLogIn.css';


function StudentForgotPass() {
   return(
      <div>
         <br/>
         <img src={logo}  width="140" height="140"></img>
         <br/>
         <h3>Forgotten your password?</h3>
         <pre>Don't worry we'll send you a 
            message to help 
            you reset your password</pre>
         <br/>
         <input id="eid" className= "email" placeholder="Enter Email" type="text"/>
         <br/>
         <br/>
         <button className="button" type="submit">Continue</button>
         <br/>
         <br/>
      </div>
   );
  };
 
export default StudentForgotPass;



   
