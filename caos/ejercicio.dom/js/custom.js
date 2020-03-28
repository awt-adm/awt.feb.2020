document.addEventListener("DOMContentLoaded", () => {

    slider();

    console.log("Scripts OK.");
});

const slider = () => {

    $("#bienvenida").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        dots: true,
    })

}