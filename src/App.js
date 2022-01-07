import React from 'react';
import './App.css';
import Form from './Form.js';

export default class App extends React.Component {
  state = {
    formValues: {
      block: '',
      timerName: ''
    },
    timers: [{block:'1', name: 'South_Bubbler'}]
  };

  handleSubmit = (event) => {
    console.log(`A form was submitted`);
    console.log(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    let { timers } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Form onSubmit={this.handleSubmit} />
        </header><br />
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