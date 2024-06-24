const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('#navbar ul');

mobileMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('showing');
});

// Change background color on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) { // Adjust as needed
    header.style.backgroundColor = '#f8f8f8';
    header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
});
