    /* Animaciones de TRABAJOS a medida que se muestra el viewport */
    const items = document.querySelectorAll('.portfolio-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
      }, { threshold: 0.2 }); // se activa cuando el 20% del elemento es visible

    items.forEach(item => observer.observe(item));


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