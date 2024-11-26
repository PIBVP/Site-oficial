let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// Alterna o menu mobile
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Fecha o menu ao rolar a página
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// Adiciona suporte ao dropdown no menu mobile
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseover',   
() => {
  dropdownMenu.style.display = 'block';
});

dropdown.addEventListener('mouseout', () => {
  dropdownMenu.style.display   
= 'none';
});
