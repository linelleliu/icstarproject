below is for additional(here added styles but it has bug we need to fix this)
let username=document.getElementById('eid')
    let password=document.getElementById('pass')
    
    for(let i=0;i<userData.length;i++)
    {
    if(username.value!==userData[i].username) 
    {
      
      username.style.border = "solid 3px red";
       document.getElementById("error").style.visibility="visible";
       return
    }
   else if (password.value!==userData[i].password)
   {
    password.style.border = "solid 3px red";
    document.getElementById("word").style.visibility="visible";
    return
   }
   else
   {
    alert("user access granted")
   }
  }
}
 
forgotpassword

import React from 'react';
import logo from "./logo.jpg"
function forgot(){
    return(
       <div>
 
 <img src={logo}  width="150" height="150"></img><br/>
    <h2>Forgotten your password?</h2>
    <pre>Don't worry we'll send you a message to
    help you reset your password
    </pre>
    <input id="eid" class= "mail" placeholder="Enter Email" type="text"/><br/><br/>
    <button class="button" type="submit">continue</button><br/><br/>
 
         </div>
          );
  }
 
export default forgot;



   
