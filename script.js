function updateTimeAndDay() {
  const now = new Date();
  // Update current UTC time
  const timeElement = document.getElementById("currentTime");
  timeElement.textContent = now.toUTCString();
  // Update Current Day
  const dayElement = document.getElementById("currentDay");
  // 0 represents sunday
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  dayElement.textContent = days[now.getUTCDay()];
}

window.onload = function () {
  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
};

// test for natural dimensions
console.log(document.getElementById("profilePicture").naturalWidth); //300
console.log(document.getElementById("profilePicture").naturalHeight); //480
