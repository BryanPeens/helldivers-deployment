// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class 'stratagem-option'
    var stratagemOptions = document.querySelectorAll('.stratagem-option');

    // Add click event listener to each stratagem option
    stratagemOptions.forEach(function(stratagemOption) {
        // Add click event listener
        stratagemOption.addEventListener('click', function() {
            // Get the image inside the clicked label
            var image = stratagemOption.querySelector('img');
            // Get the src attribute of the image
            var src = image.getAttribute('src');
            // Get the target image element
            var targetImage = document.getElementById('stratagem');
            // Update the src attribute of the target image
            if (targetImage) {
                targetImage.setAttribute('src', src);
            }
        });
    });

    // Get all elements with class 'orbital-cannon-option'
    var orbitalCannonOptions = document.querySelectorAll('.orbital-cannon-option');

    // Add click event listener to each orbital cannon option
    orbitalCannonOptions.forEach(function(orbitalCannonOption) {
        // Add click event listener
        orbitalCannonOption.addEventListener('click', function() {
            // Get the image inside the clicked label
            var image = orbitalCannonOption.querySelector('img');
            // Get the src attribute of the image
            var src = image.getAttribute('src');
            // Get the target image element
            var targetImage = document.getElementById('orbital_cannon');
            // Update the src attribute of the target image
            if (targetImage) {
                targetImage.setAttribute('src', src);
            }
        });
    });

    // Get all elements with class 'hangar-option'
    var hangarOptions = document.querySelectorAll('.hangar-option');

    // Add click event listener to each hangar option
    hangarOptions.forEach(function(hangarOption) {
        // Add click event listener
        hangarOption.addEventListener('click', function() {
            // Get the image inside the clicked label
            var image = hangarOption.querySelector('img');
            // Get the src attribute of the image
            var src = image.getAttribute('src');
            // Get the target image element
            var targetImage = document.getElementById('hangar');
            // Update the src attribute of the target image
            if (targetImage) {
                targetImage.setAttribute('src', src);
            }
        });
    });

    // Get all elements with class 'bridge-option'
    var bridgeOptions = document.querySelectorAll('.bridge-option');

    // Add click event listener to each bridge option
    bridgeOptions.forEach(function(bridgeOption) {
        // Add click event listener
        bridgeOption.addEventListener('click', function() {
            // Get the image inside the clicked label
            var image = bridgeOption.querySelector('img');
            // Get the src attribute of the image
            var src = image.getAttribute('src');
            // Get the target image element
            var targetImage = document.getElementById('bridge');
            // Update the src attribute of the target image
            if (targetImage) {
                targetImage.setAttribute('src', src);
            }
        });
    });
});