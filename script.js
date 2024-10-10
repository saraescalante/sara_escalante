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
