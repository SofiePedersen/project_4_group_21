//HEADER//
//SECTION 2 - QUIZ//
//SECTION 4 - SLIDESHOW
//Manuelt slideshow 
let manualSlideIndex = 1;
showSlidesManual (manualSlideIndex);

function currentSlide (n) {
    manualSlideIndex = n;
    showSlidesManual (manualSlideIndex);
}

function showSlidesManual (n) {
    let i;
    let slides = document.getElementsByClassName ("slide-box");
    let dots =document.getElementsByClassName ("dot");
    if (n > slides.length) {manualSlideIndex = 1}
    if (n < 1) {manualSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }

    slides[manualSlideIndex-1].style.display = "block";
    dots[manualSlideIndex-1].className += " active";
}

//Automatisk slideshow
let autoSlideIndex = 0;
showSlidesAuto ();

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName ("slide-box");
    let dots = document.getElementsByClassName ("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1;}
    
    slides[autoSlideIndex - 1].style.display = "block";

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace (" active", "");
    }

    dots[autoSlideIndex - 1].className += " active";
    setTimeout (showSlidesAuto, 10000);
}
//SECTION 7 - KONTAKTFORMULAR//