// import { questions } from './questions.js';
var myQuestions = JSON.parse(localStorage.getItem("questions"));
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var quesation = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var time = document.querySelector("#time");
var timer = document.querySelector("#timer");
var scoreElement = document.querySelector('.score');
var scoreValueElement = document.querySelector('.current-score')

var i = 0;
var secondsLeft = 200;
// var score = 0;
var score = 0;

var startQuiz = function () {
  startScreen.classList.add("hide");
 
  scoreValueElement.textContent = score;

  var question = myQuestions[i].question;
  questionTitle.innerHTML = question;

  var answersList = myQuestions[i].answers;
  Object.entries(answersList).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    var answerButton = document.createElement("button");
    answerButton.textContent = `${key}: ${value}`;
    // Create a data-choice atribute & set value to key of answers onj
    answerButton.dataset.choice = key;
    answerButton.setAttribute("class", "btn");

    choices.append(answerButton);
    
    answerButton.addEventListener("click", (e) => {
      e.preventDefault();
      var clickedButtonChoice = e.target.getAttribute("data-choice");
      var correctAnswer = myQuestions[i].correctAnswer;
      console.log(clickedButtonChoice);

      var answerFeedback = document.createElement("p");
      answerFeedback.style.color = 'red';
      if (clickedButtonChoice !== correctAnswer) {
        answerFeedback.textContent = "Incorrect";
        
        secondsLeft = secondsLeft - 10;

        quesation.append(answerFeedback);

       
        sleep(1000).then(() => { 
          answerFeedback.remove();
          // Removes Buttons
          var buttons = document.querySelectorAll(".btn");
          buttons.forEach((element) => {
            element.remove();
          });
          i++;
          startQuiz();
         });
       
      } else {
        answerFeedback.style.color = 'green';
        answerFeedback.style.fontWeight = '700';
        answerFeedback.textContent = "Correct";
        score = score + 1;
        quesation.append(answerFeedback);

       
        sleep(1000).then(() => { 
          answerFeedback.remove();
          // Removes Buttons
          var buttons = document.querySelectorAll(".btn");
          buttons.forEach((element) => {
            element.remove();
          });
          i++;
          startQuiz();
         });
       
      }
    });
  });
};



function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = `${secondsLeft}s`;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      //   sendMessage();
    }
  }, 1000);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



// const yourFunction = async () => {
//   await delay(5000);
//   console.log("Waited 5s");

//   await delay(5000);
//   console.log("Waited an additional 5s");
// };

startButton.addEventListener("click", function(e) {
  e.preventDefault();
  setTime()
  startQuiz();
});



// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
