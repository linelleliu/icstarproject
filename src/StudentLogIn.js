import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./mlogo.jpg";
import './StudentLogIn.css';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(4),
  },
}));

const useStyles1 = makeStyles({
  root: {
    color: "#1976d2", //blue 700
    size: "small"
  },
});

function loginFunction(func) {
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

  let username=document.getElementById('email')
  let password=document.getElementById('password')
    
  for(let i=0; i<userData.length; i++) {
    if(username.value === userData[i].username && password.value === userData[i].password) {
      loginFunction.isAuthenticated = true;
        // alert("user access granted")
      func();
      return
    }
    } alert("Incorrect Email or Password")
}
  
function StudentLogIn(props) {
  const classes = useStyles();
  const classes1 = useStyles1()
    return(
      <div>
        <br/>
        <img className="logo" src={logo} width="90%" height="auto" paddingLeft="20px" ></img>
        
        <div className={classes.margin} >
          <Grid container spacing={1} alignItems="flex-end">
            <TextField
              id="email"
              label="Email"  
              variant="outlined"
              size="small"
              required
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle  className={classes1.root} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </div>
        <div className={classes.margin} >
            <Grid container spacing={1} alignItems="flex-end">
              <TextField
                id="password"
                label="Password"  
                variant="outlined"
                size="small"
                required
                type="password"
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon className={classes1.root}/>
                    </InputAdornment>
                  ),
                }}
              />
          </Grid>
        </div>
        
        {/* <lable id = "error" style={{ visibility:"hidden", color:"red" }}>Invalid Email</lable> */}
        {/* <input id="eid" className="email" placeholder="Email" type="text" /> */}
        {/* <input id="pass" className= "passw" placeholder="Password" type="password" /> */}
        {/* <lable id = "word" style={{ visibility:"hidden", color:"red" }}>Invalid password</lable> */}
  
        
        <button onClick={()=>loginFunction(props.goToApp)} className="button">LOG IN</button>
        <br/>
        <br/>
        <Link to="/ForgotPassword" className="linkForgot"><i>Forgot Password?</i></Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
        <Link to="/Register" className="linkRegister">Don't have an account? Sign Up</Link>
        </div>
      </div>
    );
};

export default StudentLogIn;



