//HEADER//
//SECTION 2 - QUIZ//
//SECTION 4 - SLIDESHOW//
let manualSlideIndex = 1;
showSlidesManual (manualSlideIndex);

function currentSlide (n) {
    showSlidesManual (manualSlideIndex +=n);
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
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[manualSlideIndex-1].style.display = "block";
    dots[manualSlideIndex-1].className += "active";
}

//Automatisk slideshow//
let autoSlideIndex = 0;
showSlidesAuto ();

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName ("slide-box");
    for (i = 0; i < slideIndex.length; i++) {
        slides[i].style.display = "none";
    }

    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1}
    
    slides[autoSlideIndex-1].style.display = "block";
    setTimeout (showSlidesAuto, 2000);

}
//SECTION 7 - KONTAKTFORMULAR//