export function scrollApp() {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
} 

export function burger(close, hamburgerLine, menu, links) {
  const closeMenu = document.getElementById(close);
  const hamburger = document.getElementById(hamburgerLine); 
  const navMenu = document.getElementById(menu); 
  
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
  
  const allLinks = document.querySelectorAll(`.${links}`);
  
  navMenu.addEventListener("click", function (event) {
    allLinks.forEach((link) => {
      link.classList.remove(`${links}-active`);
    });
    
    event.target.classList.add(`${links}-active`);
  });
}
