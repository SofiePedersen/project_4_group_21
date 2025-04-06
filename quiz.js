
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
const startQuizBtn = document.getElementById('startQuiz');
const quizIntroCard = document.getElementById('quiz-wrapper');
const quizQuestionCard = document.getElementById('quiz-question-card');
const quizQuestionTitle = document.getElementById('quiz-question');
const nextQuestionBtn = document.getElementById('quiz-forward-btn');
const prevQuestionBtn = document.getElementById('quiz-back-btn')
const quizForm = document.getElementById('form-question');

/* VALUES */
let currentQuestion = 0; 

startQuizBtn.addEventListener('click', showQuestion);

function showQuestion(){
    quizIntroCard.style.display = "none";
    quizQuestionCard.style.display = "block";

    changeQuizTitle();
    showOptions();
};

function changeQuizTitle(){
    quizQuestionTitle.innerHTML = quizData[currentQuestion].question;
};

nextQuestionBtn.addEventListener('click', nextQuestion);

function nextQuestion(){
    currentQuestion++;    
    if (currentQuestion <= quizData.length - 1){
        
        changeQuizTitle();
        showOptions();
    }
    else {
        alert('nyside')
    }
};

prevQuestionBtn.addEventListener('click', prevQuestion);

function prevQuestion(){
    
        if (currentQuestion > 0){
            currentQuestion--;
            changeQuizTitle();
            showOptions();
        }
        else {
            quizQuestionCard.style.display = "none";
            quizIntroCard.style.display = "flex";
        }
};

// Her opretter jeg er for-loop. Mit forloop opretter en variable kaldet i. Jeg skriver så
// Hvis I er mindre end længden på svarmuligheder i mit array quizData, så øger vi i's værdi
// Derefter beder jeg den i console.loggen at loop de enkelte svarmuligheder ud hver for sig.

function showOptions(){
    quizForm.innerHTML = "";

    for (let i = 0; i < quizData[currentQuestion].answers.length; i++) {
    //  console.log(quizData[currentQuestion].answers[i]);
    
    const createQuizDivWrapper = document.createElement("div");
    quizForm.appendChild(createQuizDivWrapper);

    const createQuizRadioInput = document.createElement("input");
    createQuizRadioInput.type = "radio";
    createQuizRadioInput.name = "questions";
    createQuizDivWrapper.appendChild(createQuizRadioInput);

    const createQuizLabel = document.createElement("label");
    createQuizLabel.for = "questions-" + i;
    createQuizLabel.innerHTML = quizData[currentQuestion].answers[i];
    createQuizDivWrapper.appendChild(createQuizLabel);
    };
};
