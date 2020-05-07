import React from 'react';

function StudentEmployeeSurvey() {
    return (
        <div>
            <div className="skills">
                <img src="Tracker Bee Image.jpg" alt="" width="100" height="100"/>    
                <h1>Tracker Bee App</h1>
                <h1>Contractor Employee Survey</h1>
            </div> 

            <form action="results.html" method="GET">
                <input type="text" id="101" placeholder="employee name"></input>
                <input type="text" id="101" placeholder="contractor"></input>
                <input type="text" id="101" placeholder="immediate supervisor"></input>
                <input type="text" id="101" placeholder="email"></input>
                
                <br/>

                <div>
                    <label for="date">Date</label>
                    <input type="date" name="date" id="date" min="2019-06-10"/>
                </div>

                <br/>
                <br/>

                <h1> Skill Sets</h1>

                <div className="Excellent"> 
                <br/>
                    <div className="row">

                        <div className="column" >
                            <h2>Poor</h2>
                            <input type="radio"/>    
                        </div>

                        <div className="column" >
                            <h2>Fair</h2>
                            <input type="radio"/>  
                        </div>

                        <div className="column" >
                            <h2>Good</h2>
                            <input type="radio"/>   
                        </div> 
                    </div>
                </div>

                <div>
                  <label for="Attendance">Attendance</label>   
                  <input type="radio"/>  
                </div>

                <div>
                    <label for="Attitude">Attitude</label>
                    <input type="radio"/>
                    <input type="radio"/>
                    <input type="radio"/>
                    <input type="radio"/>
                </div>

                <div>
                    <label for="Communication">Communication</label>
                    <input type="radio"/>
                    <input type="radio"/>
                    <input type="radio"/>
                    <input type="radio"/>
                </div>

                <div>
                    <label for="Cooperation">Cooperation</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>    
                    <label for="Creativity">Creativity</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>
                    <label for="Dependability">Dependability</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>
                    <label for="Enthusiasm">Enthusiasm</label>
                    <input type="radio"/>
                    <input type="radio"/>
                    <input type="radio"/>
                    <input type="radio"/>
                </div>

                <div>
                    <label for="Honesty">Honesty</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>
                    <label for="Initiative">Initiative</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>
                    <label for="Productivity">Productivity</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>
                    <label for="Punctuality">Punctuality</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>    
                    <label for="Technical Skills">Technical Skills</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>
                    <label for="Work Consistency">Work Consistency</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>
                    <label for="Work Quality">Work Quality</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <div>
                    <label for="Working Relations">Working Relations</label>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                </div>

                <br/>
                <br/>
                <br/>
                
                <div>
                    <label>Password<input type="password" name="password" required/></label>
                </div>

                <button type="reset">Reset</button>
                <button type="submit">Submit</button>

            </form>

        </div>
    );
};

export default StudentEmployeeSurvey;
            

    