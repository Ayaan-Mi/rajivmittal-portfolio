document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

    body.style.transition = "background-image 0.5s ease-in-out, color 0.5s ease-in-out";

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });

    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
            document.body.classList.add("prevent-flicker");
            setTimeout(() => {
                document.body.classList.remove("prevent-flicker");
            }, 100);
        }
    });

    const card = document.querySelector(".card");
    if (card) {
        VanillaTilt.init(card, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.3
        });
    }

    if (document.getElementById("typed")) {
        new Typed("#typed", {
            strings: [
                "SIP IN MUTUAL FUNDS",
                "HEALTH INSURANCE",
                "TERM INSURANCE",
                "VEHICLE INSURANCE",
                "ITR FILING",
                "CREDIT CARDS"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    if (document.getElementById("typed2")) {
        new Typed("#typed2", {
            strings: [
                "SIP IN MUTUAL FUNDS",
                "HEALTH INSURANCE",
                "TERM INSURANCE",
                "VEHICLE INSURANCE",
                "ITR FILING",
                "CREDIT CARDS"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".service-image");
    const viewer = document.getElementById("image-viewer");
    const fullImage = document.getElementById("full-image");
    const closeButton = document.querySelector(".close-btn");

    images.forEach(img => {
        img.addEventListener("click", () => {
            fullImage.src = img.src;
            viewer.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        viewer.style.display = "none";
    });

    viewer.addEventListener("click", (e) => {
        if (e.target !== fullImage && e.target !== closeButton) {
            viewer.style.display = "none";
        }
    });
});
