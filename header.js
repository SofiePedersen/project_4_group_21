
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

