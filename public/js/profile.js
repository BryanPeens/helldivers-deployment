// Avatar selection handling
document.addEventListener("DOMContentLoaded", function() {
  event.preventDefault();
  // Get all avatar icons
  var avatarIcons = document.querySelectorAll('.avatar_image');

  // Add click event listener to each avatar icon
  avatarIcons.forEach(function(avatarIcon) {
    avatarIcon.addEventListener('click', function() {
      // Get the src attribute of the clicked avatar icon
      var src = avatarIcon.getAttribute('src');
      // Get the main avatar image element
      var mainAvatarImage = document.querySelector('.card__image_1');
      // Update the src attribute of the main avatar image
      if (mainAvatarImage) {
        mainAvatarImage.setAttribute('src', src);
      }
    });
  });
});

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

const newFormHandler = async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the values of inputs for project name, funding, and description
  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  // Retrieve the URLs of the selected images
  const stratagemImage = document.getElementById('stratagem').getAttribute('src');
  const orbitalCannonImage = document.getElementById('orbital_cannon').getAttribute('src');
  const hangarImage = document.getElementById('hangar').getAttribute('src');
  const bridgeImage = document.getElementById('bridge').getAttribute('src');

  // Retrieve the URL for the selected avatar image
  const avatarImage = document.getElementById('main-avatar-image').getAttribute('src');

  // Check if all required fields are filled
  if (name && needed_funding && description) {
    // If all fields are filled, send a POST request to the server
    const response = await fetch(`/api/projects`, {
      method: 'POST', // Using the POST method to create a new resource
      body: JSON.stringify({ 
        name, 
        needed_funding, 
        description,
        stratagemImage,
        orbitalCannonImage,
        hangarImage,
        bridgeImage,
        avatarImage
      }), // Serialize data as JSON and send it in the request body
      headers: {
        'Content-Type': 'application/json', // Specify that the content type of the request body is JSON
      },
    });

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      // If successful, redirect the user to '/profile'
      document.location.replace('/profile');
    } else {
      // If the request was not successful, show an alert
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
