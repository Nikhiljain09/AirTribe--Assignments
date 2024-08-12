// Sample questions. DONT touch this data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "What does CSS stand for?",
    options: [
      "Cascading Stylesheets",
      "Cascading Styling Styles",
      "Cascading Sheets for Stylings",
      "Cascaded Stylesheets",
    ],
    correct: 0,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
  {
    text: "Javascript is a single threaded programming language",
    options: ["True", "False"],
    correct: 0,
  },
  {
    text: "API calls in Javascript can be done using the following method",
    options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
    correct: 2,
  },
];

const questionText = document.getElementById("question");
const listOfQuestions = document.getElementById("answer-list");
const questionContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  // Load the first question and load subsequent question from this function
  listOfQuestions.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];

  listOfQuestions.textContent = currentQuestion.text;

  currentQuestion.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");

    const radioButton = document.createElement("input");
    radioButton.type = "radio"; // Set the type to radio
    radioButton.id = `option${index}`; // Set a unique ID
    radioButton.name = option;
    // radioButton.setAttribute("type", "radio");
    // radioButton.setAttribute(option, option);
    // radioButton.textContent = option;
    radioButton.value = index;
    const label = document.createElement("label");
    label.htmlFor = `option${index}`; // Set the for attribute to associate with the radio button
    label.textContent = option;
    optionDiv.appendChild(radioButton);
    optionDiv.appendChild(label);
    // radioButton.addEventListener("click", selectOption);
    listOfQuestions.appendChild(optionDiv);
  });
}

function selectOption(event) {
  const selectedOption = event.target.value;

  // Disable further selection
  Array.from(listOfQuestions.children).forEach((button) => {
    button.disabled = true;
  });

  // Validate the selected answer
  if (selectedOption == questions[currentQuestionIndex].correct) {
    score++;
    selectedOption.style.color = "green";
    // resultMessage.textContent = "Correct!";
  } else {
    questions[currentQuestionIndex].options[
      questions[currentQuestionIndex].correct
    ].style.color = "green";
  }

  // Show the submit button and next button appropriately
  submitButton.style.display = "none";
  nextButton.style.display = "inline-block";
}

submitButton.addEventListener("click", () => {
  // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
  selectOption();
});

nextButton.addEventListener("click", () => {
  // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
  // Also check for quiz completion here as well
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // Quiz completed

    questionContainer.textContent =
      "Quiz completed! Your score: " + score + " out of " + questions.length;
    alert(
      "Quiz completed! Your score: " + score + " out of " + questions.length
    );
    optionsContainer.innerHTML = "";
    submitButton.style.display = "none";
    nextButton.style.display = "none";
  }
});

// Load the first question on startup
loadQuestion();
