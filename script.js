// Quiz data
const quizData = {
    oop: {
        title: "Object-Oriented Programming Quiz",
        questions: [
            {
                question: "What is encapsulation in OOP?",
                options: [
                    "Creating multiple instances of a class",
                    "Bundling data and methods that operate on that data",
                    "Inheriting properties from a parent class",
                    "Overriding methods in a subclass"
                ],
                correct: 1,
                explanation: "Encapsulation is the bundling of data and methods that operate on that data into a single unit, typically a class."
            },
            {
                question: "What is inheritance in OOP?",
                options: [
                    "A way to hide implementation details",
                    "A method to create multiple instances",
                    "A mechanism to create new classes from existing ones",
                    "A technique to override methods"
                ],
                correct: 2,
                explanation: "Inheritance allows a class to inherit properties and methods from another class, promoting code reuse."
            },
            {
                question: "What is polymorphism in OOP?",
                options: [
                    "The process of hiding data",
                    "The creation of multiple instances",
                    "The bundling of data and methods",
                    "The ability to take many forms"
                ],
                correct: 3,
                explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass."
            },
            {
                question: "What is abstraction in OOP?",
                options: [
                    "Creating multiple instances",
                    "Hiding complex implementation details",
                    "Inheriting properties",
                    "Overriding methods"
                ],
                correct: 1,
                explanation: "Abstraction focuses on hiding complex implementation details and showing only the essential features."
            },
            {
                question: "What is a class in OOP?",
                options: [
                    "A method to hide data",
                    "A way to create instances",
                    "A blueprint for creating objects",
                    "A technique to override methods"
                ],
                correct: 2,
                explanation: "A class is a blueprint or template for creating objects, defining their properties and behaviors."
            },
            {
                question: "What is an object in OOP?",
                options: [
                    "A method to hide data",
                    "An instance of a class",
                    "A way to create classes",
                    "A technique to override methods"
                ],
                correct: 1,
                explanation: "An object is an instance of a class, created from the class blueprint."
            },
            {
                question: "What is a method in OOP?",
                options: [
                    "A way to hide data",
                    "A technique to create instances",
                    "A process to override methods",
                    "A function defined within a class"
                ],
                correct: 3,
                explanation: "A method is a function defined within a class that operates on the class's data."
            },
            {
                question: "What is a constructor in OOP?",
                options: [
                    "A way to hide data",
                    "A special method to initialize objects",
                    "A technique to create classes",
                    "A process to override methods"
                ],
                correct: 1,
                explanation: "A constructor is a special method used to initialize objects when they are created."
            },
            {
                question: "What is method overriding in OOP?",
                options: [
                    "Hiding data in a class",
                    "Creating multiple instances",
                    "Providing a new implementation of a method in a subclass",
                    "Bundling data and methods"
                ],
                correct: 2,
                explanation: "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its parent class."
            },
            {
                question: "What is method overloading in OOP?",
                options: [
                    "Hiding data in a class",
                    "Creating multiple methods with the same name but different parameters",
                    "Creating multiple instances",
                    "Bundling data and methods"
                ],
                correct: 1,
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
                    "24",
                    "32",
                    "20",
                    "28"
                ],
                correct: 1,
                explanation: "Each number is multiplied by 2 to get the next number in the sequence."
            },
            {
                question: "What is the probability of rolling a 6 on a standard die?",
                options: [
                    "1/3",
                    "1/2",
                    "1/6",
                    "1/4"
                ],
                correct: 2,
                explanation: "A standard die has 6 faces, so the probability of rolling any specific number is 1 out of 6."
            },
            {
                question: "Complete the sequence: A, C, E, G, ...",
                options: [
                    "H",
                    "F",
                    "J",
                    "I"
                ],
                correct: 3,
                explanation: "The sequence follows the pattern of skipping one letter in the alphabet (A, skip B, C, skip D, etc.)."
            },
            {
                question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?",
                options: [
                    "10",
                    "11",
                    "13",
                    "12"
                ],
                correct: 2,
                explanation: "This is the Fibonacci sequence where each number is the sum of the two preceding ones."
            },
            {
                question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
                options: [
                    "100 minutes",
                    "5 minutes",
                    "20 minutes",
                    "1 minute"
                ],
                correct: 1,
                explanation: "Each machine takes 5 minutes to make one widget, so 100 machines would take the same 5 minutes to make 100 widgets."
            },
            {
                question: "How many fingers are there on 10 hands?",
                options: [
                    "100",
                    "20",
                    "50",
                    "10"
                ],
                correct: 2,
                explanation: "Each hand has 5 fingers, so 10 hands would have 50 fingers in total."
            },
            {
                question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ...?",
                options: [
                    "30",
                    "36",
                    "32",
                    "28"
                ],
                correct: 1,
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
                question: "Qual è lo scopo principale delle Apple Human Interface Guidelines?",
                options: [
                    "Fornire linee guida per lo sviluppo hardware",
                    "Offrire raccomandazioni per progettare esperienze utente coerenti su tutte le piattaforme Apple",
                    "Definire standard di codifica per le applicazioni Apple",
                    "Stabilire politiche di marketing per le app"
                ],
                correct: 1,
                explanation: "Le HIG forniscono indicazioni per creare interfacce utente intuitive e coerenti su macOS, iOS, watchOS, tvOS e altre piattaforme Apple."
            },
            {
                question: "Quale tra i seguenti è un principio chiave delle HIG di Apple?",
                options: [
                    "Personalizzazione estrema",
                    "Coerenza",
                    "Sovraccarico di funzionalità",
                    "Design complesso"
                ],
                correct: 1,
                explanation: "La coerenza assicura che le applicazioni si comportino in modo prevedibile, facilitando l'apprendimento e l'uso da parte degli utenti."
            },
            {
                question: "Secondo le HIG, come dovrebbero essere utilizzati i colori nelle applicazioni?",
                options: [
                    "Utilizzare colori vivaci per tutti gli elementi",
                    "Evitare l'uso del colore per indicare lo stato",
                    "Usare i colori di sistema per garantire leggibilità e coerenza",
                    "Utilizzare solo colori monocromatici"
                ],
                correct: 2,
                explanation: "I colori di sistema si adattano automaticamente a diverse modalità e impostazioni di accessibilità, migliorando l'esperienza utente."
            },
            {
                question: "Qual è la funzione principale dei pulsanti secondo le HIG?",
                options: [
                    "Visualizzare informazioni",
                    "Iniziare un'azione o confermare una decisione",
                    "Navigare tra diverse sezioni",
                    "Decorare l'interfaccia"
                ],
                correct: 1,
                explanation: "I pulsanti sono elementi interattivi che consentono agli utenti di eseguire azioni specifiche nell'app."
            },
            {
                question: "Secondo le HIG, come dovrebbero essere progettate le icone delle app?",
                options: [
                    "Dettagliate e complesse",
                    "Semplici, riconoscibili e in linea con il design dell'app",
                    "Utilizzando solo colori neutri",
                    "Simili alle icone di altre app"
                ],
                correct: 1,
                explanation: "Le icone dovrebbero essere distintive e riflettere lo stile e la funzionalità dell'app, mantenendo semplicità e riconoscibilità."
            },
            {
                question: "Qual è l'obiettivo principale dell'accessibilità nelle HIG di Apple?",
                options: [
                    "Limitare l'uso dell'app a utenti specifici",
                    "Garantire che tutte le persone possano utilizzare l'app",
                    "Aggiungere funzionalità avanzate per utenti esperti",
                    "Migliorare le prestazioni dell'app"
                ],
                correct: 1,
                explanation: "L'accessibilità assicura che l'app sia utilizzabile da persone con diverse esigenze e capacità, rendendo l'esperienza inclusiva per tutti."
            },
            {
                question: "Come dovrebbero essere gestite le notifiche secondo le HIG?",
                options: [
                    "Inviare notifiche frequenti per mantenere l'utente coinvolto",
                    "Utilizzare notifiche solo per informazioni importanti e pertinenti",
                    "Personalizzare le notifiche con suoni unici",
                    "Inviare notifiche in orari casuali"
                ],
                correct: 1,
                explanation: "Le notifiche dovrebbero essere utilizzate con moderazione e solo per informazioni veramente importanti e rilevanti per l'utente."
            },
            {
                question: "Quale approccio al design è preferito nelle HIG?",
                options: [
                    "Design minimalista e intuitivo",
                    "Design complesso e dettagliato",
                    "Design basato su tendenze temporanee",
                    "Design che privilegia l'estetica sulla funzionalità"
                ],
                correct: 0,
                explanation: "Apple privilegia un design minimalista e intuitivo che facilita l'uso dell'app senza sacrificare la funzionalità."
            },
            {
                question: "Come dovrebbe essere gestito il feedback utente secondo le HIG?",
                options: [
                    "Fornire feedback solo in caso di errori",
                    "Ignorare il feedback per non disturbare l'utente",
                    "Fornire feedback immediato e chiaro per ogni azione",
                    "Raccogliere feedback solo attraverso recensioni"
                ],
                correct: 2,
                explanation: "Il feedback immediato e chiaro aiuta gli utenti a capire che le loro azioni sono state registrate e processate dal sistema."
            },
            {
                question: "Quale principio guida la navigazione nelle app secondo le HIG?",
                options: [
                    "Creare percorsi di navigazione complessi",
                    "Mantenere la navigazione semplice e intuitiva",
                    "Nascondere le opzioni di navigazione",
                    "Cambiare frequentemente la struttura di navigazione"
                ],
                correct: 1,
                explanation: "Una navigazione semplice e intuitiva permette agli utenti di orientarsi facilmente nell'app e trovare ciò che cercano."
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
    const currentQuestion = quizData[currentCategory].questions[currentQuestionIndex];
    
    // Randomizza le opzioni
    const originalOptions = [...currentQuestion.options];
    const shuffledOptions = shuffleArray(originalOptions);
    
    // Trova il nuovo indice della risposta corretta
    const correctIndex = shuffledOptions.indexOf(originalOptions[currentQuestion.correct]);
    
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => checkAnswer(index, correctIndex);
        optionsContainer.appendChild(button);
    });
    
    // Nascondi il feedback
    feedbackContainer.style.display = 'none';
    feedbackText.textContent = '';
    explanationText.textContent = '';
    
    updateNavigationButtons();
}

