import React from 'react';
import { selectOptions } from '../helpers/selectOptions';

export default function TimerSelectInput(props) {
    return (
      <div>
        <label>
          Fight:&nbsp;
          <select name="timer-select" onChange={(e) => props.handleChange('timerName', e.target.value || null)}>
            <option value=""></option>
            {selectOptions.map(entry => {
              return <option value={entry.value}>{entry.name}</option>
            })}
          </select>
        </label>
        <br /><br />
      </div> 
    )
}