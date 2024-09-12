let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-btn');

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});