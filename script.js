// Quiz data
const quizData = {
    oop: {
        title: "Object-Oriented Programming Quiz",
        questions: [
            {
                question: "What is encapsulation in OOP?",
                options: [
                    "Bundling data and methods that operate on that data",
                    "Creating multiple instances of a class",
                    "Inheriting properties from a parent class",
                    "Overriding methods in a subclass"
                ],
                correct: 0,
                explanation: "Encapsulation is the bundling of data and methods that operate on that data into a single unit, typically a class."
            },
            {
                question: "What is inheritance in OOP?",
                options: [
                    "A mechanism to create new classes from existing ones",
                    "A way to hide implementation details",
                    "A method to create multiple instances",
                    "A technique to override methods"
                ],
                correct: 0,
                explanation: "Inheritance allows a class to inherit properties and methods from another class, promoting code reuse."
            },
            {
                question: "What is polymorphism in OOP?",
                options: [
                    "The ability to take many forms",
                    "The process of hiding data",
                    "The creation of multiple instances",
                    "The bundling of data and methods"
                ],
                correct: 0,
                explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass."
            },
            {
                question: "What is abstraction in OOP?",
                options: [
                    "Hiding complex implementation details",
                    "Creating multiple instances",
                    "Inheriting properties",
                    "Overriding methods"
                ],
                correct: 0,
                explanation: "Abstraction focuses on hiding complex implementation details and showing only the essential features."
            },
            {
                question: "What is a class in OOP?",
                options: [
                    "A blueprint for creating objects",
                    "A method to hide data",
                    "A way to create instances",
                    "A technique to override methods"
                ],
                correct: 0,
                explanation: "A class is a blueprint or template for creating objects, defining their properties and behaviors."
            },
            {
                question: "What is an object in OOP?",
                options: [
                    "An instance of a class",
                    "A method to hide data",
                    "A way to create classes",
                    "A technique to override methods"
                ],
                correct: 0,
                explanation: "An object is an instance of a class, created from the class blueprint."
            },
            {
                question: "What is a method in OOP?",
                options: [
                    "A function defined within a class",
                    "A way to hide data",
                    "A technique to create instances",
                    "A process to override methods"
                ],
                correct: 0,
                explanation: "A method is a function defined within a class that operates on the class's data."
            },
            {
                question: "What is a constructor in OOP?",
                options: [
                    "A special method to initialize objects",
                    "A way to hide data",
                    "A technique to create classes",
                    "A process to override methods"
                ],
                correct: 0,
                explanation: "A constructor is a special method used to initialize objects when they are created."
            },
            {
                question: "What is method overriding in OOP?",
                options: [
                    "Providing a new implementation of a method in a subclass",
                    "Hiding data in a class",
                    "Creating multiple instances",
                    "Bundling data and methods"
                ],
                correct: 0,
                explanation: "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its parent class."
            },
            {
                question: "What is method overloading in OOP?",
                options: [
                    "Creating multiple methods with the same name but different parameters",
                    "Hiding data in a class",
                    "Creating multiple instances",
                    "Bundling data and methods"
                ],
                correct: 0,
                explanation: "Method overloading allows multiple methods to have the same name but different parameters."
            }
        ]
    },
    algebra: {
        title: "Algebra and Mathematical Logic Quiz",
        questions: [
            {
                question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
                options: [
                    "32",
                    "24",
                    "20",
                    "28"
                ],
                correct: 0,
                explanation: "Each number is multiplied by 2 to get the next number in the sequence."
            },
            {
                question: "What is the probability of rolling a 6 on a standard die?",
                options: [
                    "1/6",
                    "1/3",
                    "1/2",
                    "1/4"
                ],
                correct: 0,
                explanation: "A standard die has 6 faces, so the probability of rolling any specific number is 1 out of 6."
            },
            {
                question: "Complete the sequence: A, C, E, G, ...",
                options: [
                    "I",
                    "H",
                    "F",
                    "J"
                ],
                correct: 0,
                explanation: "The sequence follows the pattern of skipping one letter in the alphabet (A, skip B, C, skip D, etc.)."
            },
            {
                question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?",
                options: [
                    "13",
                    "10",
                    "11",
                    "12"
                ],
                correct: 0,
                explanation: "This is the Fibonacci sequence where each number is the sum of the two preceding ones."
            },
            {
                question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
                options: [
                    "5 minutes",
                    "100 minutes",
                    "20 minutes",
                    "1 minute"
                ],
                correct: 0,
                explanation: "Each machine takes 5 minutes to make one widget, so 100 machines would take the same 5 minutes to make 100 widgets."
            },
            {
                question: "How many fingers are there on 10 hands?",
                options: [
                    "50",
                    "100",
                    "20",
                    "10"
                ],
                correct: 0,
                explanation: "Each hand has 5 fingers, so 10 hands would have 50 fingers in total."
            },
            {
                question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ...?",
                options: [
                    "36",
                    "30",
                    "32",
                    "28"
                ],
                correct: 0,
                explanation: "This sequence represents perfect squares (1², 2², 3², 4², 5², ...)."
            }
        ]
    },
    swift: {
        title: "Swift Programming Quiz",
        questions: [
            {
                question: "What is the difference between 'let' and 'var' in Swift?",
                options: [
                    "'let' declares a constant, 'var' declares a variable",
                    "'let' declares a variable, 'var' declares a constant",
                    "Both declare variables",
                    "Both declare constants"
                ],
                correct: 0,
                explanation: "'let' is used to declare constants that cannot be changed after initialization, while 'var' is used for variables that can be modified."
            },
            {
                question: "What is an optional type in Swift?",
                options: [
                    "A type that can hold either a value or nil",
                    "A type that must always have a value",
                    "A type that cannot be nil",
                    "A type that is always nil"
                ],
                correct: 0,
                explanation: "Optional types in Swift can either contain a value or be nil, providing a safe way to handle the absence of a value."
            },
            {
                question: "What is the correct syntax for declaring an array in Swift?",
                options: [
                    "var array: [Type] = []",
                    "var array = Array()",
                    "var array = []",
                    "var array = new Array()"
                ],
                correct: 0,
                explanation: "The correct syntax for declaring an array in Swift is 'var array: [Type] = []' where Type is the type of elements the array will contain."
            },
            {
                question: "What does the 'map' method do in Swift?",
                options: [
                    "Transforms each element in a collection",
                    "Filters elements in a collection",
                    "Sorts elements in a collection",
                    "Reverses elements in a collection"
                ],
                correct: 0,
                explanation: "The 'map' method transforms each element in a collection according to a provided transformation function."
            },
            {
                question: "What is a closure in Swift?",
                options: [
                    "A self-contained block of functionality",
                    "A type of variable",
                    "A method of a class",
                    "A constant value"
                ],
                correct: 0,
                explanation: "A closure is a self-contained block of functionality that can be passed around and used in your code."
            },
            {
                question: "What is the purpose of 'guard' statement in Swift?",
                options: [
                    "To transfer control out of scope if conditions aren't met",
                    "To create a loop",
                    "To define a function",
                    "To declare a variable"
                ],
                correct: 0,
                explanation: "The 'guard' statement is used to transfer program control out of a scope if one or more conditions aren't met."
            },
            {
                question: "What is a protocol in Swift?",
                options: [
                    "A blueprint of methods and properties",
                    "A type of variable",
                    "A method of a class",
                    "A constant value"
                ],
                correct: 0,
                explanation: "A protocol defines a blueprint of methods, properties, and other requirements that suit a particular task or piece of functionality."
            },
            {
                question: "What is the difference between 'struct' and 'class' in Swift?",
                options: [
                    "Structs are value types, classes are reference types",
                    "Structs are reference types, classes are value types",
                    "They are the same",
                    "Structs can't have methods"
                ],
                correct: 0,
                explanation: "Structs are value types (copied when passed), while classes are reference types (passed by reference)."
            },
            {
                question: "What is the purpose of 'defer' in Swift?",
                options: [
                    "To execute code when leaving current scope",
                    "To create a loop",
                    "To define a function",
                    "To declare a variable"
                ],
                correct: 0,
                explanation: "The 'defer' statement is used to execute a set of statements just before code execution leaves the current block of code."
            },
            {
                question: "What is an enum in Swift?",
                options: [
                    "A type that defines a group of related values",
                    "A type of variable",
                    "A method of a class",
                    "A constant value"
                ],
                correct: 0,
                explanation: "An enum defines a common type for a group of related values and enables you to work with those values in a type-safe way."
            }
        ]
    },
    hig: {
        title: "Apple Human Interface Guidelines Quiz",
        questions: [
            {
                question: "What is the minimum recommended size for a touch target in iOS?",
                options: [
                    "44x44 points",
                    "30x30 points",
                    "20x20 points",
                    "50x50 points"
                ],
                correct: 0,
                explanation: "Apple recommends a minimum size of 44x44 points for touch targets to ensure elements are easily tappable."
            },
            {
                question: "What is the minimum recommended contrast ratio for text in iOS?",
                options: [
                    "4.5:1",
                    "3:1",
                    "2:1",
                    "5:1"
                ],
                correct: 0,
                explanation: "Apple recommends a minimum contrast ratio of 4.5:1 between text and background to ensure readability."
            },
            {
                question: "What is the minimum recommended text size for readability?",
                options: [
                    "11 points",
                    "9 points",
                    "7 points",
                    "13 points"
                ],
                correct: 0,
                explanation: "Apple recommends a minimum text size of 11 points to ensure readability across all devices."
            },
            {
                question: "What is the minimum recommended margin between interactive elements?",
                options: [
                    "8 points",
                    "4 points",
                    "12 points",
                    "16 points"
                ],
                correct: 0,
                explanation: "Apple recommends a minimum margin of 8 points between interactive elements to prevent accidental taps."
            },
            {
                question: "What is the standard color for links in iOS?",
                options: [
                    "Blue",
                    "Red",
                    "Green",
                    "Black"
                ],
                correct: 0,
                explanation: "The standard color for links in iOS is blue, which is universally recognized as an indicator of interactivity."
            },
            {
                question: "What is the recommended duration for animations in iOS?",
                options: [
                    "0.3 seconds",
                    "0.5 seconds",
                    "0.1 seconds",
                    "1 second"
                ],
                correct: 0,
                explanation: "Apple recommends a duration of 0.3 seconds for animations, which is long enough to be noticed but not so long that it slows down interaction."
            },
            {
                question: "What is the standard corner radius for buttons in iOS?",
                options: [
                    "8 points",
                    "4 points",
                    "12 points",
                    "16 points"
                ],
                correct: 0,
                explanation: "Apple recommends a corner radius of 8 points for buttons, which provides a modern and consistent look."
            },
            {
                question: "What is the minimum recommended thickness for lines in iOS?",
                options: [
                    "1 point",
                    "0.5 points",
                    "2 points",
                    "1.5 points"
                ],
                correct: 0,
                explanation: "Apple recommends a minimum thickness of 1 point for lines to ensure visibility across all devices."
            },
            {
                question: "What is the minimum recommended size for icons in iOS?",
                options: [
                    "24x24 points",
                    "20x20 points",
                    "16x16 points",
                    "28x28 points"
                ],
                correct: 0,
                explanation: "Apple recommends a minimum size of 24x24 points for icons to ensure recognizability."
            },
            {
                question: "What is the minimum recommended padding for text in iOS?",
                options: [
                    "16 points",
                    "8 points",
                    "12 points",
                    "20 points"
                ],
                correct: 0,
                explanation: "Apple recommends a minimum padding of 16 points for text to ensure comfortable spacing."
            }
        ]
    }
};

