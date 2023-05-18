// Get form element and submit button
const form = document.getElementById('form');
const submitButton = document.getElementById('contact-submit');

// Add event listener to the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get input values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const textArea = document.getElementById('text_area');

  // Store the form data in local storage
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('text', textArea.value);

  // Submit the form
  form.submit();
});

// Load stored data on page load
window.addEventListener('load', function() {
  const storedName = localStorage.getItem('name');
  const storedEmail = localStorage.getItem('email');
  const storedText = localStorage.getItem('text');

  // Populate form fields with stored data
  document.getElementById('name').value = storedName;
  document.getElementById('email').value = storedEmail;
  document.getElementById('text_area').value = storedText;
});
