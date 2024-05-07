const menuIcon = document.querySelector('.menu-icon');
const mobNav = document.querySelector('.mob-nav');
const links = document.querySelectorAll('.mob-nav-links');

let isOpen = false;

menuIcon.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        mobNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    }
    else {
        mobNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
});

links.forEach((singleLink) => {
    singleLink.addEventListener('click', () => {
        isOpen = false;
        mobNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });
});