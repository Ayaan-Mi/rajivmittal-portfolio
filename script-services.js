document.addEventListener("DOMContentLoaded", function () {
    const imageViewer = document.querySelector(".image-viewer");
    const imageViewerImg = document.querySelector(".image-viewer img");
    const serviceImages = document.querySelectorAll(".service-card img");

    serviceImages.forEach((img) => {
        img.addEventListener("click", function () {
            imageViewer.style.display = "flex";
            imageViewerImg.src = img.src;
            document.body.classList.add("no-scroll");

            const scrollY = window.scrollY || window.pageYOffset;
            imageViewer.style.top = `${scrollY + window.innerHeight / 2}px`;
        });
    });

    imageViewer.addEventListener("click", function (event) {
        if (event.target !== imageViewerImg) {
            imageViewer.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    });
});
