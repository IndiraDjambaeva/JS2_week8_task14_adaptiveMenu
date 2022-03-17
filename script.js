const toggleButton = document.getElementsByClassName('menu-toggle')[0];
const navbar = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

