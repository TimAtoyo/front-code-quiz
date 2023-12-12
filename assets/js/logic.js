// import { questions } from './questions.js';
var endScreen = document.querySelector("#end-screen");
 var myQuestions = JSON.parse(localStorage.getItem("questions"));
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var sectionTitle = document.querySelector('.section-title')
var quesation = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var time = document.querySelector("#time");
var timer = document.querySelector("#timer");
var scoreElement = document.querySelector(".score");
var scoreValueElement = document.querySelector(".current-score");
var finalScore = document.querySelector("#final-score");
var submitScore = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var highScore = document.querySelector("#highscores");


var users = JSON.parse(localStorage['users'] || "[]");

let correctSound = new Audio("./assets/sfx/correct.wav");
correctSound.volume = 0.1;
let incorrectSound = new Audio("./assets/sfx/incorrect.wav");
incorrectSound.volume = 0.1;
var inteval = 1000;
var i = 0;
var secondsLeft = 200;
var score = 0;

var startQuiz = function () {
  startScreen.classList.add("hide");
  scoreValueElement.textContent = score;
  quesation.classList.remove("hide");
  quesation.classList.add("hide");
  // console.log(quesation);
  
  sectionTitle.innerHTML = myQuestions[i].SectionTitle;
  var question = myQuestions[i].question;

  questionTitle.innerHTML = question;

  var answersList = myQuestions[i].answers;
  Object.entries(answersList).forEach(([key, value]) => {
    // console.log(`${key}: ${value}`);
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
      // console.log(clickedButtonChoice);

      var answerFeedback = document.createElement("p");
      answerFeedback.style.color = "red";

      if (myQuestions.indexOf(myQuestions[i]) === myQuestions.length - 1) {
        endScreen.classList.remove("hide");
        sectionTitle.remove();
        questionTitle.remove();
        answerFeedback.remove();

        var buttons = document.querySelectorAll(".btn");
        buttons.forEach((element) => {
          element.remove();
        });

        finalScore.textContent = secondsLeft;
      } else if (clickedButtonChoice !== correctAnswer) {
        answerFeedback.textContent = "Incorrect";
        incorrectSound.play();
        secondsLeft = secondsLeft - 10;

        quesation.append(answerFeedback);

        sleep(500).then(() => {
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
        answerFeedback.style.color = "green";
        answerFeedback.style.fontWeight = "700";
        answerFeedback.textContent = "Correct";
        correctSound.play();
        score = score + 1;
        quesation.append(answerFeedback);

        sleep(500).then(() => {
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
// console.log(setTime());
function setTime(funct) {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = `${secondsLeft}s`;

    if (
      secondsLeft <= 0 ||
      myQuestions.indexOf(myQuestions[i]) === myQuestions.length - 1
    ) {
      clearInterval(timerInterval);
    }
  }, inteval);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

submitScore.addEventListener("click", (e) => {
  e.preventDefault();
  endScreen.classList.add("hide");
  
   var user = initials.value;
  users.push([secondsLeft,user, ],)
  console.log(users);
  localStorage.setItem('users', JSON.stringify(users));
   window.location.href = "./highscores.html";
});

startButton.addEventListener("click", function (e) {
  e.preventDefault();
  setTime(startQuiz);
  startQuiz();
});

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
