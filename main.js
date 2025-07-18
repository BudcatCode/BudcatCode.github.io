const typed = new Typed('.typed-text', {
  strings: [
    'Desarrolladora Front-End en formación',
    'Diseñadora de Juegos Digitales',
    'Diseñadora E-learning',
  ],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

let goTopbtn = document.getElementById("goTopbtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopbtn.style.display = "flex";
  } else {
    goTopbtn.style.display = "none";
  }
};