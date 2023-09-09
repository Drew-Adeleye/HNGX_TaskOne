const currrentDayOfTheWeekEl = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeEl = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

const DateObject = new Date();

setInterval(function () {
  currentUTCTimeEl.innerHTML = Date.now();
}, 1000); // Update every 1 second

function getDayOfTheWeek() {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayIndex = DateObject.getDay();
  const currentDay = daysOfTheWeek[currentDayIndex];

  return currentDay;
}

currrentDayOfTheWeekEl.innerHTML = getDayOfTheWeek();
