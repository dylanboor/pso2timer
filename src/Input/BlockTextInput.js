import React from 'react';

export default function BlockTextInput(props) {
  return (
    <div>
      <label>
        Block:&nbsp;
        <input type="text" name="block-input" onChange={(e) => props.handleChange('block', e.target.value)} />
      </label>
      <br />
    </div> 
  );
}