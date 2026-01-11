const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('navigation');
const links = nav.querySelectorAll('a');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'

  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
})

for (let link of links) {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  })
}
