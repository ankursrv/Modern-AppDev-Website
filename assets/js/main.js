document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const navItems = document.querySelector('.nav--item');

    hamburgerIcon.addEventListener('click', () => {
        navItems.classList.toggle('active'); // Add class to show menu
        hamburgerIcon.style.display = 'none'; // Hide hamburger icon
        closeIcon.style.display = 'flex'; // Show close icon
    });

    closeIcon.addEventListener('click', () => {
        navItems.classList.toggle('active'); // Remove class to hide menu
        hamburgerIcon.style.display = 'flex'; // Show hamburger icon
        closeIcon.style.display = 'none'; // Hide close icon
    });
});
