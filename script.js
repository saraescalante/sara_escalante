// JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    // Evento de click para el ícono de la hamburguesa
    hamburgerIcon.addEventListener('click', function() {
        menu.classList.toggle('open');
        hamburgerIcon.classList.toggle('open');
    });
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // Para que el slider sea cíclico
});


const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;

function scrollToNextSection() {
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });

}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
});

sections.forEach(section => observer.observe(section));


// Cambia el tiempo en milisegundos (ej. cada 3 segundos)
setInterval(scrollToNextSection, 3000);
