import React from 'react';

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
    }

function Help() {
    return (
        <div>
            <br/>
            <br/>
            <div class="w3-container">
                <h2>FAQ'S/Help Desk</h2>
                <br/>
                <h5>Answers To Frequently Asked Questions:</h5>
                <br/>
                <button onClick={()=>myFunction('Demo1')} class="w3-btn w3-block w3-blue w3-left-align">Can I delete already saved time stamps?</button>
                <div id="Demo1" class="w3-container w3-hide">
                <p>- Already saved time stamps cannot be deleted.</p>
                <p>- If you realize that you have made a mistake after, already pressing submit. <button>Click Here</button></p>
            </div>
            <button onClick={()=>myFunction('Demo2')} class="w3-btn w3-block w3-blue w3-left-align"> How will I know if my time log has been certified?</button>
            <div id="Demo2" class="w3-container w3-hide">
                <p>- Notice of certification/approval can be found in your notifications tab.</p>
                <p>- If you have waited the 24hrs response time but still no notifications. <button>Click Here</button> </p>
            </div>
            <button onClick={()=>myFunction('Demo3')} class="w3-btn w3-block w3-blue w3-left-align"> How can I apply for a job or another internship?</button>
            <div id="Demo3" class="w3-container w3-hide">
                <p>- New oppertunities for jobs and internships arrive frequently.</p>
                <p>- If you want to view associated job and internship oppertunities. <button>Click Here</button> </p>
            </div>
            <button onClick={()=>myFunction('Demo4')} class="w3-btn w3-block w3-blue w3-left-align"> I'm Having truble getting too and from work</button>
            <div id="Demo4" class="w3-container w3-hide">
                <p>- It takes money to make money. We get it.</p>
                <p>- If your in need of transportation assistance. <button> Click Here</button> </p>
            </div>
        </div>
    </div>
    )
}
            

export default Help;
