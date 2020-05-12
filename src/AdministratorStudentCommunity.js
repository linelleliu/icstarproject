import React from 'react';
import App from './App';
import StudentLogIn from './StudentLogIn';
import TrackerBeeImage from './TrackerBeeImage.jpg';
import students from './students.jpg';
import community from './community.jpg'
import { Grid } from '@material-ui/core';
import admin1 from './admin1.jpg';

function toStudentLogIn() {

}


function AdministratorStudentCommunity() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={4} sm={6}>
                    <img className="trackerbee" src={TrackerBeeImage} width="70%" height="auto" ></img>
                </Grid>
                <Grid item xs={0} sm={4}>
                    <h1>Tracker Bee</h1>
                </Grid> 
            </Grid>
            <div className="image" onClick={toStudentLogIn()}  >
                <h4 className="">Student</h4>
                <img className="students" src={students} width="70%" height="auto" ></img>
            </div>
            <div className="image">
                <h4>Community Partners</h4>
                <img className="community" src={community } width="258px" height="125px" ></img>
            </div>
            <div className="image">
                <h4>Admin</h4>
                <img className="admin" src={admin1} width="90%" height="auto" ></img>
            </div>
        </div>
        
    )
}

export default AdministratorStudentCommunity;