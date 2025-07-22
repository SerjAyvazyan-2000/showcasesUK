document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');

  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      burger.classList.toggle('active');
    });

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          navMenu.classList.remove('open');
          burger.classList.remove('active');

        }
      });
    });
  }
});



document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const openItem = document.querySelector('.faq-item.open');

    if (openItem && openItem !== item) {
      openItem.classList.remove('open');
    }

    item.classList.toggle('open');
  });
});

// Reveal on scroll helper
function revealOnScroll(selector, className = 'visible') {
  const section = document.querySelector(selector);
  if (!section) return;

  const trigger = window.innerHeight * 0.85;
  if (section.getBoundingClientRect().top < trigger) {
    section.classList.add(className);
  }
}

// Scroll listeners
window.addEventListener('scroll', () => {
  revealOnScroll('.faq');
  revealOnScroll('.partners');
  revealOnScroll('.casinos');
  revealOnScroll('.contact');
  revealOnScroll('.trust');
});

window.addEventListener('load', () => {
  revealOnScroll('.faq');
  revealOnScroll('.partners');
  revealOnScroll('.casinos');
  revealOnScroll('.contact');
  revealOnScroll('.trust');
});

// Cookie banner
document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');

  if (cookieBanner && cookieAccept) {
    if (!localStorage.getItem('cookieAccepted')) {
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 800);
    }

    cookieAccept.addEventListener('click', function () {
      localStorage.setItem('cookieAccepted', 'true');
      cookieBanner.classList.remove('show');
    });
  }
});