// import { questions } from './questions.js';
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

var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var quesation = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");

// Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

function startQuiz() {
  console.log("quiz started");
  console.log();

  // Access the first question and appent a H1 (section title) h2(quesation) and list of button with anwers
  for (let i = 0; i < myQuestions.length; i++) {
    //    Adding Question to the Html
    startScreen.textContent = "";
    var firstQuestionString = myQuestions[i].question;
    questionTitle.textContent = firstQuestionString;

    //    Adding Anwsers to the Html
    for (var key in myQuestions[i].answers) {
    //   console.log(`${key}: ${myQuestions[i].answers[key]}`);
      var answerText = myQuestions[i].answers[key];
      var answerButton = document.createElement("button");
      // Setting Atribute of the answers
      answerButton.setAttribute("data-choice", key);

      answerButton.textContent = answerText;
      choices.appendChild(answerButton);
    }
    answerButton.addEventListener("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      var atribute = event.target.getAttribute("data-choice");
      console.log(atribute);
      if (myQuestions[i].correctAnswer !== atribute) {
      } else {
        console.log(`WELL DONE!`);
      }
    });
  }
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  startQuiz();
});

console.log(startButton);

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
