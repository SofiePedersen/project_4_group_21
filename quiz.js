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

