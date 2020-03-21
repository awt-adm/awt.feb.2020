document.addEventListener("DOMContentLoaded", () => {

    slider();

    console.log("Scripts OK.");
});

const slider = () => {

    $("#bienvenida").slick({
        autoplay: true,
        autoplaySpeed: 100,
        speed: 100,
        dots: true,
    })

}
