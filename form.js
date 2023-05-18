// Load form data from local storage on page load
window.addEventListener('DOMContentLoaded', () => {
    const formData = localStorage.getItem('form_data');
    if (formData) {
      const { name, first_name, last_name, email, text_area } =
        JSON.parse(formData);
      document.getElementById('name').value = name || '';
      document.getElementById('first_name').value = first_name || '';
      document.getElementById('last_name').value = last_name || '';
      document.getElementById('email').value = email || '';
      document.getElementById('text_area').value = text_area || '';
    }
  });
  

