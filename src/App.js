import React, {
  Component
} from "react"
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      deadline:'August 28th, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline:'December 25th, 2018'})
  }

  render() {
    return (
      <div className = "App">
        <div className = "App-Title"> Countdown to {this.state.deadline} </div>
        <div className = "Countdown-container">
          <div className = "Clock"> 14 days</div>
          <div className = "Clock"> 20 hours</div>
          <div className = "Clock"> 30 minutes</div>
          <div className = "Clock"> 59 seconds</div>
        </div>

        <div>
          <input placeholder = "new date"
          onChange={event => this.setState({newDeadline:event.target.value})}
          />
          <button onClick={()=> this.changeDeadline()}> Submit </button>
        </div>


      </div>
    )
  }
}

export default App;
