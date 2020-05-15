import React from 'react';
import App from './App';
import StudentLogIn from './StudentLogIn';
import TrackerBeeImage from './TrackerBeeImage.jpg';
import students from './students.jpg';
import community from './community.jpg'
import { Grid } from '@material-ui/core';
import admin1 from './admin1.jpg';
import {Link } from "react-router-dom";

function toStudentLogIn() {

}


function AdministratorStudentCommunity() {
    return (
        <div>
            <div className="trackerbeeheader">
            <Grid container spacing={0}>
                <Grid item xs={4} sm={6} size="small">
                    <img className="trackerbee" src={TrackerBeeImage} width="60vw" height="60vh" ></img>
                </Grid>
                <Grid item xs={0} sm={4} size="small">
                    <h1>Tracker Bee</h1>
                </Grid> 
            </Grid>
            </div>
            <Link to="/studentlogin">
                <div className="headerimage" to="/studentlogin">
                    <h4 className="">Student</h4>
                    <img className="image" src={students}></img>
                </div>
            </Link>
            <Link to="/communitypartnerlogin" >
                <div className="headerimage">
                    <h4>Community Partners</h4>
                    <img className="image" src={community}></img>
                </div>
            </Link>
            <Link to="/adminlogin">
                <div className="headerimage">
                    <h4>Admin</h4>
                    <img className="image" src={admin1}></img>
                </div>
            </Link>
        </div>
        
    )
}

export default AdministratorStudentCommunity;