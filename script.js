// Mikkel's Javascript - START
//HEADER//

document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.getElementById("burgermenu");
    const showMenu = document.getElementById("showMenu");

    burgerIcon.addEventListener("click", function () {
        if (showMenu.style.display === "block") {
            showMenu.style.display = "none";
        } else {
            showMenu.style.display = "block";
        }
    });

    const dropdownItems = [
        document.getElementById("om-dropdown-item"),
        document.getElementById("frivillig-dropdown-item")
    ];

    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
            item.classList.toggle("open");
        });
    });

    const desktopDropdowns = document.querySelectorAll(".desktop-dropdown");

    desktopDropdowns.forEach((item) => {
        const trigger = item.querySelector("a");

        trigger.addEventListener("click", () => {
            // Luk andre åbne dropdowns først
            desktopDropdowns.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("open");
                }
            });

            // Toggle den aktuelle dropdown
            item.classList.toggle("open");
        });
    });

    // Luk dropdowns ved klik udenfor
    document.addEventListener("click", (e) => {
        desktopDropdowns.forEach((item) => {
            if (!item.contains(e.target)) {
                item.classList.remove("open");
            }
        });
    });
});

// Mikkel's Javascript - SLUT

// Sofie's Javascript - START
//SECTION 2 - QUIZ//

/** Jeg laver et array af Data,
 * som jeg vil bruge til at ændre indholdet på de forskellige quiz-sider */

const quizData = [
    {
      question: 
        "Hvor mange timer kan du være tilgængelig om måneden?",
      
      answers:[
        "6 - 8 timer", 
        "12 timer", 
        "Jeg har brug for fleksible tider"
      ]
    },
    {
      question: 
        "Hvad føler du beskriver dig bedst?",
      
      answers: [
        "Jeg håber jeg er typen, mine venner kommer til, når de har brug for at snakke",
        "Jeg vil gerne være en del af et fællesskab og nyder at møde nye mennesker",
        "Jeg er kreativ, elsker at tage billede, lave videoer eller skrive tekster",
        "Jeg drømmer om at gøre en forskel og brænder for at give viden videre til andre",
        "Jeg føler jeg er god til at planlægge og organisere - jeg holder styr på tingene"
      ]
    },
    {
      question:
        "Hvad vil være vigtigst for dig, hvis du skulle lave frivilligt arbejde?",
      
      answers: [
        "At hjælpe unge og være der for dem",
        "At sprede budskabet om mental sundhed og inspirere andre",
        "At arbejde sammen med andre i et team og udvikle noget større",
        "At være kreativ og lave engagerende indhold"
      ]
    },
    {
      question: 
        "Hvordan vil du helst arbejde frivilligt?",
      
      answers: [
        "Jeg vil gerne møde folk ansigt til ansigt og være der fysisk",
        "Jeg vil gerne kunne hjælpe hjemmefra, når det passer ind i min dagligdag",
        "Jeg vil gerne ud og tale med folk og lave oplæg",
        "Jeg kan godt lide at tage ansvar og sørge for at processerne fungerer"
      ]
    },
    {
      question: 
        "Hvilken sætning passer bedst til dig?",
  
      answers: [
          "Jeg elsker at have dybe samtaler, hvor jeg virkelig kan lytte", 
          "Jeg er god til at tale foran andre og formidle budskaber", 
          "Jeg elsker at tage billeder, lave grafik eller redigere videoer",
          "Jeg er god til at samle folk, og danne fællesskaber"
      ]
    }
  ];
  
  /* ELEMENTS */
  const quizIntroCard = document.getElementById('quiz-wrapper');
  const quizQuestionCard = document.getElementById('quiz-question-card');
  const quizEndCard = document.getElementById('quiz-end-card');
  
  const startQuizBtn = document.getElementById('startQuiz');
  const nextQuestionBtn = document.getElementById('quiz-forward-btn');
  const prevQuestionBtn = document.getElementById('quiz-back-btn')
  const quizEndCardBackBtn = document.getElementById('quiz-end-back-btn');
  const quizResetBtn = document.getElementById('quiz-restart-btn');
  
  const quizQuestionTitle = document.getElementById('quiz-question');
  const quizForm = document.getElementById('form-question');
  
  /* VALUES */
  let currentQuestion = 0; 
  
  startQuizBtn.addEventListener('click', showQuestion);
  
  function showQuestion(){
      quizIntroCard.style.display = "none";
      quizQuestionCard.style.display = "flex";
  
      changeQuizTitle();
      showOptions();
  };
  
  function changeQuizTitle(){
      quizQuestionTitle.innerHTML = quizData[currentQuestion].question;
  };
  
  nextQuestionBtn.addEventListener('click', nextQuestion);
  
  function nextQuestion(){
    currentQuestion++;    
    console.log(currentQuestion);
      
    if (currentQuestion <= quizData.length - 1){
          
      changeQuizTitle();
      showOptions();
    }
      
      else {
      quizQuestionCard.style.display = "none";
      quizEndCard.style.display = "flex";
    }
  };
  
  prevQuestionBtn.addEventListener('click', prevQuestion);
  quizEndCardBackBtn.addEventListener('click', prevQuestion);
  
  
  function prevQuestion(){
    if (currentQuestion > 0 && currentQuestion < quizData.length){
      currentQuestion--;
      changeQuizTitle();
      showOptions();
      console.log(currentQuestion);
    }
  
    else if (currentQuestion == quizData.length) {
      quizEndCard.style.display = "none";
      quizQuestionCard.style.display = "flex";
      currentQuestion--;
    }
  
    else if (currentQuestion == 0) {
      quizQuestionCard.style.display = "none";
      quizIntroCard.style.display = "flex";            
    }
  };
  
  quizResetBtn.addEventListener('click', restartQuiz);
  
  function restartQuiz (){
      currentQuestion = 0;
      quizEndCard.style.display = "none";
      quizIntroCard.style.display = "flex";            
  };
  
  // Her opretter jeg er for-loop. Mit forloop opretter en variable kaldet i. Jeg skriver så
  // Hvis I er mindre end længden på svarmuligheder i mit array quizData, så øger vi i's værdi
  // Derefter beder jeg den i console.loggen at loop de enkelte svarmuligheder ud hver for sig.
  
  function showOptions(){
      quizForm.innerHTML = "";
  
      for (let i = 0; i < quizData[currentQuestion].answers.length; i++) {
      
      const createQuizDivWrapper = document.createElement("div");
      quizForm.appendChild(createQuizDivWrapper);
  
      const createQuizRadioInput = document.createElement("input");
      createQuizRadioInput.type = "radio";
      createQuizRadioInput.name = "questions";
      createQuizDivWrapper.appendChild(createQuizRadioInput);
  
      const createQuizLabel = document.createElement("label");
      createQuizLabel.for = "questions-" + i;
      createQuizLabel.innerHTML = quizData[currentQuestion].answers[i];
      createQuizLabel.class = ""
      createQuizDivWrapper.appendChild(createQuizLabel);
      };
  };

