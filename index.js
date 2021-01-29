const hamburgerNav = document.querySelector('.hamburger__nav');
const hamburgerIcon = document.querySelector('.hamburger__nav i');
const navList = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');

let isNavOpen = false;

hamburgerNav.addEventListener('click', () => {
    navList.classList.toggle('nav__list-visible');
    if (isNavOpen) {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
        isNavOpen = false;
    } else {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
        isNavOpen = true;
    }
});

navLink.forEach(cur => {
    cur.addEventListener('click', () => {
        navList.classList.remove('nav__list-visible');
    });
});
