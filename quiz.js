
//SET UP GLOBAL CONSTANTS AND VARIABLES
const questionEl =document.getElementById("question");
const choices =Array.from(document.getElementsByClassName ("answer-btn"));
let currentQuestion = {};
let acceptAnswers=true;
var timeLeft=100;
let questionCounter=0;
let availableQuestions = [];
const INCORRECT_PENALTY = 10;
const MAX_QUESTIONS = 5;

//QUESTIONS AND POSSIBLE ANSWER CHOICES FOR THE QUIZ
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
    question: "What is the HTML tag where javascript is written?",
    choice1: "<javascript>",
    choice2: "<span>",
    choice3: "<script>",
    choice4: "<js>",
    answer: 3  
    
  },
  {
    question: "What is NOT a type of javascript loop?",
    choice1: "do-while",
    choice2: "number",
    choice3: "while",
    choice4: "for",
    answer: 2
       
  },
  {
    question: "Which of the following function of String object returns the calling string value converted to lower case?",
    choice1: "toLocaleLowerCase()",
    choice2: "toLowerCase()",
    choice3: "substring()",
    choice4: "toString()",
    answer: 2
  },
  {
    question: "Which of the following function of String object extracts a section of a string and returns a new string?",
    choice1: "slice()",
    choice2: "split()",
    choice3: "replace()",
    choice4: "search()",
    answer: 1
  },


] 

//SET FUNCTION TO BEGIN THE QUIZ AND START THE COUNTDOWN TIMER 
function startGame() {
startTimer();
questionCounter=0;
availableQuestions=[...questions];
//console.log(availableQuestions);
loadNextQuestion();
};

//USING MAX_QUESTIONS AS A LIMIT, KEEP LOADING MORE QUESTIONS UNTIL TIMER IS AT 0
// OR ALL QUESTIONS HAVE BEEN ANSWERED - THEN NAVIGATE TO FINAL SCORE SCREEN (ALLDONE.HTML)
function loadNextQuestion() {
if(availableQuestions.length==0 || questionCounter >=MAX_QUESTIONS){
  //go to end page and log score to local storage
  localStorage.setItem("currentscore",timeLeft);
  return window.location.assign("./alldone.html")

}
//RANDOMIZE THE ORDER OF QUESTIONS
questionCounter++;
const questionIndex=Math.floor(Math.random()*availableQuestions.length);
currentQuestion=availableQuestions[questionIndex];
question.innerText=currentQuestion.question;


//FOR EACH POSSIBLE CHOICE, SET A CONSTANT ("NUMBER") THAT IDENTIFIES THE CHOICE USING THE DATASET NUUMBER 
//POPULATE THE CHOICE TEXT IN THE BUTTONS
choices.forEach(choice => {
  const number = choice.dataset['number'];
  choice.innerText=currentQuestion['choice' + number];
});

//ELIMINATE THE CURRENT QUESTION FROM THE QUESTION POOL SO IT DOESN'T REPEAT
availableQuestions.splice(questionIndex,1);

};

//ADD EVENT LISTENER FOR EACH OF THE FOUR POSSIBLE CHOICES
choices.forEach(choice => {
  choice.addEventListener('click', e=> {
    //console.log(e.target);
//SET A CONSTANT NUMBER ("SELECTEDANSWER") FROM THE SELECTED BUTTON REPRESENTING THE SELECTED ANSWER NUMBER FROM THE DATASET PROPERTY  
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
//  
    let classToApply = 'wronganswer';
    if(selectedAnswer==currentQuestion.answer){
       classToApply='rightanswer';
       console.log("RIGHT!")


     }
  
    if(classToApply=='wronganswer'){
      decrementTimer();
      console.log("WRONG!")

      
  }
   selectedChoice.parentElement.classList.add(classToApply); 
   selectedChoice.parentElement.classList.remove(classToApply);
  
  
    //console.log(selectedAnswer==currentQuestion.answer);
    loadNextQuestion();

});

});


//COUNTDOWN TIMER
function startTimer(){

var countdownTimer = setInterval(function(){
  if(timeLeft <= 0){
    clearInterval(countdownTimer);
    document.getElementById("timer-display").innerHTML = "QUIZ OVER!";
    //localStorage.setItem("currentscore",0);
   } else {
    document.getElementById("timer-display").innerHTML = timeLeft;
    //console.log(timeLeft);
   }
    timeLeft -= 1;
  }, 1000);
}
//TAKE 10 SECONDS OFF TIMER FOR EVERY WRONG ANSWER
function decrementTimer (){
timeLeft = timeLeft-INCORRECT_PENALTY;
} 
//INITIATE QUIZ
startGame();