// Global variables
let currentCategory = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let questionOrder = [];
let currentBatch = 1;
const QUESTIONS_PER_BATCH = 10;
const TOTAL_QUESTIONS = 50;
const answeredQuestions = new Set();
let score = 0;
let startTime;
let batchStartTime;
let totalTime = 0;
let timerInterval;
let timerSeconds = 0;
let isTimerRunning = false;

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const quizTitle = document.getElementById('quiz-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const explanationText = document.getElementById('explanation-text');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const endButton = document.getElementById('end-button');
const continueButton = document.getElementById('continue-button');
const correctCount = document.getElementById('correct-count');
const wrongCount = document.getElementById('wrong-count');
const quizSummary = document.getElementById('quiz-summary-list');
const categoryCards = document.querySelectorAll('.category-card');

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (!homeScreen || !quizScreen || !resultsScreen || !categoryCards || !questionText || 
        !optionsContainer || !feedbackContainer || !feedbackText || !explanationText || 
        !correctCount || !wrongCount || !quizSummary || !quizTitle || !prevButton || 
        !nextButton || !endButton || !continueButton) {
        console.error('Unable to initialize DOM elements');
        return;
    }

    // Add event listeners for category selection
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (quizData[category]) {
                startQuiz(category);
            }
        });
    });

    // Add event listeners for navigation buttons
    prevButton.addEventListener('click', showPreviousQuestion);
    nextButton.addEventListener('click', showNextQuestion);
    endButton.addEventListener('click', endQuiz);
    continueButton.addEventListener('click', continueQuiz);

    const startButton = document.getElementById('start-timer');
    const stopButton = document.getElementById('stop-timer');
    const resetButton = document.getElementById('reset-timer');

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

    // Disabilita il pulsante stop all'inizio
    stopButton.disabled = true;
});

