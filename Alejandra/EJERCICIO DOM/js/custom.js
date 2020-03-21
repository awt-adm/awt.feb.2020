document.addEventListener("DOMContentLoaded", () => {

  slider();
  colorFondo();

  // console.log("Scripts OK.");
});

function colorFondo() {

  let body = document.querySelector("body");

  body.style.backgroundColor = "lime";

}

const slider = () => {

  $("#bienvenida").slick({
    autoplay: true,
    autoplaySpeed: 100,
    speed: 100,
    dots: true,
  })

}