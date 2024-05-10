const darkMode = document.querySelectorAll('#dark-mode');
const particles = document.querySelector('#particles-js');

darkMode.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        particles.classList.toggle('invert');
        
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
});

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    particles.classList.add('invert');
}
else if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.remove('light-mode');
    particles.classList.remove('invert');
}