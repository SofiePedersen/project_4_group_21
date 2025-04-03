//HEADER//
//SECTION 2 - QUIZ//
//SECTION 4 - SLIDESHOW
//Manuelt slideshow - swipe funktion
let manualSlideIndex = 1;
let startX = 0; 
let endX = 0;
let minSwipeDistance = 50;
showSlidesManual (manualSlideIndex);

//Swipe funktion
document.querySelector ('.section-4').addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
});

document.querySelector('.section-4').addEventListener('touchend', function (e) {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (startX - endX > minSwipeDistance) {
        //swipe til venstre - næste
        manualSlideIndex++;
        if (manualSlideIndex > document.getElementsByClassName('slide-box').length) {
            manualSlideIndex = 1; //hvis sidste slide, gå tilbage til første
        }
    } else if (endX - startX > minSwipeDistance) {
        //swipe til højre - forrige
        manualSlideIndex--;
        if (manualSlideIndex < 1) {
            manualSlideIndex = document.getElementsByClassName ('slide-box').length;
        }
    }
    showSlidesManual (manualSlideIndex);
}

//Klik på thumbnail
function currentSlide (n) {
    manualSlideIndex = n;
    showSlidesManual (manualSlideIndex);
    highlightThumbnail (n);

    stopAutoSlides ();
}

function showSlidesManual (n) {
    let slides = document.getElementsByClassName ("slide-box");
    let dots =document.getElementsByClassName ("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove ("active");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove ("active");
    }

    slides[n - 1].classList.add("active");

    dots[n - 1].classList.add("active");
}

//Automatisk slideshow
let autoSlideIndex = 0;
showSlidesAuto ();

function showSlidesAuto() {
    let slides = document.getElementsByClassName ("slide-box");
    let dots = document.getElementsByClassName ("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove ("active");
    }

    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1;}
    
    slides[autoSlideIndex - 1].classList.add("active");

    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove ("active");
    }

    dots[autoSlideIndex - 1].classList.add ("active");

    highlightThumbnail(autoSlideIndex);
    
    setTimeout (showSlidesAuto, 10000);
}

//Thumbnail highlight
function highlightThumbnail (n) {
    let columns = document.querySelectorAll ('.slide-box__column');

    console.log('aktiverer thumbnail nr.: ' + n);

    columns.forEach (column => column.classList.remove('active'));

    columns[n - 1].classList.add('active');
}
//SECTION 7 - KONTAKTFORMULAR//