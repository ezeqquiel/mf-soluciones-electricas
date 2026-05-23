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
}, { threshold: 0.1 });
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
if (aboutContainer) observerAbout.observe(aboutContainer);









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
const contactForm = document.querySelector('#formulario-contacto');
const observerContact = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
if (contactForm) {
  observerContact.observe(contactForm);
}









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

btnWsp.addEventListener("click", function(){

  lista.classList.toggle("listaActivada");
})








// HERO //
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let indice = 0;

function cambiarSlide(nuevoIndice) {
  slides[indice].classList.remove('activo');
  dots[indice].classList.remove('activo');

  indice = nuevoIndice;

  slides[indice].classList.add('activo');
  dots[indice].classList.add('activo');
}

setInterval(() => {
  const siguiente = (indice + 1) % slides.length;
  cambiarSlide(siguiente);
}, 3000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => cambiarSlide(i));
});



/* Service */
const serviceCards = document.querySelectorAll('.service-card');
const observerServices = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);
    }
  });
}, { threshold: 0.2 });
serviceCards.forEach(card => observerServices.observe(card));








//// FORMULARIO JS
emailjs.init('IxRrPMZgQAOkD90AC'); // ← Public Key

document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
  e.preventDefault();

  const status = document.getElementById('form-status');
  status.textContent = 'Enviando...';
  status.style.color = '#a0aec0';

  emailjs.send('service_htiseei', 'template_gw5o8hu', {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    mensaje: document.getElementById('mensaje').value,
  })
  .then(() => {
    status.textContent = '✅ Mensaje enviado correctamente.';
    status.style.color = '#F5A623';
    document.getElementById('formulario-contacto').reset();
  })
  .catch(() => {
    status.textContent = '❌ Hubo un error, intentá de nuevo.';
    status.style.color = '#e74c3c';
  });
});






/* PORFOLIO DINAMICO */ 
// Abrir modal
document.querySelectorAll('.img-contenedor').forEach(contenedor => {
  contenedor.addEventListener('click', () => {
    const modalId = contenedor.dataset.modal;
    document.getElementById(modalId).classList.add('abierto');
  });
});

// Cerrar con botón X
document.querySelectorAll('.modal-cerrar').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal-overlay').classList.remove('abierto');
  });
});

// Cerrar clickeando fuera
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('abierto');
    }
  });
});

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.abierto').forEach(overlay => {
      overlay.classList.remove('abierto');
    });
  }
});