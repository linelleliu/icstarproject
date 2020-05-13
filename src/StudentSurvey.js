import React from 'react';
import './index.css';


function StudentSurvey() {
    return (
        <div>
            <h3>Contractor Student Employee Evaluation</h3>
            <input id="eid" className= "mail" placeholder="Student Employee Name" type="text" />
            <input id="eid" className= "mail" placeholder="Contractor" type="text" /><br/><br/>
            <input id="eid" className= "mail" placeholder="Immediate Supervisor" type="text" />
            <label className="mail">Date:</label>
            <input type="date" id="date" name="date" /><br/><br/>
    
            <table className="table" >
                <tr>
                    <td className="noborder"><h4>Category</h4></td>
                    <td className="rating"><b>Excellent</b></td>
                    <td className="rating"><b>Good</b></td>
                    <td className="rating"><b>Fair</b></td>
                    <td className="rating"><b>Poor</b></td>
                </tr>
                <tr>
                    <td className="rating"><b>Attendance</b></td>
                    <td><input type="radio" name="radQ3" value="7" id="q7" title="Excellent" /></td>
                    <td><input type="radio" name="radQ3" value="7" id="q8" title="Good" /></td>
                    <td><input type="radio" name="radQ3" value="7" id="q9" title="fair" /></td>
                    <td><input type="radio" name="radQ3" value="7" id="q1" title="poor" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Attitude</b></td>
                    <td><input type="radio" name="radQ4" value="7" id="q2" title="Excellent" /></td>
                    <td><input type="radio" name="radQ4" value="7" id="q3" title="Good" /></td>
                    <td><input type="radio" name="radQ4" value="7" id="q4" title="fair" /></td>
                    <td><input type="radio" name="radQ4" value="7" id="q5" title="poor" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Communication</b></td>
                    <td><input type="radio" name="radQ5" value="7" id="q6" title="Excellent" /></td>
                    <td><input type="radio" name="radQ6" value="7" id="p1" title="Good" /></td>
                    <td><input type="radio" name="radQ7" value="7" id="p2" title="fair" /></td>
                    <td><input type="radio" name="radQ8" value="7" id="p3" title="poor" /></td>
                </tr>
                <tr>
                    <td className="rating" ><b>Cooperation</b></td>
                    <td><input type="radio" name="radQ" value="7" id="p4" /></td>
                    <td><input type="radio" name="radQ" value="7" id="p5" /></td>
                    <td><input type="radio" name="radQ" value="7" id="p6" /></td>
                    <td><input type="radio" name="radQ" value="7" id="p7" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Creativity</b></td>
                    <td><input type="radio" name="rad3" value="7" id="p8" title="Good" /></td>
                    <td><input type="radio" name="rad3" value="7" id="p9" title="Good" /></td>
                    <td><input type="radio" name="rad3" value="7" id="k1" title="Good" /></td>
                    <td><input type="radio" name="rad3" value="7" id="k2" title="Good" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Dependability</b></td>
                    <td><input type="radio" name="raQ3" value="7" id="k3" title="Good" /></td>
                    <td><input type="radio" name="raQ3" value="7" id="k4" title="Good" /></td>
                    <td><input type="radio" name="raQ3" value="7" id="k5" title="Good" /></td>
                    <td><input type="radio" name="raQ3" value="7" id="k6" title="Good" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Intiative</b></td>
                    <td><input type="radio" name="rdQ3" value="7" id="k7" title="Good" /></td>
                    <td><input type="radio" name="rdQ3" value="7" id="k8" title="Good" /></td>
                    <td><input type="radio" name="rdQ3" value="7" id="k9" title="Good" /></td>
                    <td><input type="radio" name="rdQ3" value="7" id="k0" title="Good" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Productivity</b></td>
                    <td><input type="radio" name="adQ3" value="7" id="s1" title="Good" /></td>
                    <td><input type="radio" name="adQ3" value="7" id="s2" title="Good" /></td>
                    <td><input type="radio" name="adQ3" value="7" id="s3" title="Good" /></td>
                    <td><input type="radio" name="adQ3" value="7" id="s4" title="Good" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Punctuality</b></td>
                    <td><input type="radio" name="radQ31" value="7" id="s5" title="Good" /></td>
                    <td><input type="radio" name="radQ31" value="7" id="s6" title="Good" /></td>
                    <td><input type="radio" name="radQ31" value="7" id="s7" title="Good" /></td>
                    <td><input type="radio" name="radQ31" value="7" id="s8" title="Good" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Technical Skills</b></td>
                    <td><input type="radio" name="ra1Q3" value="7" id="a1" title="Good" /></td>
                    <td><input type="radio" name="ra1Q3" value="7" id="a2" title="Good" /></td>
                    <td><input type="radio" name="ra1Q3" value="7" id="a3" title="Good" /></td>
                <td><input type="radio" name="ra1Q3" value="7" id="a4" title="Good" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Work Consistency</b></td>
                    <td><input type="radio" name="r1dQ3" value="7" id="a5" title="Good" /></td>
                    <td><input type="radio" name="r1dQ3" value="7" id="a6" title="Good" /></td>
                    <td><input type="radio" name="r1dQ3" value="7" id="a7" title="Good" /></td>
                    <td><input type="radio" name="r1dQ3" value="7" id="a8" title="Good" /></td>
                </tr> 
                <tr>
                    <td className="rating"><b>Work Quality</b></td>
                    <td><input type="radio" name="1adQ3" value="7" id="r1" title="Good" /></td>
                    <td><input type="radio" name="1adQ3" value="7" id="r2" title="Good" /></td>
                    <td><input type="radio" name="1adQ3" value="7" id="qr3" title="Good" /></td>
                    <td><input type="radio" name="1adQ3" value="7" id="r4" title="Good" /></td>
                </tr>
                <tr>
                    <td className="rating"><b>Working Relations</b></td>
                    <td><input type="radio" name="rad13" value="7" id="r5" title="Good" /></td>
                    <td><input type="radio" name="rad13" value="7" id="r6" title="Good" /></td>
                    <td><input type="radio" name="rad13" value="7" id="r7" title="Good" /></td>
                <td><input type="radio" name="rad13" value="7" id="r8" title="Good" /></td>
                </tr>
            </table>
            <br/>
            <button className="button" type="submit">Submit</button>
        </div>
    );

}

export default StudentSurvey;
