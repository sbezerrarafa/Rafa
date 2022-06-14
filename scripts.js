const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const btnNav = document.getElementById('nav');
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
