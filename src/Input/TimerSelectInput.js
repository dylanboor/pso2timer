import React from 'react';

export default function TimerSelectInput(props) {
    return (
      <div>
        <label>
          Fight:&nbsp;
          <select name="timer-select" onChange={(e) => props.handleChange('timerName', e.target.value || null)}>
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
      </div> 
    )
}