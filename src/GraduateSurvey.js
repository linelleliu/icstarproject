import React from 'react';

function GraduateSurvey() {
    return (
        <div className="area">
            <h3>Question1</h3>
            <textarea className="text" id="101" rows="4" cols="50" placeholder="minimum 3rows"></textarea>
            <h3>Question2</h3>
            <textarea className="text" id="102" rows="4" cols="50" placeholder="minimum 3rows"></textarea>
            <h3>Question3</h3>
            <textarea className="text" id="103" rows="4" cols="50" placeholder="minimum 3rows"></textarea>
            <h3>Question4</h3>
            <textarea className="text" id="104" rows="4" cols="50" placeholder="minimum 3rows"></textarea>
            <br/>
            <button className="button" type="submit">Submit</button>
        </div>
    );
};

export default GraduateSurvey;
