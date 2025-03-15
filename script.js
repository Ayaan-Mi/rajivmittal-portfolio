document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

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

    const openFormBtn = document.getElementById("open-form-btn");
    const popupForm = document.getElementById("popup-form");
    const formContainer = document.querySelector(".form-container");
    const form = document.forms["contact-form"];
    const closeFormBtn = document.getElementById("close-form-btn");

    openFormBtn.addEventListener("click", function () {
        popupForm.style.display = "flex";
    });

    closeFormBtn.addEventListener("click", function () {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === popupForm) {
            popupForm.style.display = "none";
        }
    });

    const scriptURL = "https://script.google.com/macros/s/AKfycbz-e0WdaibvT7kcgZFG5IHnt0B_ZKAUQfaUeBfMvFbDEf17sRTks4QEUVmGo--Wd4MP/exec";

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
                formContainer.innerHTML = `
                    <h2 style="color: #ff00cc;">Thank you for submitting!</h2>
                    <p>Your form has been successfully submitted.</p>
                `;

                setTimeout(() => {
                    popupForm.style.display = "none";
                    location.reload(); 
                }, 3000);
            })
            .catch((error) => console.error("Error!", error.message));
    });
});
