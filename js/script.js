// Portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');
const observerPortfolio = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200);
    }
  });
}, { threshold: 0.2 });
portfolioItems.forEach(item => observerPortfolio.observe(item));





// About
const aboutContainer = document.querySelector('.about-container');
const observerAbout = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
observerAbout.observe(aboutContainer);






// Brands
const brandCards = document.querySelectorAll('.brands-logos div');
const observerBrands = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);
    }
  });
}, { threshold: 0.2 });
brandCards.forEach(card => observerBrands.observe(card));






// Contacto
const contactForm = document.querySelector('#contact form');
const observerContact = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
observerContact.observe(contactForm);


// Navbar scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('abierto');
});

// Cerrar menu al clickear un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('abierto');
  });
});



/* BOTON WSP */

const lista = document.querySelector('.listaWsp');
const btnWsp = document.querySelector('#btnWsp');
console.log(btnWsp)

btnWsp.addEventListener("click", function(){

  lista.classList.toggle("listaActivada");



})