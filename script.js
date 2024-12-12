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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío predeterminado para manejar la respuesta

        // Enviar los datos del formulario usando Fetch API
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    responseMessage.style.display = "block";
                    responseMessage.innerHTML =
                        "<p>¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.</p>";
                    responseMessage.style.color = "green";
                    form.reset(); // Limpiar el formulario después del envío exitoso
                } else {
                    throw new Error("Error en el envío del formulario");
                }
            })
            .catch((error) => {
                responseMessage.style.display = "block";
                responseMessage.innerHTML =
                    "<p>Hubo un error al enviar tu mensaje. Por favor, inténtalo nuevamente.</p>";
                responseMessage.style.color = "red";
            });
    });
});



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
