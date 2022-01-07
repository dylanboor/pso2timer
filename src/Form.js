import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block: '',
      timerName: ''
    };
  }

  // handleSubmit = (event) => {
  //   console.log(`A form was submitted`);
  //   console.log(this.state);
  //   event.preventDefault();
  // }

  render() {
    let { block, timerName } = this.state;
    return (
      <div>
        <p>
          PSO2 Vet Timers
        </p>
        <form id="form" onSubmit={this.props.onSubmit} align="left" name="input-form">
          <label>
            Block:&nbsp;
            <input type="text" name="block-input" onChange={(e) => this.setState({block: e.target.value})} value={block}/>
          </label>
          <br />
          <label>
            Fight:&nbsp;
            <select name="timer-select" onChange={(e) => this.setState({timerName: e.target.value || null})} value={timerName}>
              <option value=""></option>
              <option value="South_Bubbler">S: Bubbler</option>
              <option value="South_Dustyl">S: Dustyl</option>
              <option value="South_Svaulon">S: Svaulon</option>
              <option value="North_Bubbler">N: Bubbler</option>
              <option value="North_Eldi">N: Eldi</option>
              <option value="North_Lizentos">N: Lizentos</option>
              <option value="West_Fortos">W: Fortos</option>
              <option value="West_Kelkundo">W: Kelkundo</option>
              <option value="Central_Nogleth">C: Nogleth</option>
              <option value="Central_Fortos">C: Fortos</option>
              <option value="Central_Svia">C: Svia</option>
            </select>
          </label>
          <br /><br />
          <center><input form="form" type="submit" value="Submit"/></center><br />
        </form>
      </div> 
    )
  }
}