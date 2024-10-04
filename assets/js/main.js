// Select hamburger icon and nav--item
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');
const navItem = document.querySelector('.nav--item');

// Function to show nav menu
function showNav() {
    navItem.classList.add('active'); // Show nav
    hamburgerIcon.style.display = 'none'; // Hide hamburger icon
    closeIcon.style.display = 'block'; // Show close icon
}

// Function to hide nav menu
function hideNav() {
    navItem.classList.remove('active'); // Hide nav
    hamburgerIcon.style.display = 'block'; // Show hamburger icon
    closeIcon.style.display = 'none'; // Hide close icon
}

// Add event listeners
hamburgerIcon.addEventListener('click', showNav); // On hamburger click, show nav
closeIcon.addEventListener('click', hideNav); // On close icon click, hide nav