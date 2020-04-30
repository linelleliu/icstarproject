import React from 'react';

class TimeLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            month: '',
            day: '',
            hour: '',
            min: '',
            second: '',
            midday: ''
        }
    }

    componentDidMount() {
        setInterval(this.getCurrentTime, 1000);
    }

    numberConvert = (number) => number < 10 ? '0' + number : number
   

    getCurrentTime = () => {
        let currentTime = new Date();
        this.setState({
            year: currentTime.getFullYear(),
            month: currentTime.getMonth() + 1,
            day: currentTime.getDate(),
            hour: this.numberConvert(currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours()),
            min: this.numberConvert(currentTime.getMinutes()),
            second: this.numberConvert(currentTime.getSeconds()),
            midday: currentTime.getHours() > 12 ? 'PM' : 'AM'
        })
    }

render() {
    return (
        <div>
            <div>{this.state.month}/{this.state.day}/{this.state.year}</div>
            <div>{this.state.hour}:{this.state.min}:{this.state.second} {this.state.midday}</div>
        </div>
    )
}

}



export default TimeLog;
