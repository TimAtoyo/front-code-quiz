
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


localStorage.setItem("questions", JSON.stringify(myQuestions))
// Responsive Web Design:

// Describe what a media query is and how it is used.
//     A) It queries the media for specific files to load.
//     B) It defines styles for specific devices or conditions in the browser.
//     C) It queries the server for media-related information.
//     Correct Answer: B

// What is the purpose of the viewport meta tag in HTML?
//     A) It sets the maximum width of the viewport.
//     B) It ensures proper rendering on different devices by adjusting the viewport.
//     C) It controls the visibility of the webpage.
//     Correct Answer: B

// Explain the concept of a mobile-first approach in web design.
//     A) Designing specifically for mobile devices before considering larger screens.
//     B) Prioritizing desktop design and adapting it for mobile devices.
//     C) Ignoring mobile design and focusing only on desktop layouts.
//     Correct Answer: A
