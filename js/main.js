const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    // Alterna la visibilidad del menú
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
