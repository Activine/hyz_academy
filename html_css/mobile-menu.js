window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

const closeMenu = document.querySelector('.nav__close');
const hamburger = document.querySelector('.hamburger-lines');
const navMenu = document.querySelector('.nav__list');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    closeMenu.classList.toggle('show');
})

navMenu.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    closeMenu.classList.remove('show');
})

closeMenu.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    closeMenu.classList.remove('show');
})

function updateWidgetAreaClassList() {
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', updateWidgetAreaClassList, false);

const allLinks = document.querySelectorAll('.nav__link')
console.log(allLinks);

navMenu.addEventListener('click', function(event) {
    allLinks.forEach(link => {
        link.classList.remove('nav__link-active');
    }) 
    event.target.classList.add('nav__link-active');
})

const dots = document.querySelector('.blog__slider-dots')
const allDots = document.querySelectorAll('.blog__slider-dot')

dots.addEventListener('click', function(event) {
    allDots.forEach(link => {
        link.classList.remove('blog__slider-active');
    })
    event.target.classList.add('blog__slider-active');
})

const submit = document.querySelector('.btn__form');
submit.addEventListener('click', function(event) {
    event.preventDefault();
})