function selectOption(selectedIndex, correctIndex) {
    const optionElements = optionsContainer.querySelectorAll('.option');
    optionElements.forEach(element => element.classList.remove('selected'));
    optionElements[selectedIndex].classList.add('selected');
    
    const isCorrect = selectedIndex === correctIndex;
    userAnswers[currentQuestionIndex] = isCorrect ? correctIndex : selectedIndex;
    
    if (isCorrect) {
        score++;
        playSound('correct');
    } else {
        playSound('wrong');
    }
    
    optionElements.forEach((option, index) => {
        option.disabled = true;
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('wrong');
        }
    });
    
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

function playSound(sound) {
    // Implementation of playSound function
}

function updateProgress() {
    // Implementation of updateProgress function
}

// Funzione per aggiornare i pulsanti di navigazione
function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const endButton = document.getElementById('end-button');

    if (prevButton) {
        prevButton.disabled = currentQuestionIndex === 0;
    }

    if (nextButton) {
        nextButton.textContent = currentQuestionIndex === quizData[currentCategory].questions.length - 1 ? 'Finish Quiz' : 'Next';
        nextButton.className = currentQuestionIndex === quizData[currentCategory].questions.length - 1 ? 'btn btn-primary' : 'btn btn-secondary';
    }

    if (endButton) {
        endButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    }
}

