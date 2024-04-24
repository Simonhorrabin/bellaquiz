const questions = [
    {
        question:"Where does Bella live?",
        answers: [
            {text: "Narnia", correct: false},
            {text: "Charlotte", correct: true},
            {text: "St. Thomas", correct: false},
            {text: "Congo", correct: false},
        ]
    },

    {
        question:"What kind of toy is Bella's favorite?",
        answers: [
            {text: "Tug-o-War", correct: true},
            {text: "frisbee", correct: false},
            {text: "Tennis ball", correct: false},
            {text: "Bones", correct: false},
        ]
    },

    {
        question:"What kind of dog is Bella?",
        answers: [
            {text: "Lab-mix", correct: false},
            {text: "Chihuahua", correct: true},
            {text: "Boxer-mix", correct: false},
            {text: "Husky", correct: false},
        ]
    },

    {
        question:"Who is Bella's best friend?",
        answers: [
            {text: "Andrew", correct: false},
            {text: "Charlotte", correct: false},
            {text: "Bobby", correct: false},
            {text: "Simon", correct: true},
        ]
    },

];

const questionElement = document.getElementById(question);
const answerButton = document.getElementById("answer-buttons")