const questions = [
    {
        question: "Where does Bella live?",
        answers: [
            { text: "Narnia", correct: false },
            { text: "Charlotte", correct: true },
            { text: "St. Thomas", correct: false },
            { text: "Congo", correct: false },
        ]
    },
    {
        question: "What kind of toy is Bella's favorite?",
        answers: [
            { text: "Tug-o-War", correct: true },
            { text: "frisbee", correct: false },
            { text: "Tennis ball", correct: false },
            { text: "Bones", correct: false },
        ]
    },
    {
        question: "What kind of dog is Bella?",
        answers: [
            { text: "Lab-mix", correct: false },
            { text: "Chihuahua", correct: true },
            { text: "Boxer-mix", correct: false },
            { text: "Husky", correct: false },
        ]
    },
    {
        question: "Who is Bella's best friend?",
        answers: [
            { text: "Andrew", correct: false },
            { text: "Charlotte", correct: false },
            { text: "Bobby", correct: false },
            { text: "Simon", correct: true },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add('correct');
    }else{
        selectedBtn.classList.add("incorrect");
    }

}
startQuiz()