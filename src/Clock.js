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
  componentWillMount(){
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline))
  }

  getTimeUntil(deadline){
    console.log(deadline)
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time',time)


    const seconds = Math.floor((time/1000) % 60)
    const minutes = Math.floor((time/1000/60)% 60)
    const hours = Math.floor(time/(1000*60*60) % 24)
    const days = Math.floor(time/(1000*60*60*24))
    console.log('seconds', seconds,'minutes', minutes, 'hours', hours, 'days', days)
    this.setState({days, hours, minutes, seconds})
  }


  render() {
    return(
      <div >
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
