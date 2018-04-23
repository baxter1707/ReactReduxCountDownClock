import React, {Component} from 'react'
import './App.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state ={
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0

    }
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time',time)
  }


  render() {
    this.getTimeUntil(this.props.deadline)
    return(
      <div>
        <div className = "Countdown-container">
          <div className = "Clock"> {this.state.days} days</div>
          <div className = "Clock"> {this.state.hours} hours</div>
          <div className = "Clock"> {this.state.minutes} minutes</div>
          <div className = "Clock"> {this.state.seconds} seconds</div>
        </div>
      </div>
    )
  }
}


export default Clock;
