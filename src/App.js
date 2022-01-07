import React from 'react';
import './App.css';
import BlockTextInput from './Input/BlockTextInput';
import TimerSelectInput from './Input/TimerSelectInput';

export default class App extends React.Component {
  state = {
    timers: []
  };

  handleChange = (target, value) => {
    this.setState({ [target]: value});
  };

  handleSubmit = () => {
    console.log(`A form was submitted`);
    console.log(this.state);
  }

  render() {
    let { timers } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>PSO2 Vet Timers</p>
          <BlockTextInput handleChange={this.handleChange} />
          <TimerSelectInput handleChange={this.handleChange} />
          <center>
            <button onClick={this.handleSubmit}>Start</button>
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
                <th>Copy</th>
                <th>Delete</th>
              </tr>
              {timers && timers.length > 0 && 
                timers.map((timer, index) => (
                  <tr key={index}>
                    <td>{`${timer.name.split("_")[0][0].toLowerCase()}${timer.block}`}</td>
                    <td>{timer.name.split("_")[1]}</td>
                    <td>15:00</td>
                    <td></td>
                    <td>x</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}