// import { questions } from './questions.js';
var endScreen = document.querySelector("#end-screen");
// var myQuestions = JSON.parse(localStorage.getItem("questions"));
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
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
const myQuestions = [
  {
    SectionTitle: "HTML Basics:",
    question: "What does HTML stand for?",
    answers: {
      A: "Hyper Text Markup Language",
      B: "High-level Text Management Language",
      C: "Hyperlink and Text Markup Language",
    },
    correctAnswer: "A",
  },
  {
    SectionTitle: "HTML Basics:",
    question: "Explain the difference between <div> and <span> tags.",
    answers: {
      A: "<div> is for block-level elements, and <span> is for inline elements.",
      B: "<div> is for inline elements, and <span> is for block-level elements.",
      C: "There is no difference; they can be used interchangeably.",
    },
    correctAnswer: "A",
  },
  {
    SectionTitle: "HTML Basics:",
    question: "How do you create a hyperlink in HTML?",
    answers: {
      A: '<link href="url">',
      B: '<a href="url">Link Text</a>',
      C: "<url>Link Text</url>",
    },
    correctAnswer: "B",
  },
  {
    SectionTitle: " CSS Fundamentals:",
    question: 'What is the purpose of the "box model" in CSS?',
    answers: {
      A: "It defines the layout and positioning of elements on a page.",
      B: "It defines the visual properties of an element, such as color and font.",
      C: 'It defines the spacing and positioning of an element"s content.',
    },
    correctAnswer: "A",
  },
  {
    SectionTitle: " CSS Fundamentals:",
    question:
      "How can you center an element horizontally and vertically in CSS?",
    answers: {
      A: "text-align: center; and vertical-align: center;",
      B: "margin: auto; and vertical-align: middle;",
      C: "margin: auto; and text-align: middle;",
    },
    correctAnswer: "B",
  },
  {
    SectionTitle: "JavaScript Essentials:",
    question: "What is the DOM, and why is it important in web development?",
    answers: {
      A: "Document Object Model; it represents the structure of a document as a tree of objects.",
      B: "Data Object Model; it manages data structures in JavaScript.",
      C: "Display Object Model; it controls the visual layout of a webpage.",
    },
    correctAnswer: "A",
  },
  {
    SectionTitle: "JavaScript Essentials:",
    question: "Differentiate between let, const, and var in JavaScript.",
    answers: {
      A: "They are all interchangeable and can be used to declare variables.",
      B: "let is block-scoped, const is constant, and var is function-scoped.",
      C: "let is constant, const is block-scoped, and var is function-scoped.",
    },
    correctAnswer: "B",
  },
  {
    SectionTitle: "JavaScript Essentials:",
    question:
      "How do you add an event listener to an HTML element using JavaScript?",
    answers: {
      A: 'element.addEventListener("click", myFunction);',
      B: 'element.attachEvent("click", myFunction);',
      C: 'element.on("click", myFunction);',
    },
    correctAnswer: "A",
  },
];

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

        sleep(10).then(() => {
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

        sleep(10).then(() => {
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
