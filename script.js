// Get the necessary DOM elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const startQuizButton = document.getElementById('start-quiz');

// Initialize quiz variables
let currentQuestion = 0;
let score = 0;

// Display a question and its options
function displayQuestion() {
    questionElement.textContent = questions[currentQuestion].question;

    optionsElement.innerHTML = '';
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const option = document.createElement('button');
        option.textContent = questions[currentQuestion].options[i];
        option.addEventListener('click', () => checkAnswer(i));
        optionsElement.appendChild(option);
    }
}

// Check the user's selected answer
function checkAnswer(selectedIndex) {
    questions[currentQuestion].userAnswerIndex = selectedIndex;

    if (selectedIndex === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// Display the quiz result
function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    submitButton.style.display = 'none';

    let resultHTML = `You scored ${score} out of ${questions.length}!<br><br>`;
    resultHTML += '<strong>Questions and Answers:</strong><br><br>';

    for (let i = 0; i < questions.length; i++) {
        const userAnswer = questions[i].options[questions[i].userAnswerIndex];
        const correctAnswer = questions[i].options[questions[i].correctAnswer];

        resultHTML += `<p><strong>Question ${i + 1}:</strong> ${questions[i].question}</p>`;
        resultHTML += `<p>Your Answer: ${userAnswer}</p>`;
        resultHTML += `<p>Correct Answer: ${correctAnswer}</p><br>`;
    }

    resultElement.innerHTML = resultHTML;
}

// Attach click event listener to the start-quiz button
startQuizButton.addEventListener('click', () => {
    startQuizButton.style.display = 'none';
    displayQuestion();
});

