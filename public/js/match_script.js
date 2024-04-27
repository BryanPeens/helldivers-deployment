
  // Wait for the DOM to fully load
  document.addEventListener("DOMContentLoaded", function() {
    // Get all the "READY UP" buttons
    var readyButtons = document.querySelectorAll(".btn.draw-border");

    // Function to check if all buttons have been clicked
    function checkReady() {
      // Check if all buttons have the class "ready"
      var allReady = true;
      readyButtons.forEach(function(button) {
        if (!button.classList.contains("ready")) {
          allReady = false;
        }
      });

      // If all buttons have been clicked, make the table visible
      if (allReady) {
        document.getElementById("stats-table").style.display = "block";
      }
    }

    // Function to update button text and check readiness
    function updateButton(button) {
      // Change button text to "READY"
      button.textContent = "READY";
      // Add the class "ready" to the button
      button.classList.add("ready");
      // Check if all buttons have been clicked
      checkReady();
    }

    // Add click event listeners to all "READY UP" buttons
    readyButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Update button text and check readiness
        updateButton(this);
      });
    });
  });