const menuIcon = document.querySelector('.menu-icon');
const mobNav = document.querySelector('.mob-nav');
const links = document.querySelectorAll('.mob-nav-links');

let flag = false;

menuIcon.addEventListener('click', () => {
    flag = !flag;

    if (flag) {
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
        flag = false;
        mobNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });
});