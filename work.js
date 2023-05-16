// Function to open a modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Add event listeners to the buttons that open the modals
document.getElementById('popbtn1').addEventListener('click', () => {
  openModal('myModal1');
});

document.getElementById('popbtn2').addEventListener('click', () => {
  openModal('myModal2');
});

document.getElementById('popbtn3').addEventListener('click', () => {
  openModal('myModal3');
});

document.getElementById('popbtn4').addEventListener('click', () => {
  openModal('myModal4');
});

document.getElementById('popbtn5').addEventListener('click', () => {
  openModal('myModal5');
});

document.getElementById('popbtn6').addEventListener('click', () => {
  openModal('myModal6');
});

// Add event listeners to the close buttons in the modals

const closeButtons = document.getElementsByClassName('close');
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', () => {
    closeModal(this.closest('.modal1').id);
  });
}

// Close the modal when the user clicks outside the modal content
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal1')) {
    closeModal(event.target.id);
  }
});
