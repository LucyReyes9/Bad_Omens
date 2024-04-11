function mouseOver(elemento) {
    elemento.style.transform = "scale(1.2)"; /* Aumenta el tamaño */
    elemento.style.color = "gray"; /* Cambia el color */
    elemento.style.cursor = "pointer"; /* Cambia el cursor */
  }
  
  function mouseOut(elemento) {
    elemento.style.transform = "scale(1)"; /* Vuelve al tamaño original */
    elemento.style.color = "white"; /* Vuelve al color original */
    elemento.style.cursor = "default"; /* Vuelve al cursor original */
  }

  function sectionOver(elemento) {
    elemento.style.transform = "scale(1.01)"; /* Aumenta el tamaño */
    elemento.style.color = "hsla(38, 95%, 47%, 0.808)"; /* Cambia el color */
    elemento.style.cursor = "pointer"; /* Cambia el cursor */
  }

  function sectionOut(elemento) {
    elemento.style.transform = "scale(1)"; /* Vuelve al tamaño original */
    elemento.style.color = "hsl(27, 68%, 68%)"; /* Vuelve al color original */
    elemento.style.cursor = "default"; /* Vuelve al cursor original */
  }

  document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
  
    // Reproducir el video cuando se pasa el cursor sobre él
    video.addEventListener('mouseenter', function() {
      video.play();
    });
  
    // Pausar el video cuando se retira el cursor
    video.addEventListener('mouseleave', function() {
      video.pause();
    });
  });

  function scrollToHome() {
    var homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToMembers() {
    var homeSection = document.getElementById('miembros-banda');
    homeSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTours() {
    var homeSection = document.getElementById('tours');
    homeSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    var homeSection = document.getElementById('about');
    homeSection.scrollIntoView({ behavior: 'smooth' });
}