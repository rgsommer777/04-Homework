const questionEl =document.getElementById("question");
const choices =Array.from(document.getElementsByClassName ("answer-btn"));

let currentQuestion = {};
let acceptAnswers=true;
var timeLeft=50;
let questionCounter=0;
let availableQuestions = [];

//CONSTANTS
const INCORRECT_PENALTY = 10;
const MAX_QUESTIONS = 3;

let questions = [
  {
    question: "What is index 3 of the following array? [Apples, Pears, Oranges, Bananas, Grapes]",
    choice1: "Bananas",
    choice2: "Oranges",
    choice3: "Pears",
    choice4: "Grapes",
    answer: 1  
   
  },
    {
    question: "What is 9 + 4?",
    choice1: "13",
    choice2: "12",
    answer: 1  
    
  },
  {
    question: "What is 7 + 12?",
     choice1: "19",
     choice2: "17",
     answer: 1
    
    
  },
] 

//const lastQuestion = questions.length-1;
function startGame() {
questionCounter=0;
availableQuestions=[...questions];
//console.log(availableQuestions);
loadNextQuestion();
};

function loadNextQuestion() {
if(availableQuestions.length==0 || questionCounter >=MAX_QUESTIONS){
  //go to end page and log score to local storage
  localStorage.setItem("currentscore",timeLeft);
  return window.location.assign("./alldone.html")

}

  questionCounter++;
const questionIndex=Math.floor(Math.random()*availableQuestions.length);
currentQuestion=availableQuestions[questionIndex];
question.innerText=currentQuestion.question;

choices.forEach(choice => {
  const number = choice.dataset['number'];
  choice.innerText=currentQuestion['choice' + number];
});
availableQuestions.splice(questionIndex,1);

acceptAnswers = true;

};

choices.forEach(choice => {
choice.addEventListener('click', e=> {
  //console.log(e.target);
  const selectedChoice = e.target;
  const selectedAnswer = selectedChoice.dataset["number"];

  let classToApply = 'incorrect';
  if(selectedAnswer==currentQuestion.answer){
    classToApply='correct';
  }

  if(classToApply=='incorrect'){
    decrementTimer();
  }
  selectedChoice.parentElement.classList.add(classToApply);
  //selectedChoice.parentElement.classList.remove(classToApply);


  console.log(classToApply);
  loadNextQuestion();
});

});





//function startGame(){
// startTimer()
// randomizedQuestions = questions.sort(() => Math.random() -.5)
// currentQuestionIndex=0
// console.log("STARTED!");
// loadNextQuestion();
//}

//TIMER
function startTimer(){

var countdownTimer = setInterval(function(){
  if(timeLeft <= 0){
    clearInterval(countdownTimer);
    document.getElementById("timer-display").innerHTML = "QUIZ OVER!";
    //localStorage.setItem("currentscore",0);
   } else {
    document.getElementById("timer-display").innerHTML = timeLeft;
    console.log(timeLeft);
   }
    timeLeft -= 1;
  }, 1000);
}

function decrementTimer (){
timeLeft = timeLeft-INCORRECT_PENALTY;
} 

startGame();
startTimer();
// function loadNextQuestion(){
//   resetQuestion()
//   showQuestion(randomizedQuestions[currentQuestionIndex])

// }

// function showQuestion(question){
// questionEl.innerText = question.question
// question.answers.forEach(answer => {
//  const button=document.createElement('button')
//  button.innerText=answer.text
//  button.classList.add('answer-btn')
//  if(answer.correct){
//    button.dataset.correct=answer.correct
//  }
//  button.addEventListener ('click',selectAnswer)
//  answerButtonEl.appendChild(button)
// })
// }

// function resetQuestion(){
// while(answerButtonEl.firstChild){
// answerButtonEl.removeChild
// (answerButtonEl.firstChild)
// }
// }

// function selectAnswer(e){
// const selectedBtn = e.target
// const correct = selectedBtn.dataset.correct
// Array.from(answerButtonEl.children).forEach(button =>{
//   setStatus(button,button.dataset.correct)
 
// })
// }


// function setStatus(element, correct) {
//  clearStatus(element) 
//  if (correct) {
//    element.classList.add('correct')
 
//    }else{
//     element.classList.add('wrong')
    
//   }
//   }
//  function clearStatus(element){
// element.classList.remove('correct')
// element.classList.remove('wrong')
// }
 
// function checkAnswer(answer){
//   if(answer ==questions[currentQuestionIndex].correct==answer){
//     console.log("CORRECT");
//   } else{
//     console.log("WRONG");
    
//   }
// }

//timeLeft=timeLeft-10;