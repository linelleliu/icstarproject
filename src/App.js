import React from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import ClockInOut from './ClockInOut';
import TimeLog from './TimeLog'
import GraduateSurvey from './GraduateSurvey';
import StudentEmployeeSurvey from './StudentEmployeeSurvey';
import JobPost from './JobPost';
import Chat from './Chat';
import PaymentLog from './PaymentLog';
import Progress from './Progress';
import Transportation  from './Transportation';
import Location from './Location';
import Setting from './Setting';
import Help from './Help'

class App extends React.Component{
    state = {
        page: 'Clock',
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        clockIn: [],
        clockOut: [],
        working: false,
    }

    componentDidMount() {
        setInterval(this.getCurrentTime, 1000);
    }

    clockIn = () => {
        let startedMoment = {
            date: this.state.date,
            time: this.state.time,
            timeAtLogIn: Date.now()
        }
        let newArray = this.state.clockIn
        newArray.push(startedMoment)
        let newArray2 = this.state.clockOut
        newArray2.push({
            date:'',
            time:'',
            timeAtLogIn: ''
        })
        this.setState({
            clockIn: newArray,
            clockOut: newArray2,
            working: true
        })
    }

    clockOut = () => {
        let endedMoment = {
            date:this.state.date,
            time:this.state.time,
            timeAtLogOut: Date.now()
        }
        let newArray = this.state.clockOut
        newArray.pop();
        newArray.push(endedMoment)
        this.setState({
            clockOut: newArray, 
            working: false
        });
    };

    getCurrentTime = () => {
        let currentTime = new Date();
        this.setState({
           date: currentTime.toLocaleDateString(),
           time: currentTime.toLocaleTimeString(),
        });
    };

    changePage =(number)=>{
        this.setState({page:number})
    };

    render(){
        return(
            <div>
                <TopBar changePage={this.changePage} status={this.state.working} page={this.state.page} />
                {this.state.page === 'Clock'?
                <ClockInOut 
                
                    clockIn={this.clockIn}
                    clockOut={this.clockOut}
                    date={this.state.date}
                    time={this.state.time}
                    working={this.state.working}
                    clockInArray={this.state.clockIn}
                /> 
                : null }

                {this.state.page === 'Time Log' ? 
                <TimeLog 
                    clockIn={this.state.clockIn} 
                    clockOut={this.state.clockOut}
                    working={this.state.working}
                />
                : null }

                {this.state.page === 'Live Chat' ? 
                <Chat />
                : null }

                {this.state.page === 'Job Posting' ? 
                <JobPost />
                : null }

                {this.state.page === 'Skill Survey' && 
                <StudentEmployeeSurvey />}

                {this.state.page === 'Graduate Survey' && 
                <GraduateSurvey />}

                {this.state.page === 'Progress' && 
                <Progress />}

                {this.state.page === 'Transportation' && 
                <Transportation  />}

                {this.state.page === 'Payment Log' && 
                <PaymentLog />}

                {this.state.page === 'Location' && 
                <Location />}

                {this.state.page === 'Setting' && 
                <Setting />}

                {this.state.page === 'Help' && 
                <Help />}

                <BottomBar
                    working={this.state.working}
                    page={this.state.page}
                    changePage={this.changePage}
                />
            </div>
        )
    };
};

export default App;