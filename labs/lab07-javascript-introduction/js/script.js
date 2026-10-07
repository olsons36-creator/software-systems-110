// ============================================================
//  JavaScript City Broadcast Terminal — script.js
//  Beginner JavaScript Lab
//  Concepts: string, number, boolean, if statement, for loop
// ============================================================
"use strict"; // Do not remove


// ---- PART 1: BOOLEAN — Day/Night Mode ----
// A boolean holds one of two values: true or false.
// We use it here to track whether day mode is ON or OFF.

/*****************************************************************
 * 2. CRITICAL ERROR:
 * The website will not run because isDayMode has not been declared.
 * JavaScript requires variables to be declared before they are used.
 *
 * Your mission:
 * Add the correct keyword so isDayMode becomes a proper variable.
 *****************************************************************/
isDayMode = false;   // boolean: starts as false (night mode is default)



// ---- PART 2: FUNCTION — Toggle Day/Night Mode ----
// This function runs when the toggle button is clicked.
// It uses an IF STATEMENT to check the boolean and switch modes.

function toggleDayNight() {

  /*****************************************************************
   * 3. LOGIC FAILURE:
   * Clicking the button does not actually switch between true
   * and false.
   *
   * Your mission:
   * Fix this line so the boolean is flipped every time the button
   * is clicked.
   *****************************************************************/
  isDayMode = isDayMode;

  /*****************************************************************
   * 4. CONNECTION FAILURE:
   * JavaScript is trying to find an HTML element that does not
   * exist.
   *
   * Your mission:
   * Check the HTML file and find the correct id for the page body.
   *****************************************************************/
  const body = document.getElementById("pageBody");
  const toggleBtn = document.getElementById("toggle-btn");

  /*****************************************************************
   * 5. DECISION-MAKING FAILURE:
   * The IF statement is using the wrong operator.
   * Instead of checking a value, it is changing a value.
   *
   * Your mission:
   * Replace the incorrect operator with a strict comparison
   * operator.
   *****************************************************************/
  if (isDayMode = true) {

    // Day mode: add the "day-mode" CSS class to the body
    body.classList.add("day-mode");
    toggleBtn.textContent = "☾ Night Mode";

  } else {

    // Night mode: remove the "day-mode" CSS class from the body
    body.classList.remove("day-mode");
    toggleBtn.textContent = "☀ Day Mode";
  }
}



// ---- PART 3: FUNCTION — Run the Broadcast ----
// This function runs when the Broadcast button is clicked.
// It uses a STRING, a NUMBER, and a FOR LOOP.

function runBroadcast() {

  /*****************************************************************
   * 6. INPUT FAILURE:
   * The program is grabbing the input box itself instead of
   * grabbing the text that the user typed into the input box.
   *
   * Your mission:
   * Something is missing here. Update this line so the user's message can be read correctly.
   *****************************************************************/
  const message = document.getElementById("message-input");

  // NUMBER: grab the count from the number input field
  // parseInt() converts the text from the input into a whole number.
  const count = parseInt(document.getElementById("count-input").value);

  /*****************************************************************
   * 7. VALIDATION FAILURE:
   * The alert is being shown at the wrong time.
   * Users should only see the alert when they enter a number
   * smaller than 1.
   *
   * Your mission:
   * Repair the condition so valid numbers are accepted.
   *****************************************************************/
  if (isNaN(count) || count >= 1) {
    alert("Please enter a number greater than 0.");
    return;
  }

  // Get the terminal output area so we can write into it
  const outputArea = document.getElementById("terminal-output");

  // Clear any previous output before starting a new broadcast
  outputArea.innerHTML = "";

  /*****************************************************************
   * 8. LOOP FAILURE:
   * The broadcast terminal is not producing the correct number
   * of messages.
   *
   * Your mission:
   * Repair the loop condition so every broadcast is displayed.
   *****************************************************************/
  for (let i = 1; i < count; i++) {

    // Create a new paragraph element for each line of output
    const line = document.createElement("p");
    line.classList.add("output-line");

    // Set the text: terminal-style response with line number and message
    line.textContent = "[broadcast::" + i + "]  " + message;

    // Add the line to the terminal output area
    outputArea.appendChild(line);
  }
}