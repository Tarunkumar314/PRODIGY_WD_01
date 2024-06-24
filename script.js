// Change background color on scroll
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var main = document.querySelector('main');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) { // Adjust as needed
    header.style.backgroundColor = '#555';
  } else {
    header.style.backgroundColor = '#333';
  }
});

// Optionally, change color of menu items when scrolled or hovered
var navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(function(navLink) {
  navLink.addEventListener('mouseover', function() {
    this.style.color = '#ff7f50'; // Change color on hover
  });

  navLink.addEventListener('mouseleave', function() {
    this.style.color = '#fff'; // Revert color on mouse leave
  });
});
