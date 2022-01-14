import React from 'react';
import './App.css';
import { findTimer, formatTimerDisplay } from './helpers/helpers';
import BlockTextInput from './Input/BlockTextInput';
import TimerSelectInput from './Input/TimerSelectInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block: '',
      timerName: '',
      timers: []
    };
    this.timer = 0;
  }


  handleChange = (target, value) => {
    this.setState({ [target]: value});
  };

  handleStart = () => {
    let { block, timerName, timers } = this.state;
    let newTimers = [...timers];

    // TODO: ? If same timer already exists, what do?
    // if (findTimer({block: block, timerName: timerName}, newTimers)) {
    //   console.log('found already');
    //   let index = findTimerIndex({block: block, timerName: timerName}, newTimers);
    //   console.log(index)
    //   index && newTimers.splice(index);
    //   newTimers.push({ timerName: timerName, block: block, time: 0 });
    //   this.setState({timers: newTimers})
    // } else {
    //   console.log(`adding new timer`);
      console.log('Adding new kill timer until dead');
      newTimers.push({ timerName: timerName, block: block, time: 0, dead: false }); 
      this.setState({timers: newTimers});
    // }

    if (this.timer === 0) {
      this.startTimer();
    }
  }

  handleKilled = () => {
    let { block, timerName, timers } = this.state;
    let newTimers = [...timers];

    let result = findTimer({block: block, timerName: timerName}, newTimers);
    console.log(result);
    if (result && !result.dead) {
      console.log(`Killed- Setting respawn timer to 10 minutes for ${timerName} on Block ${block}`);
      newTimers[newTimers.indexOf(result)].time = 600;
      newTimers[newTimers.indexOf(result)].dead = true;
    }
    
    this.setState({timers: newTimers});
  }

  handleDelete = (index) => {
    let { timers } = this.state;
    let newTimers = [...timers];
    newTimers.splice(index, 1);
    this.setState({timers: newTimers});

    console.log(this.state);
  }

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    let { timers } = this.state;
    let newTimers = [...timers];
    newTimers.forEach(timer => {
      if (timer.dead) {
        timer.time -= 1;
      } else {
        timer.time += 1;
      }
    });
    this.setState({timers: newTimers});
  }

  // TODO if click a table row, select that block+dropdown state
  render() {
    let { timers } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>PSO2 Vet Timers</p>
          <BlockTextInput handleChange={this.handleChange} />
          <TimerSelectInput handleChange={this.handleChange} />
          <center>
            <button id="Start_Button" onClick={() => this.handleStart()}>Start</button>
            <button id="Dead_Button" onClick={() => this.handleKilled()}>Dead</button>
          </center>
          <br />
        </header>
        <br />
        <center>
          <table>
            <tbody>
              <tr>
                <th>Region/Block</th>
                <th>Timer Name</th>
                <th>Time</th>
                {/* <th>Copy</th> */}
                <th>Delete</th>
              </tr>
              {timers && timers.length > 0 && 
                timers.map((timer, index) => (
                  <tr key={index}>
                    <td>{`${timer.timerName.split("_")[0][0].toLowerCase()}${timer.block}`}</td>
                    <td>{timer.timerName.split("_")[1]}</td>
                    <td>{formatTimerDisplay(timer.time, timer.dead)}</td>
                    {/* <td>C</td> */}
                    <td>
                      <button id={`Delete_Button-${index}`} onClick={() => this.handleDelete(index)}>
                        x
                      </button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}