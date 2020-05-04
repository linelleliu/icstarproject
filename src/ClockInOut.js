import React from 'react';
import './ClockInOut.css';
import Button from '@material-ui/core/Button';

const style = {
    background: 'linear-gradient(45deg, #43a047 30%, #b2ff59 95%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 120,
    width: 120,
    padding: '0 15px',
    boxShadow: '0 3px 5px 2px #eeff41',
    fontWeight: 'Bold',
    fontSize: 20,
    borderRadius: 150
};

const style2 = {
    background: 'linear-gradient(45deg, #f44336 30%, #ffb300 95%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 120,
    width: 120,
    padding: '0 15px',
    boxShadow: '0 3px 5px 2px #eeff41',
    fontWeight: 'Bold',
    fontSize: 20,
    borderRadius: 150
};

  
class ClockInOut extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.props = {
    //     }
    // }

    

render() {
    return (
        <div>
            <div className='clock'>
                {this.props.working === false
                ? 
                <h3>Welcome</h3>
                :
                 <h3>Clocked In  </h3>}
                
                <div className='time-display'>{this.props.time}</div>
                <div className='date-display'>{this.props.date}</div>
        
                {this.props.working === false
                ? 
                    <Button onClick={this.props.clockIn} style={style} >
                        CLOCK IN
                    </Button>
                :
                    <Button onClick={this.props.clockOut} style={style2}>
                        CLOCK OUT
                    </Button>
                }

            </div>
            
            

        </div>
    )
}

}



export default ClockInOut;
