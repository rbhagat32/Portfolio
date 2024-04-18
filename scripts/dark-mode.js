const darkMode = document.querySelectorAll('#dark-mode');

darkMode.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});