// Funzione per controllare la risposta
function checkAnswer(selectedIndex, correctIndex) {
    const options = document.querySelectorAll('.option');
    
    // Disabilita tutti i pulsanti
    options.forEach(button => button.disabled = true);
    
    // Rimuovi le classi precedenti
    options.forEach(button => {
        button.classList.remove('correct', 'wrong', 'selected');
    });
    
    // Aggiungi le classi appropriate con un leggero ritardo per l'animazione
    setTimeout(() => {
        options.forEach((button, index) => {
            if (index === correctIndex) {
                button.classList.add('correct');
            }
            if (index === selectedIndex && selectedIndex !== correctIndex) {
                button.classList.add('wrong');
            }
            if (index === selectedIndex) {
                button.classList.add('selected');
            }
        });
    }, 100);
    
    // Mostra il feedback
    const isCorrect = selectedIndex === correctIndex;
    feedbackContainer.style.display = 'block';
    feedbackText.textContent = isCorrect ? 'Corretto!' : 'Sbagliato!';
    feedbackText.className = isCorrect ? 'text-success' : 'text-danger';
    explanationText.textContent = quizData[currentCategory].questions[currentQuestionIndex].explanation;
    
    // Anima il container del feedback
    feedbackContainer.style.opacity = '0';
    setTimeout(() => {
        feedbackContainer.style.opacity = '1';
    }, 100);
    
    // Aggiorna il punteggio e salva la risposta
    if (isCorrect) {
        score++;
    }
    
    userAnswers[currentQuestionIndex] = {
        selected: selectedIndex,
        correct: correctIndex,
        isCorrect: isCorrect
    };
} 