// Definerer en variabel til at styre synligheden
const toggleButton = document.getElementById("togglePopup");
let popupVisible = false;
// Definerer HTML-elementer
const popupMenu = document.getElementById("popupMenu");
const form = document.getElementById("kontaktForm");
const emailInput = document.getElementById("email");
const checkboxes = document.querySelectorAll(".valgmulighed");
// Click-event for at vise/skjule popup
toggleButton.addEventListener("click", function() {
    popupVisible = !popupVisible;
    if (popupVisible) {
        popupMenu.style.display = "block";
        toggleButton.textContent = "Vælg én eller flere positioner ▲";
    } else {
        popupMenu.style.display = "none";
        toggleButton.textContent = "Vælg én eller flere positioner ▼";
    }
});
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindrer formularen i at blive sendt
    let email = emailInput.value;
    if (!email.includes("@")) {
        alert("Indtast venligst en gyldig e-mail");
        return;
    }
    let selectedFormål = document.querySelector('input[name="formål"]:checked');
    let formålValue = selectedFormål ? selectedFormål.value : "Ingen valg";
    let valgmulighed = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            valgmulighed.push(checkbox.value);
        }
    });
    // Opret userData objekt
    let userData = {
        email: email,
        formål: formålValue, // Valgt formål
        valgmulighed: valgmulighed // Checkbokse
    };
    console.log("Data på bruger er gemt:", userData);
    alert("Tak for din interesse! Tjek din mail for mere information");
});
