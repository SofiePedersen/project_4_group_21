
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
    const dropdownItems = [
        document.getElementById("om-dropdown-item"),
        document.getElementById("frivillig-dropdown-item")
    ];

    dropdownItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            // Prevent default behavior if clicking the main link
            if (e.target.tagName === "A" && e.target.getAttribute("href") === "#") {
                e.preventDefault();
            }

            // Toggle current dropdown
            item.classList.toggle("open");

            // Stop event from bubbling up to document
            e.stopPropagation();
        });
    });

    // Click outside closes all dropdowns
    document.addEventListener("click", (e) => {
        dropdownItems.forEach((item) => {
            if (!item.contains(e.target)) {
                item.classList.remove("open");
            }
        });
    });
});


