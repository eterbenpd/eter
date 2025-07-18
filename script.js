const btn = document.getElementById('btnSaludo');

btn.addEventListener('click', () => {
  alert('¡Hola! Bienvenido a la fiesta maximalista 🌈✨');
  btn.style.backgroundColor = '#ff6a00';
  btn.style.color = '#fff';
  btn.style.boxShadow = '0 0 30px #ff6a00';
  btn.textContent = '¡Gracias por venir!';
});