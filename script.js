let swiper = new Swiper(".home-slider", {
    spaceBetween : 20,
    effect: fade,
    loop: true,
    grapCursor: true,
    centeredSlides: true,
    pagination: {
        e1 : "swiper-pagination",
        clickable: true
    }
});