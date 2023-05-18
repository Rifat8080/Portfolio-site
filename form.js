const smallElement = document.getElementById('error');
const emailElement = document.getElementById('email_id');
const formElement = document.getElementById('form_id');

formElement.addEventListener('submit', (event) => {
  if (emailElement.value.toLowerCase() !== emailElement.value) {
    event.preventDefault();
    smallElement.innerText = 'please type all email charaters in lowercase. form was not submitted';
  }
});