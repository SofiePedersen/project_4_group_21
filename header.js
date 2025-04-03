
// Show / Hide Burgermenu

const burgerIcon = document.getElementById("burgermenu");
const showMenu = document.getElementById("showMenu");
const hideMenuIcon = document.getElementById("hideMenu");

burgerIcon.addEventListener("click", function() {
    showMenu.style.display = "block";
    populateImages();
});

hideMenuIcon.addEventListener("click", function(){
    showMenu.style.display = "none";
});


