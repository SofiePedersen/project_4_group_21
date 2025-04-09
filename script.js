//HEADER//
//SECTION 2 - QUIZ//
//SECTION 4 - SLIDESHOW

// Alberte's Javascript
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
// SECTION 5 - QNA//
const qnaBtn1 = document.getElementById('qna-btn-1');
const qnaBtn2 = document.getElementById('qna-btn-2');
const qnaBtn3 = document.getElementById('qna-btn-3');
const qnaBtn4 = document.getElementById('qna-btn-4');
const qnaBtn5 = document.getElementById('qna-btn-5');

const qnaParagraphText1 = document.getElementById('qna-question-box__wrapper-text--1');
const qnaParagraphText2 = document.getElementById('qna-question-box__wrapper-text--2');
const qnaParagraphText3 = document.getElementById('qna-question-box__wrapper-text--3');
const qnaParagraphText4 = document.getElementById('qna-question-box__wrapper-text--4');
const qnaParagraphText5 = document.getElementById('qna-question-box__wrapper-text--5');

qnaBtn1.addEventListener('click', switchDisplay1);
qnaBtn2.addEventListener('click', switchDisplay2);
qnaBtn3.addEventListener('click', switchDisplay3);
qnaBtn4.addEventListener('click', switchDisplay4);
qnaBtn5.addEventListener('click', switchDisplay5);

function switchDisplay1 (){
    if (qnaParagraphText1.style.display === "none") {
        qnaParagraphText1.style.display = "block";
        qnaBtn1.src = "images/Minus.png";
    }

    else {
        qnaParagraphText1.style.display = "none";
        qnaBtn1.src = "images/Plus.png";
    }
}

function switchDisplay2 (){
    if (qnaParagraphText2.style.display === "none") {
        qnaParagraphText2.style.display = "block";
        qnaBtn2.src = "images/Minus.png";
    }

    else {
        qnaParagraphText2.style.display = "none";
        qnaBtn2.src = "images/Plus.png";
    }
}

function switchDisplay3 (){
    if (qnaParagraphText3.style.display === "none") {
        qnaParagraphText3.style.display = "block";
        qnaBtn3.src = "images/Minus.png";
    }

    else {
        qnaParagraphText3.style.display = "none";
        qnaBtn3.src = "images/Plus.png";
    }
}

function switchDisplay4 (){
    if (qnaParagraphText4.style.display === "none") {
        qnaParagraphText4.style.display = "block";
        qnaBtn4.src = "images/Minus.png";
    }

    else {
        qnaParagraphText4.style.display = "none";
        qnaBtn4.src = "images/Plus.png";
    }
}

function switchDisplay5 (){
    if (qnaParagraphText5.style.display === "none") {
        qnaParagraphText5.style.display = "block";
        qnaBtn5.src = "images/Minus.png";
    }

    else {
        qnaParagraphText5.style.display = "none";
        qnaBtn5.src = "images/Plus.png";
    }
}

//SECTION 7 - KONTAKTFORMULAR//