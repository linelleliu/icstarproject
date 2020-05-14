import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./mlogo.jpg";
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const useStyles1 = makeStyles({
  root: {
    color: "#1976d2", //blue 700
    size: "small"
  },
});

function tryToLogin(func) {
    let username1=document.getElementById('email').value
    let password1=document.getElementById('password').value
    let data={username:username1,password:password1}
    axios.post('http://localhost:8080/getuser',data)
    .then(resp => {
      if (resp.data === 'correct password'){
        func()
      }})
}
  
function StudentLogIn(props) {
  const classes = useStyles();
  const classes1 = useStyles1()
    return(
      <div>
        <br/>
        <br/>
        <Container component="main" maxWidth="xs">
          <img className="logo" src={logo} width="340vw" height="160vh"></img>
          <h3>Admin Log In</h3>
          <CssBaseline />
            <div className={classes.margin}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="email"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoFocus
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle  className={classes1.root} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin} >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="password"
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    autoFocus
                    type="password"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon className={classes1.root}/>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </div>

          
          {/* <lable id = "error" style={{ visibility:"hidden", color:"red" }}>Invalid Email</lable> */}
          {/* <input id="eid" className="email" placeholder="Email" type="text" /> */}
          {/* <input id="pass" className= "passw" placeholder="Password" type="password" /> */}
          {/* <lable id = "word" style={{ visibility:"hidden", color:"red" }}>Invalid password</lable> */}
    
          
          <button onClick={()=>tryToLogin(props.goToApp)} className="button">SIGN IN</button>
          <br/>
          <br/>
          <Link to="/forgotpassword" className="linkForgot"><i>Forgot Password?</i></Link>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
          <Link to="/register" className="linkRegister">Don't have an account? Sign Up</Link>
          </div>
          </Container>
      </div>
    );
};

export default StudentLogIn;



