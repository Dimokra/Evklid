const burger = document.getElementById('burgerBtn');
const lines = document.querySelectorAll('.burger__line');

function toggleBurger() {
  lines.forEach((line) => line.classList.toggle('active'));
}

burger.addEventListener('click', toggleBurger);