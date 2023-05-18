// Load form data from local storage on page load
window.addEventListener('DOMContentLoaded', () => {
  const formData = localStorage.getItem('form_data');
  if (formData) {
    const {
      name, firstName, lastName, email, textArea,
    } = JSON.parse(formData);
    document.getElementById('name').value = name || '';
    document.getElementById('first_name').value = firstName || '';
    document.getElementById('last_name').value = lastName || '';
    document.getElementById('email').value = email || '';
    document.getElementById('text_area').value = textArea || '';
  }
});
