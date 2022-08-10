import React from "react";
import { selectOptions } from "../helpers/selectOptions";
import constants from "../constants.json";

export default function TimerButtons({ handleClick, ...props }) {
  return (
    <div>
      {constants.TIMER_SELECT_INPUT_LABEL}&nbsp;
      {selectOptions.map((entry) => {
        return (
          <button
            name={`timer-${entry.value}`}
            key={entry.value}
            onClick={(e) => handleClick(entry.value)}
            {...props}
          >
            {entry.name}
          </button>
        );
      })}
      <br />
      <br />
    </div>
  );
}
