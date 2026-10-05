// ============================================================
//  JavaScript City Broadcast Terminal — script.js
//  Beginner JavaScript Lab
//  Concepts: string, number, boolean, if statement, for loop
// ============================================================


// ---- SECTION 1: BOOLEAN — Day/Night Mode ----
// A boolean holds one of two values: true or false.
// We use it here to track whether day mode is ON or OFF.

var isDayMode = false;   // boolean: starts as false (night mode is default)


// ---- SECTION 2: FUNCTION — Toggle Day/Night Mode ----
// This function runs when the toggle button is clicked.
// It uses an IF STATEMENT to check the boolean and switch modes.

function toggleDayNight() {

  // Flip the boolean: if it was false, make it true. If true, make it false.
  isDayMode = !isDayMode;

  // Get references to the page body and the toggle button
  var body      = document.getElementById("page-body");
  var toggleBtn = document.getElementById("toggle-btn");

  // IF STATEMENT: check which mode we're switching to
  if (isDayMode === true) {
    // Day mode: add the "day-mode" CSS class to the body
    body.classList.add("day-mode");
    toggleBtn.textContent = "☾ Night Mode";
  } else {
    // Night mode: remove the "day-mode" CSS class from the body
    body.classList.remove("day-mode");
    toggleBtn.textContent = "☀ Day Mode";
  }
}


// ---- SECTION 3: FUNCTION — Run the Broadcast ----
// This function runs when the Broadcast button is clicked.
// It uses a STRING, a NUMBER, and a FOR LOOP.

function runBroadcast() {

  // STRING: grab the text from the message input field
  // A string is any piece of text, wrapped in quotes when written directly.
  var message = document.getElementById("message-input").value;

  // NUMBER: grab the count from the number input field
  // parseInt() converts the text from the input into a whole number.
  var count = parseInt(document.getElementById("count-input").value);

  // Basic check: make sure count is a valid positive number
  if (isNaN(count) || count < 1) {
    alert("Please enter a number greater than 0.");
    return;
  }

  // Get the terminal output area so we can write into it
  var outputArea = document.getElementById("terminal-output");

  // Clear any previous output before starting a new broadcast
  outputArea.innerHTML = "";

  // FOR LOOP: repeat the broadcast "count" times
  // i starts at 1, keeps going while i <= count, and goes up by 1 each time
  for (var i = 1; i <= count; i++) {

    // Create a new paragraph element for each line of output
    var line = document.createElement("p");
    line.classList.add("output-line");

    // Set the text: terminal-style response with line number and message
    line.textContent = "[broadcast::" + i + "]  " + message;

    // Add the line to the terminal output area
    outputArea.appendChild(line);
  }
}