// Start quiz function
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    userAnswers = [];
    questionOrder = [];
    answeredQuestions.clear();
    currentBatch = 1;
    startTime = Date.now();
    batchStartTime = startTime;

    // Get first batch of questions
    const questions = getNextBatchOfQuestions();
    if (questions.length === 0) {
        alert('No questions available for this category');
        return;
    }

    // Assign questions to questionOrder
    questionOrder = questions;

    // Update UI
    quizTitle.textContent = `${quizData[category].title} - Batch ${currentBatch}`;
    homeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    displayQuestion();
}

// Get next batch of questions
function getNextBatchOfQuestions() {
    const allQuestions = quizData[currentCategory].questions;
    const availableQuestions = allQuestions.filter((_, index) => !answeredQuestions.has(index));
    
    if (availableQuestions.length === 0) {
        // Reset if all questions have been answered
        answeredQuestions.clear();
        currentBatch = 1;
        return allQuestions.slice(0, QUESTIONS_PER_BATCH);
    }

    // Shuffle available questions
    const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, QUESTIONS_PER_BATCH);
}

// Display question function
function displayQuestion() {
    if (!currentCategory || !questionOrder[currentQuestionIndex]) {
        console.error('Invalid quiz state');
        return;
    }

    const question = questionOrder[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    // Create and display options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });

    // Restore previous answer if exists
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const optionElements = optionsContainer.querySelectorAll('.option');
        optionElements[userAnswers[currentQuestionIndex]].classList.add('selected');
        updateFeedback();
    }

    // Update navigation buttons
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.textContent = currentQuestionIndex === questionOrder.length - 1 ? 'Finish Quiz' : 'Next';
    nextButton.className = currentQuestionIndex === questionOrder.length - 1 ? 'btn btn-primary' : 'btn btn-secondary';
    updateTimer();
}

