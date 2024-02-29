const countdownEl = document.getElementById('countdown');
const entryForm = document.getElementById('entry-form');

// Set the giveaway end date (10 days from now)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 10);

// Update the countdown every second
const intervalId = setInterval(() => {
  const timeLeft = endDate.getTime() - Date.now();

  // Format the time
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Stop the countdown when it reaches zero
  if (timeLeft < 0) {
    clearInterval(intervalId);
    countdownEl.textContent = "Giveaway Ended!";
  }
}, 1000); 

