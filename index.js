const hamburgerButton = document.querySelector('.menu-bar-mobile');
const mobileMenu = document.querySelector('.menu-list-mobile');
const closeButton = document.querySelector('.menu-bar-close');
const menuItems = document.querySelectorAll('.menu-item-mobile');
const overlay = document.querySelector('.overlay');
mobileMenu.style.display = 'none';
closeButton.style.display = 'none';
overlay.style.display = 'none';

hamburgerButton.addEventListener('click', () => {
  openMobileMenu();
});

closeButton.addEventListener('click', () => {
  closeMobileMenu();
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    const sectionId = menuItem.dataset.section;
    const section = document.querySelector(`.${sectionId}`);

    if (section) {
      // Hide all sections
      document.querySelectorAll('.section').forEach((section) => {
        section.style.display = 'none';
      });

      // Display the selected section
      section.style.display = 'block';
    }

    closeMobileMenu(); // Close the mobile menu
  });
});

function openMobileMenu() {
  mobileMenu.style.display = 'block';
  closeButton.style.display = 'block';
  hamburgerButton.style.display = 'none';
  overlay.style.display = 'block'; // Show the overlay
}

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  closeButton.style.display = 'none';
  hamburgerButton.style.display = 'block';
  overlay.style.display = 'none'; // Hide the overlay
}
