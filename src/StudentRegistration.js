import React from 'react';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './StudentLogIn.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className="registrationtile">
        <h2><b>Student Registration</b></h2>
        Please fill in this form to create an account.
      </div>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <b>Name</b>
          <Grid container spacing={1}>
            <Grid item xs={5} sm={5}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                size="small"
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <TextField
                autoComplete="mname"
                name="middleName"
                variant="outlined"
                fullWidths
                id="middletName"
                label="M"
                autoFocus
                size="small"
              />
            </Grid>
            <Grid item xs={5} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                size="small"
              />
            </Grid>
          </Grid>
          <br/>

          <b>Birthday</b>
          <Grid container spacing={1}>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="birth"
                label="Month"
                name="month"
                autoComplete="month"
                size="small"
                type="number"
                InputProps={{
                  inputProps: { 
                      max: 12, min: 1
                  }
              }}
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="day"
                label="Day"
                id="day"
                autoComplete="day"
                size="small"
                type="number"
                InputProps={{
                  inputProps: { 
                      max: 30, min: 1
                  }
              }}
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="year"
                label="Year"
                id="year"
                autoComplete="year"
                size="small"
                type="number"
                InputProps={{
                  inputProps: { 
                      max: 2018, min: 1990
                  }
              }}
              />
            </Grid>
          </Grid>

          <br/>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6}>
              <b>Student ID</b>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="studentid"
                  label="Student ID"
                  name="studentid"
                  autoComplete="studentid"
                  size="small"
                />
            </Grid>
            <Grid item xs={6} sm={6}>
              <b>Gender</b>
              <br/>
                <input type="radio" id="female" name="gender"/>
                <label for="Female">Female</label>
   
                <input type="radio" id="male" name="gender"/>
                <label for="Male">Male</label>
            </Grid>
          </Grid>
          
          <br/>
          <b>Current Address</b>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Street Address"
                name="address"
                autoComplete="address"
                autoFocus
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                id="city"
                autoComplete="city"
                autoFocus
                size="small"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="state"
                label="State/Province"
                id="state"
                autoComplete="state"
                autoFocus
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="zip code"
                label="Postal/Zip Code"
                id="zip code"
                autoComplete="zip code"
                autoFocus
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="country"
                label="Country"
                id="country"
                autoComplete="country"
                autoFocus
                size="small"
              />
            </Grid>
          </Grid>
          <br/>
          <b>Student Email</b>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
          <br/>

          <b>Password</b>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="confirm password"
                autoComplete="current-password"
                size="small"
              />
            </Grid>
          </Grid>
          <br/>

          <b>School Code</b>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="school code"
                label="School Code"
                id="school code"
                autoComplete="school code"
                size="small"
              />
            </Grid>
          </Grid>
          <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
          />
          <Link to="/" className="linkPrivacy">Agree to our Terms & Privacy</Link>
          <br/>
          <br/>
          <button className="button">SIGN UP</button>
          <br/>
          <br/>
          <Link to="/" className="linkLogIn">Already have an account? Sign In</Link>
          <br/>
          <br/>
        </form>
      </div>
    </Container>
  );
}








