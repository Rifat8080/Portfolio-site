// Get form element and submit button
const form = document.getElementById('form');

// Add event listener to the form submission

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const textArea = document.getElementById('text_area');
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('text', textArea.value);
  form.submit();
});

// Load stored data on page load
window.addEventListener('load', () => {
  const storedName = localStorage.getItem('name');
  const storedEmail = localStorage.getItem('email');
  const storedText = localStorage.getItem('text');
  document.getElementById('name').value = storedName;
  document.getElementById('email').value = storedEmail;
  document.getElementById('text_area').value = storedText;
});
