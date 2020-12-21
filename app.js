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

let isMilitaryTime = false;

function displayTimeAndDate() {
  let date = new Date();

  const twelveHourTime = date.toLocaleTimeString();
  const twentyFourHourTime = (currentTime = date.toTimeString().slice(0, 8));
  const currentDate =
    myDays[date.getDay()] +
    ',' +
    ' ' +
    myMonths[date.getMonth()] +
    ' ' +
    date.getDate() +
    suffixes[date.getDate()];

  const dateDisplay = document.getElementById('date');
  dateDisplay.textContent = currentDate;
  const clockDisplay = document.getElementById('clock');
  clockDisplay.textContent =
    isMilitaryTime === false ? twelveHourTime : twentyFourHourTime;
}

const changeTimeDisplayButton = document.getElementById('clocktype');

changeTimeDisplayButton.addEventListener('click', changeTimeDisplay);
changeTimeDisplayButton.textContent = 'Display 24 HR Time';

function changeTimeDisplay() {
  isMilitaryTime = !isMilitaryTime;
  changeTimeDisplayButton.textContent =
    isMilitaryTime === false ? 'Display 24 HR Time' : 'Display 12 HR Time';
}
displayTimeAndDate();

setInterval(displayTimeAndDate, 1000);
