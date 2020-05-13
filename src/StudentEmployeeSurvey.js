import React from 'react';
import TrackerBeeImage from './TrackerBeeImage.jpg';
import Container from '@material-ui/core/Container';

function StudentEmployeeSurvey() {
    return (
        <div>
            <Container component="main" maxWidth="xs">
            <img className="trackerbee" src={TrackerBeeImage} width="60vw" height="60vh" ></img>
                <h2 class= "She Skills Assessment">Skills Assessment </h2>
            <br/>

            <form>
                <input type="date" name="numbers" placeholder=""/>
                <br/>
                <br/>
                <div>
                    <input type="text" name="name" placeholder="Employee Name"/>
                    <input type="text" name="name" placeholder="Contractor"/>
                    </div>
                    <div>
                    <input type="text" name="name" placeholder="Supervisor"/>  
                    <input type="text" name="name" placeholder="Email"/>
                </div>

                <br/>
                <h5 class="container">1. Working in a team structure. </h5>
                    <input type="checkbox"/>
                    <label class="container">Advanced</label>
                    <input type="checkbox"/>
                    <label class="container">Intermediate</label>
                    <input type="checkbox"/>
                    <label class="container">Novice</label>

                <h5>2. Decision making and problem solving. </h5>
                    <input type="checkbox"/>
                    <label class="container">Advanced</label>
                    <input type="checkbox"/>
                    <label class="container">Intermediate</label>
                    <input type="checkbox"/>
                    <label class="container">Novice</label>

                <h5>3. Demonstrating proficiency with computer software programs. </h5>
                    <input type="checkbox"/>
                    <label class="container">Advanced</label>
                    <input type="checkbox"/>
                    <label class="container">Intermediate</label>
                    <input type="checkbox"/>
                    <label class="container">Novice</label>

                
                <h5>4. Planning, organizing, and prioritizing work. </h5>
                    <input type="checkbox"/>
                    <label class="container">Advanced</label>
                    <input type="checkbox"/>
                    <label class="container">Intermediate</label>
                    <input type="checkbox"/>
                    <label class="container">Novice</label>

                <h5>5. Obtaining and processing. </h5>
                    <input type="checkbox"/>
                    <label class="container">Advanced</label>
                    <input type="checkbox"/>
                    <label class="container">Intermediate</label>
                    <input type="checkbox"/>
                    <label class="container">Novice</label>
                

                <h5>6. Analyzing quantitative data. </h5>
                    <input type="checkbox"/>
                    <label class="container">Advanced</label>
                    <input type="checkbox"/>
                    <label class="container">Intermediate</label>
                    <input type="checkbox"/>
                    <label class="container">Novice</label>
            </form>
            <br/>
            <button className="button" type="submit">Submit</button>
            </Container>
        </div>
    );
};

export default StudentEmployeeSurvey;