const darkMode = document.querySelectorAll('#dark-mode');
const particles = document.querySelector('#particles-js');

darkMode.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        particles.classList.toggle('invert');
    });
});