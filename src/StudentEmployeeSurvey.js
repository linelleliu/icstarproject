// import React from 'react';

// function StudentEmployeeSurvey() {
//     return (
//         <div>
//             <div className="skills"/>
//                 <img src="Tracker Bee Image.jpg" alt="" width="100" height="100"/>    
//                 <h1>Tracker Bee App</h1>
//                 <h1>Contractor Employee Survey</h1>
//             </div> 

//             <form action="results.html" method="GET"/>
//                 <input type="text" id="101" placeholder="employee name"/>
//                 <input type="text" id="101" placeholder="contractor"/>
//                 <input type="text" id="101" placeholder="immediate supervisor"/>
//                 <input type="text" id="101" placeholder="email"/>
                
//                 <br/>

//                 <div>
//                     <label for="date"/>Date</label>
//                     <input type="date" name="date" id="date" min="2019-06-10"/>
//                 </div>

//                 <br/>
//                 <br/>

//                 <h1> Skill Sets</h1>

//                 <div className="Excellent"/> 
//                 <br/>
//                     <div className="row"/>

//                         <div className="column" >
//                             <h2>Poor</h2>
//                             <input type="radio"/>    
//                         </div>

//                         <div className="column" >
//                             <h2>Fair</h2>
//                             <input type="radio"/>  
//                         </div>

//                         <div className="column" >
//                             <h2>Good</h2>
//                             <input type="radio"/>   
//                         </div> 
//                     </div>
//                 </div>

//                 <div>
//                   <label for="Attendance"/>Attendance</label>   
//                   <input type="radio"/>  
//                 </div>

//                 <div>
//                     <label for="Attitude"/>Attitude</label>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Communication"/>Communication</label>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Cooperation"/>Cooperation</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>    s
//                     <label for="Creativity"/>Creativity</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Dependability"/>Dependability</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Enthusiasm"/>Enthusiasm</label>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                     <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Honesty"/>Honesty</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Initiative"/>Initiative</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Productivity"/>Productivity</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Punctuality"/>Punctuality</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>    
//                     <label for="Technical Skills"/>Technical Skills</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Work Consistency"/>Work Consistency</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Work Quality"/>Work Quality</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <div>
//                     <label for="Working Relations"/>Working Relations</label>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                         <input type="radio"/>
//                 </div>

//                 <br/>
//                 <br/>
//                 <br/>
                
//                 <div>
//                     <label>Password<input type="password" name="password" required/></label>
//                 </div>

//                 <button type="reset"/>Reset</button>
//                 <button type="submit"/>Submit</button>

//             </form>

//         </div>
//     );
// };

// export default StudentEmployeeSurvey;
            





// <style>

// .label {
//     color: white;
//     padding: 8px;
//     font-family: Arial;
// }

// .She{background-color: #2196F3;} /* Blue */

// /* The container */
// .container {
//     display: block;
//     position: relative;
//     padding-left: 35px;
//     margin-bottom: 12px;
//     cursor: pointer;
//     font-size: 22px;
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
// }

// /* Hide the br/owser's default checkbox */
// .container input {
//     position: absolute;
//     opacity: 0;
//     cursor: pointer;
//     height: 0;
//     width: 0;
// }

// /* Create a custom checkbox */
// .checkmark {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 25px;
//     width: 25px;
//     background-color: #eee;

// }

 

// /* On mouse-over, add a grey background color */
// .container:hover input ~ .checkmark {
//     background-color: #ccc;
// }

 
// /* When the checkbox is checked, add a blue background */
// .container input:checked ~ .checkmark {
//     background-color: #2196F3;
// }

 
// /* Create the checkmark/indicator (hidden when not checked) */
// .checkmark:after {
//     content: "";
//     position: absolute;
//     display: none;
// }

 

// /* Show the checkmark when checked */
// .container input:checked ~ .checkmark:after {
//     display: block;
// }


// /* Style the checkmark/indicator */
// .container .checkmark:after {
//     left: 9px;
//     top: 5px;
//     width: 5px;
//     height: 10px;
//     border: solid white;
//     border-width: 0 3px 3px 0;
//     -webkit-transform: rotate(45deg);
//     -ms-transform: rotate(45deg);
//     transform: rotate(45deg);
//     span {
//         color: white;
//         background-color: blue;
//         text-align: center;
//         font-size: 70px;
//         }
//     </style>





//     <img src="Tracker Bee Image.jpg" width="200" height="200"/>
//    <span class= "She# Tracker Bee Skills Assessment"/>She# Tracker Bee Skills Assessment </span>
//     <br/>
//     <br/>


// <form>
//     <input type="date" name="numbers" placeholder=""/>
//     <br/>
//     <br/>

//     <div>
//     <input type="text" name="name" placeholder="Employee Name"/>
//     <input type="text" name="name" placeholder="Contractor"/>
//     </div>
//     <div>
//     <input type="text" name="name" placeholder="Supervisor"/>  
//     <input type="text" name="name" placeholder="Email"/> 

//     </div>

//     <br/>
//     <h1>Working in a team structure. </h1>
//     <label class="container"/>Advanced
//   <input type="checkbox" checked="checked"/>
//   <span class="checkmark"/></span>
// </label>

// <label class="container"/>Intermediate
//   <input type="checkbox"/>
//   <span class="checkmark"/></span>

// </label>
// <label class="container"/>Novice
//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

// <h1>Decision making and problem solving. </h1>

//     <label class="container"/>Advanced

//   <input type="checkbox" checked="checked"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Intermediate

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Novice

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

 

// <h1>Demonstrating proficiency with computer software programs. </h1>

//     <label class="container"/>Advanced

//   <input type="checkbox" checked="checked"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Intermediate

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Novice

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

 

// <h1>Planning, organizing, and prioritizing work. </h1>

//     <label class="container"/>Advanced

//   <input type="checkbox" checked="checked"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Intermediate

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Novice

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

 

// <h1>Obtaining and processing. </h1>

//     <label class="container"/>Advanced

//   <input type="checkbox" checked="checked"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Intermediate

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Novice

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

 

// <h1>Analyzing quantitative data. </h1>

//     <label class="container"/>Advanced

//   <input type="checkbox" checked="checked"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Intermediate

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

// <label class="container"/>Novice

//   <input type="checkbox"/>

//   <span class="checkmark"/></span>

// </label>

 

// </form>

