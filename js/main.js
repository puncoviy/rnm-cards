const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');
const menuLinks = document.querySelectorAll('.header__menu-item');

const profileBtn = document.querySelector('.header__profile');
const profileIcon = document.querySelector('.header__profile-icon');
const profileMenu = document.querySelector('.header__profile-link');

const navLink = document.querySelectorAll('.section__navigation-link');

burgerBtn.addEventListener('click', function(){
    profileIcon.classList.remove('active');
    profileMenu.classList.remove('active');
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
})

menuLinks.forEach (el => el.addEventListener('click', function(){
    menuLinks.forEach (el => el.classList.remove('active'));
    el.classList.add('active');
    burgerIcon.classList.remove('active');
    menuList.classList.remove('active');
}))

profileBtn.addEventListener('click', function(){
    burgerIcon.classList.remove('active');
    menuList.classList.remove('active');
    profileIcon.classList.toggle('active');
    profileMenu.classList.toggle('active');
})

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        burgerIcon.classList.remove('active');
        menuList.classList.remove('active');
        profileIcon.classList.remove('active');
        profileMenu.classList.remove('active');
    }
})

navLink.forEach (el => el.addEventListener('click', function(event){
    event.preventDefault();
    navLink.forEach (el => el.classList.remove('active'));
    el.classList.add('active');
}))
