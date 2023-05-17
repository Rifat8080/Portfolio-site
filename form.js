const validateForm = (event) => {
  event.preventDefault(); // Prevent form submission for now

  // Perform email validation
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  const lowerCaseEmail = email.toLowerCase();
  if (email !== lowerCaseEmail) {
    document.getElementById('error-message').textContent =
      'Please enter a lowercase email address.';
    return; // Stop further processing
  }

  // Clear error message and submit the form if validation passes
  document.getElementById('error-message').textContent = '';
  event.target.submit();
};
