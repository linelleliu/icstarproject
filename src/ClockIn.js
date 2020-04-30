import React from 'react'

let startTime;

clockIn = () => {
    if (confirm("You Are Clocking IN!")) {
      startTime = Date.now();
      let newItem =  document.createElement('li')
      newItem.style.color= 'green'
      newItem.innerText = month + "/" + day + "/" + year + "\n" + hour + " : " + min + " : " + sec + " " + midday + "\n";
      let list = document.getElementById('timeLog');
      list.appendChild(newItem)
      document.getElementById('clockIn').style.display = "none"
      document.getElementById('clockOut').style.display = "block"
        } else {
        }
    }
  
  clockOut = () => {
    if (confirm("Are You Sure You Want To Clock Out?")) {
      let newItem =  document.createElement('li')
      newItem.style.color = 'red'
      newItem.innerText = month + "/" + day + "/" + year + "\n" + hour + " : " + min + " : " + sec + " " + midday + "\n";
      let list = document.getElementById('timeLog');
      list.appendChild(newItem)
      let endTime = Date.now();
      let totalMilliSeconds = endTime - startTime;
      let totalHours = Math.round(totalMilliSeconds / 1000 / 60 / 60).toFixed(2);
      let result = document.getElementById('workedTime')
      result.innerText = totalHours
      document.getElementById('clockOut').style.display = "none"
      document.getElementById('clockIn').style.display = "block"
        } else {
         }
    }

class ClockIn extends React.Component {
    constructor(props) {
        super(props);
    
    }
    
    
    render() {
        return (
            <div>
                <div class="buttonIn">
                    <button id="clockIn" onclick="clockIn()">CLOCK IN</button>
                </div>
                <div class="buttonOut">
                    <button id="clockOut" style="display: none" onclick="clockOut()">CLOCK OUT</button>
                </div>
            </div>
        )
    }
}

export default ClockIn;