document.addEventListener("DOMContentLoaded", () => {

    slider();
    colorFondo();

    console.log("Scripts OK.");
});

function colorFondo() {

    let body = document.querySelector("body");

    body.style.backgroundColor = "lime";

}

const slider = () => {

    $("#bienvenida").slick({
        autoplay: false,
        autoplaySpeed: 1000,
        speed: 1000,
        dots: true,
    })

}