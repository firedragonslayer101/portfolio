//Gallery functions

document.querySelectorAll(".gallery-grid").forEach(gallery => {

    const imageCount = gallery.querySelectorAll("img").length;

    gallery.classList.add(`gallery-${imageCount}`);

});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

document.querySelectorAll(".gallery-grid img").forEach(image => {

    image.addEventListener("click", () => {

        const compressedPath = image.getAttribute("src");

        const fullPath = compressedPath
            .replace("images/compressed/", "images/")
            .replace("_compr.", ".");

        const newImage = new Image();

        newImage.onload = () => {
            lightboxImage.src = fullPath;
            lightbox.classList.add("active");
        };

        newImage.onerror = () => {
            lightboxImage.src = compressedPath;
            lightbox.classList.add("active");
        };

        newImage.src = fullPath;

    });

});

document.getElementById("lightbox-close").addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
});

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
        lightboxImage.src = "";
    }

});