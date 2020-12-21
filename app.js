// SDMM Clock App

const myDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const myMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const suffixes = [
  'st',
  'nd',
  'rd',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'st',
  'nd',
  'rd',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'st'
];

// 12h Local Clock

// preload loal clock to avoid inital display delay of clock due to interval refresh
function earlyLocalClock() {
  let d = new Date();

  let currentTime = d.toLocaleTimeString();
  let currentDate =
    myDays[d.getDay()] +
    ',' +
    ' ' +
    myMonths[d.getMonth()] +
    ' ' +
    d.getDate() +
    suffixes[d.getDate()];

  document.getElementById('clock').innerHTML = currentTime;
  document.getElementById('date').innerHTML = currentDate;
  document.getElementById('clocktype').innerHTML = '--';
  document.getElementById('clocktype').disabled = true;
  localClock();
}

// 12h Logic & Display
function localClock() {
  //var newClock = setInterval(myLocalClock, 1000);
  function myLocalClock() {
    let d = new Date();

    let currentTime = d.toLocaleTimeString();
    let currentDate =
      myDays[d.getDay()] +
      ',' +
      ' ' +
      myMonths[d.getMonth()] +
      ' ' +
      d.getDate() +
      suffixes[d.getDate()];

    document.getElementById('clock').innerHTML = currentTime;
    document.getElementById('date').innerHTML = currentDate;
    document.getElementById('clocktype').innerHTML = '24h';
    document.getElementById('clocktype').disabled = false;
    document.getElementById('clocktype').onclick = function () {
      clearInterval(newClock);
      earlyMilClock();
    };
  }
}

// 24h Military Time Clock

// preload the mil clock to avoid inital display delay of clock due to interval refresh
function earlyMilClock() {
  let date = new Date();

  let currentTime = date.toTimeString();
  let currentDate =
    myDays[date.getDay()] +
    ',' +
    ' ' +
    myMonths[date.getMonth()] +
    ' ' +
    date.getDate() +
    suffixes[date.getDate()];

  document.getElementById('clock').innerHTML = currentTime;
  document.getElementById('date').innerHTML = currentDate;
  document.getElementById('clocktype').innerHTML = '--';
  document.getElementById('clocktype').disabled = true;
  milClock();
}

// 24h logic & Display

function milClock() {
  let d = new Date();

  let currentTime = d.toTimeString().slice(0, 8);
  let currentDate =
    myDays[d.getDay()] +
    ',' +
    ' ' +
    myMonths[d.getMonth()] +
    ' ' +
    d.getDate() +
    suffixes[d.getDate()];

  document.getElementById('clock').innerHTML = currentTime;
  document.getElementById('date').innerHTML = currentDate;
  document.getElementById('clocktype').innerHTML = '12h';
  document.getElementById('clocktype').disabled = false;
  document.getElementById('clocktype').onclick = function () {};
}

localClock();
milClock();

setInterval(() => {
  localClock();
  milClock();
}, 1000);
