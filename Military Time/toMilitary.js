//Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

function toMilitary (time) {
  var colonIndex = time.indexOf(':');
  if (colonIndex === 1) {
    time = '0' + time;
  }
  if (time.slice(-2) === 'am') {
    time = time.slice(0, time.length - 2);
    if (time.slice(0,2) === '12') {
      time = '00' + time.slice(2);
    }
  } else if (time.slice(-2) === 'pm') {
    time = time.slice(0, time.length - 2);
    if (time.slice(0, 2) !== '12') {
      time = 12 + Number(time.slice(0, 2)) + time.slice(2);
    }
  }
  return time;
}