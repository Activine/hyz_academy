export function scrollApp() {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
} 

export function createBurger() {
  const closeMenu = document.querySelector('#nav__close');
  const hamburger = document.querySelector("#hamburger-lines"); 
  const navMenu = document.querySelector('#nav__list'); 
  
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    closeMenu.classList.toggle("show");
  });
  
  navMenu.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    closeMenu.classList.remove("show");
  });
  
  closeMenu.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    closeMenu.classList.remove("show");
  });
  
  function updateWidgetAreaClassList() {
    if (window.innerWidth >= 768) {
      navMenu.classList.remove("active");
      closeMenu.classList.remove("show");
    }
  }
  
  window.addEventListener("resize", updateWidgetAreaClassList, false);
  
  const allLinks = document.querySelectorAll('.nav__link');
  
  navMenu.addEventListener("click", function (event) {
    allLinks.forEach((link) => {
      link.classList.remove('nav__link-active');
    });
    
    event.target.classList.add('nav__link-active');
  });
}
