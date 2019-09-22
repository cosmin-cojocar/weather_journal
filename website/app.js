/* Global Variables */

/**
 * Helper function that return name of the month for a given index. Indexes start from zero
 *
 * @param {Number} monthIndex - Index of the month we want the name.
 * @return {String} representing month's name for our given index.
 */
const _getMonthAsString = monthIndex => {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][monthIndex];
};

// Create a new date instance dynamically with JS. It will be used as today's date
let date = new Date();
let todayDate = _getMonthAsString(date.getMonth()) + " " + date.getDate() + ", " + date.getFullYear();

// We set today's date in our readonly input field
const todayDateElement = document.getElementById("date");
todayDateElement.value = todayDate;
