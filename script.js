document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('nav ul.menu');
  
    burger.addEventListener('click', function() {
      console.log('Burger menu clicked!');
      menu.classList.toggle('active');
    });
  });
  
  