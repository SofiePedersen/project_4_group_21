/** Jeg laver et array af Data,
 * som jeg vil bruge til at ændre indholdet på de forskellige quiz-sider */
const quizData = [
  {
    question: 
      "Hvor mange timer kan du være tilgængelig om måneden?",
    
    answers: [
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

function nextQuestion(){
    document.getElementById('quiz-question').innerHTML = question;
}

/**
let text = "";

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

document.getElementById("form-question").innerHTML = text;

console.log(text)

let text = "";
for (let i = 0; i < quizData.answers.length; i++) {
  text += answers[i] + "<br>";
}

document.getElementById("form-question").innerHTML = text;
  
let text = "";

for (let i = 0; i < quizData.length; i++) {
  let answers = quizData[i].answers;
  for (let j = 0; j < answers.length; j++) {
    text += answers[j] + "<br>";
  }
}
*/


// let text = "";

// for (let i = 0; i < quizData.length; i++) {
// //   console.log(quizData[i].answers);
    
//   let answers = quizData[i].answers;  // Går ind i quizdata
  
//   let answerText = '';  // opretter en lokal string for at gemme min data so far.

//   for (let j = 0; j < answers.length; j++) {
//     answerText += answers[j] + "<br>";  // Add each answer to this answerText
//   }
//   text += `<input type="radio" name="questions" /><label for="question">${answerText}</label>`;  // forsøg på at få loopet input og labels ud med svarmuligheder
// }

// document.getElementById("form-question").innerHTML = text;







/* ELEMENTS */
const startQuizBtn = document.getElementById('startQuiz')
const quizIntroCard = document.getElementById('quiz-wrapper')
const quizQuestionCard = document.getElementById('quiz-question-card')
const quizQuestionTitle = document.getElementById('quiz-question')
const nextQuestionBtn = document.getElementById('quiz-forward-btn')

/* VALUES */
let currentQuestion = 0; 

startQuizBtn.addEventListener('click', showQuestion);

function showQuestion(){
    quizIntroCard.style.display = "none";
    quizQuestionCard.style.display = "block";

    changeQuizTitle();
}

function changeQuizTitle(){
    quizQuestionTitle.innerHTML = quizData[currentQuestion].question;    
}

nextQuestionBtn.addEventListener('click', nextQuestion);

function nextQuestion(){
    currentQuestion++;
    changeQuizTitle();
}

