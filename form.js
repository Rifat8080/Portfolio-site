// Data validation
const smallElement = document.getElementById('error-message');
const emailElement = document.getElementById('email');
const formElement = document.getElementById('form_id');

formElement.addEventListener('submit', (event) => {
  if (emailElement.value.toLowerCase() !== emailElement.value) {
    event.preventDefault();
    smallElement.innerText = 'please type all email charaters in lowercase.';
  }
});

// Data Local storage

const nameElement = document.getElementById('name');
const textareaElement = document.getElementById('text');

formElement.addEventListener('input', () => {
  const formData = {
    name: nameElement.value,
    email: emailElement.value,
    message: textareaElement.value,
  };
  localStorage.setItem('contactForm', JSON.stringify(formData));
});

function showData() {
  const userData = JSON.parse(localStorage.getItem('contactForm'));
  if (userData) {
    nameElement.value = userData.name;
    emailElement.value = userData.email;
    textareaElement.value = userData.message;
  }
}
showData()

