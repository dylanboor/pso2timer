/**
 * 
 * @param {*} obj must contain block and timerName
 * @param {*} array 
 * @returns the element in the array that matches obj.block & obj.timerName
 */
export const findTimer = (obj, array) => {
  return array.find((element) => {
    if (element.block === obj.block && element.timerName === obj.timerName) {
      return true;
    } else {
      return false;
    }
  })
}

/**
 * 
 * @param {*} seconds 
 * @returns string in MM:SS format, accounting for negative seconds, with lowest value of -5min
 */
export const formatTimer = (seconds) => {
  let date = new Date(null);
  if (seconds > 0) {
    date.setSeconds(seconds);
    return date.toISOString().substr(14,5);
  } else {
    if (seconds < -300) {
      seconds = -300;
    }

    date.setSeconds(-1 * seconds);
    return "-"+date.toISOString().substr(14,5);
  }
}