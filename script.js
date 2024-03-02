const questions=[
    {
        question: "Which is the largest animal in the world ?",
        answers:[
            {text: "Shark",correct: false},
            {text: "Blue whale" , correct: true},
            {text: "Elephant" , correct :false},
            {text: "Giraffe" , correct :false},
        ]
    },
    { question: "Which is the smallest Continent in the world ?",
    answers:[
        {text: "Asia",correct: false},
        {text: "Arctic" , correct :false},
        {text: "Australia" , correct: true},
        {text: "Africa" , correct :false},
    ]
    },
    {   
    question: "Who is the first Prime Minister of India?",
    answers: [
    { text: "Mahatma Gandhi", correct: false },
    { text: "Jawaharlal Nehru", correct: true },
    { text: "Sardar Vallabhbhai Patel", correct: false },
    { text: "Indira Gandhi", correct: false }
    ]
    },
    {
        question: "Who is the writer of the Mahabharata?",
        answers: [
        { text: "Valmiki", correct: false },
        { text: "Ved Vyasa", correct: true },
        { text: "Kalidasa", correct: false },
        { text: "Tulsidas", correct: false }
        ]
        },
        
{
    question: "Who is the father of Radha Rani?",
    answers: [
    { text: "King Vrishabhanu", correct: true },
    { text: "King Janaka", correct: false },
    { text: "King Kamsa", correct: false },
    { text: "King Nanda", correct: false }
    ]
    },
    
{
    question: "How many countries are there in the world?",
    answers: [
    { text: "195", correct: false },
    { text: "206", correct: false },
    { text: "215", correct: false },
    { text: "195", correct: true }
    ]
    },
    {
        question: "What is the population of India?",
        answers: [
        { text: "Approximately 1.2 billion", correct: false },
        { text: "Approximately 1.3 billion", correct: true },
        { text: "Approximately 1.5 billion", correct: false },
        { text: "Approximately 1.7 billion", correct: false }
        ]
        },
        
{
    question: "When is Republic Day celebrated in India?",
    answers: [
    { text: "January 26", correct: true },
    { text: "August 15", correct: false },
    { text: "October 2", correct: false },
    { text: "December 25", correct: false }
    ]
    },
    {
        question: "When is Independence Day celebrated in India?",
        answers: [
        { text: "January 26", correct: false },
        { text: "August 15", correct: true },
        { text: "October 2", correct: false },
        { text: "December 25", correct: false }
        ]
        },
        {
            question: "Who is the mother of Lord Krishna?",
            answers: [
            { text: "Yashoda", correct: false },
            { text: "Devaki", correct: true },
            { text: "Radha", correct: false },
            { text: "Kunti", correct: false }
            ]
            },   
    
];
const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answer-button");
const nextbutton=document.getElementById("next-btn");
let currentQuizIndex=0;
let score=0;
function startQuiz(){
    currentQuizIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion() {
    resetstate();
    let currentQuestion=questions[currentQuizIndex];
    let questionNo=currentQuizIndex + 1;
    questionElement.innerHTML= questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click' , selectAnswer);
    })
}
function resetstate(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}
function selectAnswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct === "true" ;
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled= true;
    });
    nextbutton.style.display="block";
}
function showScore(){
    resetstate();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
function handdlenextbtn(){
    currentQuizIndex++;
    if(currentQuizIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextbutton.addEventListener('click', ()=>{
    if(currentQuizIndex < questions.length){
        handdlenextbtn();
    }else{
        startQuiz();
    }
});
startQuiz();