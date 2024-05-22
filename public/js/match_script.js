// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get all the "READY UP" buttons
  var readyButtons = document.querySelectorAll(".btn.draw-border");

  // Function to check if all buttons have been clicked
  function checkReady() {
    // Check if all buttons have the class "ready"
    var allReady = true;
    readyButtons.forEach(function (button) {
      if (!button.classList.contains("ready")) {
        allReady = false;
      }
    });

    // If all buttons have been clicked, make the table visible
    if (allReady) {
      document.getElementById("stats-table").style.display = "block";
    }
  }
// Function to update button text, add random number to table, and check readiness
function updateButton(button) {
  // Change button text to "READY"
  button.textContent = "READY";
  // Add the class "ready" to the button
  button.classList.add("ready");
  // Generate a random number between 1 and 1000
  var randomNumber = Math.floor(Math.random() * 1000) + 1;
  // Get the player's name
  var playerName = button.parentElement.querySelector(".card__name").innerText;
  // Determine the team based on the button's parent container
  var team = button.closest('.container').classList.contains('container-one') ? 'team1' : 'team2';
  // Get the tbody for the team
  var teamBody = document.getElementById(team);
  // Create a new row for the player
  var newRow = document.createElement("tr");
  // Add player's name to the first column
  var playerNameCell = document.createElement("td");
  playerNameCell.textContent = playerName;
  newRow.appendChild(playerNameCell);
  // Add player's wins to the second column (dummy value)
  var winsCell = document.createElement("td");
  winsCell.textContent = "100"; // Dummy value, replace with actual wins
  newRow.appendChild(winsCell);
  // Add player's losses to the third column (dummy value)
  var lossesCell = document.createElement("td");
  lossesCell.textContent = "50"; // Dummy value, replace with actual losses
  newRow.appendChild(lossesCell);
  // Add the random number to the fourth column
  var randomNumberCell = document.createElement("td");
  randomNumberCell.textContent = randomNumber;
  newRow.appendChild(randomNumberCell);
  // Append the new row to the team tbody
  teamBody.appendChild(newRow);
  // Check if all buttons have been clicked
  checkReady();
}



  // Add click event listeners to all "READY UP" buttons
  readyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Update button text and check readiness
      updateButton(this);
    });
  });
});


let wins = getElementById("wins");
let losses = 0;