// Select option function
function selectOption(index) {
    const optionElements = optionsContainer.querySelectorAll('.option');
    optionElements.forEach(element => element.classList.remove('selected'));
    optionElements[index].classList.add('selected');
    userAnswers[currentQuestionIndex] = index;
    updateFeedback();
}

// Update feedback function
function updateFeedback() {
    const question = questionOrder[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    if (userAnswer === undefined) {
        feedbackContainer.classList.add('hidden');
        return;
    }

    const isCorrect = userAnswer === question.correct;
    const optionElements = optionsContainer.querySelectorAll('.option');
    
    optionElements.forEach((element, index) => {
        element.classList.remove('correct', 'wrong');
        if (index === question.correct) {
            element.classList.add('correct');
        } else if (index === userAnswer) {
            element.classList.add('wrong');
        }
    });

    feedbackContainer.classList.remove('hidden');
    feedbackText.textContent = isCorrect ? 'Correct!' : 'Wrong!';
    feedbackText.className = isCorrect ? 'text-success' : 'text-danger';
    explanationText.textContent = question.explanation;
}

// Show previous question function
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Show next question function
function showNextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Please select an answer before proceeding.');
        return;
    }

    if (currentQuestionIndex < questionOrder.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

// Show results function
function showResults() {
    const correctAnswers = userAnswers.filter((answer, index) => 
        answer === questionOrder[index].correct
    ).length;
    const wrongAnswers = userAnswers.length - correctAnswers;

    correctCount.textContent = correctAnswers;
    wrongCount.textContent = wrongAnswers;

    // Update answered questions set
    questionOrder.forEach((_, index) => {
        answeredQuestions.add(index);
    });

    quizSummary.innerHTML = '';
    userAnswers.forEach((answer, index) => {
        const question = questionOrder[index];
        const isCorrect = answer === question.correct;
        const summaryItem = document.createElement('div');
        summaryItem.className = `summary-item ${isCorrect ? 'correct' : 'wrong'}`;
        summaryItem.innerHTML = `
            <strong>Question ${index + 1}:</strong> ${question.question}<br>
            <strong>Your answer:</strong> ${question.options[answer]}<br>
            <strong>Correct answer:</strong> ${question.options[question.correct]}<br>
            <strong>Explanation:</strong> ${question.explanation}
        `;
        quizSummary.appendChild(summaryItem);
    });

    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    // Update continue button text based on remaining batches
    const remainingQuestions = TOTAL_QUESTIONS - answeredQuestions.size;
    continueButton.textContent = remainingQuestions > 0 ? 'Continue to Next Batch' : 'Start New Quiz';
}

// End quiz function
function endQuiz() {
    // Ferma il timer
    stopTimer();
    
    // Prepara il sommario delle risposte
    let summary = '<div class="summary">';
    summary += '<h2>Sommario del Quiz</h2>';
    summary += `<p>Hai completato ${currentQuestionIndex + 1} domande su ${questionOrder.length}</p>`;
    summary += `<p>Punteggio: ${score} su ${currentQuestionIndex + 1}</p>`;
    summary += `<p>Tempo impiegato: ${formatTime(timerSeconds)}</p>`;
    summary += '<h3>Le tue risposte:</h3>';
    
    // Aggiungi ogni domanda e risposta al sommario
    for (let i = 0; i <= currentQuestionIndex; i++) {
        const question = questionOrder[i];
        const userAnswer = userAnswers[i];
        const isCorrect = userAnswer === question.correct;
        
        summary += `
            <div class="question-summary ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>Domanda ${i + 1}:</strong> ${question.question}</p>
                <p>La tua risposta: ${question.options[userAnswer]}</p>
                <p>Risposta corretta: ${question.options[question.correct]}</p>
                <p>Spiegazione: ${question.explanation}</p>
            </div>
        `;
    }
    
    // Aggiungi pulsanti per tornare alla home o continuare
    summary += `
        <div class="summary-buttons">
            <button onclick="window.location.reload()" class="btn btn-primary">Torna alla Home</button>
            <button onclick="continueQuiz()" class="btn btn-success">Continua il Quiz</button>
        </div>
    `;
    summary += '</div>';
    
    // Mostra il sommario
    document.querySelector('.quiz-container').innerHTML = summary;
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Continue quiz function
function continueQuiz() {
    const remainingQuestions = TOTAL_QUESTIONS - answeredQuestions.size;
    
    if (remainingQuestions > 0) {
        // Start next batch
        currentBatch++;
        currentQuestionIndex = 0;
        userAnswers = [];
        questionOrder = getNextBatchOfQuestions();
        quizTitle.textContent = `${quizData[currentCategory].title} - Batch ${currentBatch}`;
        resultsScreen.classList.remove('active');
        quizScreen.classList.add('active');
        displayQuestion();
    } else {
        // Reset quiz
        currentCategory = null;
        currentQuestionIndex = 0;
        userAnswers = [];
        questionOrder = [];
        answeredQuestions.clear();
        currentBatch = 1;
        resultsScreen.classList.remove('active');
        homeScreen.classList.add('active');
    }
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - batchStartTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    document.getElementById('timer').textContent = `Tempo: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById('start-timer').disabled = true;
        document.getElementById('stop-timer').disabled = false;
    }
}

function stopTimer() {
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(timerInterval);
        document.getElementById('start-timer').disabled = false;
        document.getElementById('stop-timer').disabled = true;
    }
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
    document.getElementById('start-timer').disabled = false;
    document.getElementById('stop-timer').disabled = true;
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    
    const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = display;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const shuffledOptions = shuffleArray(question.options);
    const correctAnswerIndex = shuffledOptions.indexOf(question.options[question.correct]);
    
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index, correctAnswerIndex);
        optionsContainer.appendChild(button);
    });
    
    updateProgress();
}

function checkAnswer(selectedIndex, correctIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === correctIndex;
    
    if (isCorrect) {
        score++;
        playSound('correct');
    } else {
        playSound('wrong');
    }
    
    userAnswers[currentQuestionIndex] = selectedIndex;
    showFeedback(isCorrect, question.explanation);
    
    // Disabilita tutti i pulsanti dopo la risposta
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => button.disabled = true);
    
    // Evidenzia la risposta corretta
    buttons[correctIndex].classList.add('correct');
    if (!isCorrect) {
        buttons[selectedIndex].classList.add('wrong');
    }
    
    // Abilita il pulsante Next dopo un breve ritardo
    setTimeout(() => {
        document.getElementById('next-button').disabled = false;
    }, 1000);
} 