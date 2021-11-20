
function timeConversion(s) {
    // Write your code here
 const modifier = s.slice(-2);
 const time = s.slice(0, s.length-2);

  let [hours, minutes, seconds] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}:${seconds}`;

}
