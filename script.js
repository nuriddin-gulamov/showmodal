// Using Strict Mode
"use strict";

// Objects
const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Project Logic
showModal.forEach(function (button) {
    button.addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");

        closeModal.addEventListener("click", function () {
            modal.classList.add("hidden");
            overlay.classList.add("hidden"); 
        });

        overlay.addEventListener("click", function () {
            modal.classList.add("hidden");
            overlay.classList.add("hidden"); 
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                modal.classList.add("hidden");
                overlay.classList.add("hidden"); 
            };
        });
    });
});