// Sofie's Javascript - SLUT

// Alberte's Javascript - START
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

// Alberte's Javascript - SLUT

// Sofie Ekstra Javascript
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
    if (qnaParagraphText1.style.display === "block") {
        qnaParagraphText1.style.display = "none";
        qnaBtn1.src = "images/Plus.png";
    }

    else {
        qnaParagraphText1.style.display = "block";
        qnaBtn1.src = "images/Minus.png";
    }
}

function switchDisplay2 (){
    if (qnaParagraphText2.style.display === "block") {
        qnaParagraphText2.style.display = "none";
        qnaBtn2.src = "images/Plus.png";
    }

    else {
        qnaParagraphText2.style.display = "block";
        qnaBtn2.src = "images/Minus.png";
    }
}

function switchDisplay3 (){
    if (qnaParagraphText3.style.display === "block") {
        qnaParagraphText3.style.display = "none";
        qnaBtn3.src = "images/Plus.png";
    }

    else {
        qnaParagraphText3.style.display = "block";
        qnaBtn3.src = "images/Minus.png";
    }
}

function switchDisplay4 (){
    if (qnaParagraphText4.style.display === "block") {
        qnaParagraphText4.style.display = "none";
        qnaBtn4.src = "images/Plus.png";
    }

    else {
        qnaParagraphText4.style.display = "block";
        qnaBtn4.src = "images/Minus.png";
    }
}

function switchDisplay5 (){
    if (qnaParagraphText5.style.display === "block") {
        qnaParagraphText5.style.display = "none";
        qnaBtn5.src = "images/Plus.png";
    }

    else {
        qnaParagraphText5.style.display = "block";
        qnaBtn5.src = "images/Minus.png";
    }
}

// Sofie Ekstra Javascript - Slut

// Peter's Javascript - START

//SECTION 7 - KONTAKTFORMULAR//

// Definerer en variabel til knappen, der styrer synligheden af popup
const toggleButton = document.getElementById("togglePopup");

// Definerer variabler ud fra HTML-elementer
const popupMenu = document.getElementById("popupMenu");
const form = document.getElementById("kontaktForm");
const emailInput = document.getElementById("email");
const checkboxes = document.querySelectorAll(".valgmulighed");

let popupVisible = false; // boolean for at holde styr på om menuen er synlig eller ej

// Click-event for at vise/skjule popup (vælg positioner)
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

    // Event for at hente valgte informationer i form og bruge dem i userData
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindrer formularen i at blive sendt og siden i at reloade

    let email = emailInput.value;
    if (!email.includes("@")) {
        alert("Indtast venligst en gyldig e-mail");
        return;
    }

    let selectedFormål = document.querySelector('input[name="formål"]:checked'); //der kan kun checkes én radio-knap
    let formålValue = selectedFormål ? selectedFormål.value : "Ingen valg";
    
    let valgmulighed = []; // danner tomt array

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            valgmulighed.push(checkbox.value); //her hentes value på hver valgt checkbox og pushes i valgmulighed array
        }
    });

    // Opretter userData objekt
    let userData = {
        email: email,
        formål: formålValue, // Valgt formål
        valgmulighed: valgmulighed // Valgte checkbokse  
    };

    console.log("Data på bruger er gemt:", userData);
    alert("Tak for din interesse! Tjek din mail for mere information");
});
// easter egg - god påske
// Peter's Javascript - SLUT
