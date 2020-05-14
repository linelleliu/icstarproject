import React from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import ClockInOut from './ClockInOut';
import TimeLog from './TimeLog'
import StudentSurvey from './StudentSurvey'
import GraduateSurvey from './GraduateSurvey'
import StudentEmployeeSurvey from './StudentEmployeeSurvey';
import JobPost from './JobPost';
import Chat from './Chat';

class App extends React.Component{
    state = {
        page: 0,
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
                <TopBar changePage={this.changePage} status={this.state.working} />
                {this.state.page === 0?
                <ClockInOut 
                    clockIn={this.clockIn}
                    clockOut={this.clockOut}
                    date={this.state.date}
                    time={this.state.time}
                    working={this.state.working}
                    clockInArray={this.state.clockIn}
                /> 
                : null }

                {this.state.page === 1 ? 
                <TimeLog 
                    clockIn={this.state.clockIn} 
                    clockOut={this.state.clockOut}
                    working={this.state.working}
                />
                : null }

                {/* {this.state.page === 2 ? 
                <Chat />
                : null } */}

                {this.state.page === 3 ? 
                <JobPost />
                : null }

                {this.state.page === 'Survey' && 
                <StudentSurvey />}

            
                {this.state.page === 'Progress' && 
                <GraduateSurvey />}

                {this.state.page === 'Advocacy' && 
                <StudentEmployeeSurvey />}
                

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