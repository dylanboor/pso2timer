import React from "react";
import "./App.css";
import { findTimer, formatTimerDisplay } from "./helpers/helpers";
import BlockTextInput from "./Input/BlockTextInput";
import TimerButtons from "./Input/TimerButtons";
import constants from "./constants.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block: "",
      timers: [],
    };
    this.timer = 0;
  }

  handleChange = (target, value) => {
    this.setState({ [target]: value });
  };

  handleNew = (timer) => {
    let { block, timers } = this.state;
    let newTimers = [...timers];
    if (!block) {
      return;
    }
    console.log("Adding new kill timer until dead");
    newTimers.push({
      timerName: timer.value,
      block: block,
      time: 0,
      dead: false,
      respawn: timer.respawn,
    });
    this.setState({ timers: newTimers });

    if (this.timer === 0) {
      this.startTimer();
    }
  };

  handleKilled = (timer) => {
    let { timers } = this.state;
    let newTimers = [...timers];

    let result = findTimer(timer, newTimers);
    console.log(result);
    if (result && !result.dead) {
      newTimers[newTimers.indexOf(result)].clearTime = result.time;
      newTimers[newTimers.indexOf(result)].time = timer.respawn; // 300?
      newTimers[newTimers.indexOf(result)].dead = true;
    }

    this.setState({ timers: newTimers });
  };

  handleDelete = (index) => {
    let { timers } = this.state;
    let newTimers = [...timers];
    newTimers.splice(index, 1);
    this.setState({ timers: newTimers });

    console.log(this.state);
  };

  handleRestart = (timer) => {
    let { timers } = this.state;
    let newTimers = [...timers];

    let result = findTimer(timer, newTimers);

    if (result && result.dead) {
      newTimers[newTimers.indexOf(result)].clearTime = result.clearTime;
      newTimers[newTimers.indexOf(result)].time = 0;
      newTimers[newTimers.indexOf(result)].dead = false;
    }

    this.setState({ timers: newTimers });
  };

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  };

  countDown = () => {
    let { timers } = this.state;
    let newTimers = [...timers];
    newTimers.forEach((timer) => {
      if (timer.dead) {
        timer.time -= 1;
      } else {
        timer.time += 1;
      }
    });
    this.setState({ timers: newTimers });
  };

  // TODO: Install tailwind, typescript?
  render() {
    let { timers } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>{constants.TITLE_TEXT}</p>
          <TimerButtons id="timer-select-input" handleClick={this.handleNew} />
          <br />
          <BlockTextInput
            id="block-text-input"
            handleChange={this.handleChange}
          />
        </header>
        <br />
        <center>
          <table>
            <tbody>
              <tr>
                <th>Region/Block</th>
                <th>Timer Name</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
              {timers &&
                timers.length > 0 &&
                timers.map((timer, index) => (
                  <tr key={index}>
                    <td>{`${timer.timerName
                      .split("_")[0]
                      .substr(0, 2)
                      .toLowerCase()}${timer.block}`}</td>
                    <td>{timer.timerName.split("_")[1]}</td>
                    <td>
                      {formatTimerDisplay(
                        timer.time,
                        timer.dead,
                        timer.clearTime
                      )}
                    </td>
                    <td>
                      <button
                        className="actionButton"
                        id={`Killed_Button-${index}`}
                        onClick={() => this.handleKilled(timer, index)}
                      >
                        💀
                      </button>
                      <button
                        className="actionButton"
                        id={`Restart_Button-${index}`}
                        onClick={() => this.handleRestart(timer, index)}
                      >
                        🔄
                      </button>
                      <button
                        className="actionButton"
                        id={`Delete_Button-${index}`}
                        onClick={() => this.handleDelete(index)}
                      >
                        &nbsp;&#128465;&nbsp;
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
