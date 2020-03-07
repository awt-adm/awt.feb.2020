document.addEventListener("DOMContentLoaded", () => {
  slider();
  colorFondo();

  // console.log("Scripts OK.");
});

function colorFondo() {
  let body = document.querySelector("body");

  body.style.backgroundColor = "gray";
}

const slider = () => {
  $("#bienvenida").slick({
    autoplay: true,
    autoplaySpeed: 500,
    speed: 400,
    dots: true
  });
};
