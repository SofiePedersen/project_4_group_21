
// Show / Hide Burgermenu

const burgerIcon = document.getElementById("burgermenu");
const showMenu = document.getElementById("showMenu");

burgerIcon.addEventListener("click", function () {
    if (showMenu.style.display === "block") {
        showMenu.style.display = "none";
    } else {
        showMenu.style.display = "block";
        populateImages(); // kun kald hvis vi åbner menuen
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const omToggle = document.getElementById("om-toggle");
    const omDropdown = document.getElementById("om-dropdown");
    const parentLi = omToggle.parentElement;

    omToggle.addEventListener("click", (e) => {
        e.preventDefault();

        // Toggle class to show/hide dropdown
        parentLi.classList.toggle("open");
    });

    // Optional: Click outside to close dropdown
    document.addEventListener("click", (e) => {
        if (!parentLi.contains(e.target)) {
            parentLi.classList.remove("open");
        }
    });
});
