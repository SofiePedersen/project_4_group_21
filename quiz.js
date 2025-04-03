document.getElementById("startQuiz").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("textfield").style.display = 'none';
    document.getElementById("")
}

const quizData = [
    {
        title: "Math Quiz",
        description: "What is 5 + 10?",
        options: ["10", "15", "20", "25"]
    },
    {
        title: "Science Quiz",
        description: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"]
    },
    {
        title: "History Quiz",
        description: "Who was the first president of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"]
    }
];

console.log(quizData);