const portfolioItems = document.querySelectorAll('.portfolio-item');

const observerPortfolio = new IntersectionObserver((entries) => {
entries.forEach
}, {threshold: 0.2});