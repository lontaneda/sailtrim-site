const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mainNav.classList.toggle('open', !open);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
  });
});

// The Figma mobile layout shows the learning cards expanded; desktop shows them compact.
const learningDetails = [...document.querySelectorAll('.accordions details')];
const mobileQuery = window.matchMedia('(max-width: 820px)');

function syncLearningCards() {
  learningDetails.forEach((item) => {
    if (mobileQuery.matches) item.setAttribute('open', '');
    else item.removeAttribute('open');
  });
}

syncLearningCards();
mobileQuery.addEventListener?.('change', syncLearningCards);

// Store/legal destinations were not present in the supplied design exports.
document.querySelectorAll('.placeholder-link').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});
