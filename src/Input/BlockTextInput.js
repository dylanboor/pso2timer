import React from 'react';
import constants from '../constants.json';

export default function BlockTextInput(props) {
  return (
    <div>
      <label>
        {constants.BLOCK_TEXT_INPUT_LABEL}&nbsp;
        <input type="text" name="block-text-input" onChange={(e) => props.handleChange('block', e.target.value)} />
      </label>
      <br />
    </div>
  );
}