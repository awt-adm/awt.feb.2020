document.addEventListener("DOMContentLoaded", () => {
  // alert("BLOQUEO");
  console.log("scripts");
  color_fondo();
});

function color_fondo() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "lime";
  console.log("body.baseURI");
}

const slider = () => {
  $("#bienvenida").slick;
  ({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true
  });
  console.log("slider");
};
