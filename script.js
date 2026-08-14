//Gallery functions

document.querySelectorAll(".gallery-grid").forEach(gallery => {

    const imageCount = gallery.querySelectorAll("img").length;

    gallery.classList.add(`gallery-${imageCount}`);

});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

document.querySelectorAll(".gallery-grid img").forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightbox.classList.add("active");

    });

});

document.getElementById("lightbox-close").addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});