import React from "react";
import constants from "../constants.json";

export default function BlockTextInput({ handleChange, ...props }) {
  return (
    <div>
      <label>
        {constants.BLOCK_TEXT_INPUT_LABEL}&nbsp;
        <input
          type="number"
          onChange={(e) => handleChange("block", e.target.value)}
          {...props}
        />
      </label>
      <br />
    </div>
  );
}
