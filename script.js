const currentDate = new Date();
console.log(currentDate); // This logs the current date and time to the console

const targetDate = new Date('2024-12-31T23:59:59'); // Replace with target
console.log(targetDate); // Check the target date in the console

const difference = targetDate - currentDate;
console.log(difference); // This will log the difference in milliseconds








// Cache DOM elements for countdown timer
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Function to update countdown timer
function updateCountdown(currentTime) {
  const difference = targetDate - currentTime;

  if (difference <= 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
    document.body.style.backgroundColor = "#f44336"; // Change background color
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update HTML elements with countdown values
  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}

// Initial setup for countdown timer
function setupCountdown() {
  const currentTime = new Date();
  updateCountdown(currentTime);

  // Set interval to call updateCountdown every 1 second
  const interval = setInterval(() => {
    const currentTime = new Date();
    updateCountdown(currentTime);
  }, 1000);
}

// Start countdown timer
setupCountdown();