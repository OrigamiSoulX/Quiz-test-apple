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
    logic: {
        title: "Logic Test Smart Mind",
        questions: [
            {
                question: "Osserva la sequenza di figure e indica quale sarà la prossima:",
                drawFunction: () => {
                    const sequence = [
                        { type: 'square', points: 1 },
                        { type: 'square', points: 2 },
                        { type: 'square', points: 4 },
                        { type: 'square', points: 7 }
                    ];
                    animateSequence(sequence);
                },
                options: [
                    "13 punti",
                    "15 punti",
                    "16 punti",
                    "18 punti"
                ],
                correct: 2,
                explanation: "La differenza tra numeri consecutivi aumenta di 1 ogni volta: +1, +2, +3, +4, quindi il prossimo sarà +5, cioè 11+5=16."
            },
            {
                question: "Osserva la rotazione delle figure e indica la posizione finale:",
                drawFunction: (ctx) => {
                    // Disegna un cerchio e un triangolo con rotazioni
                    const centerX = 150;
                    const centerY = 150;
                    
                    // Disegna il cerchio iniziale
                    drawCircle(ctx, centerX, centerY, 30);
                    
                    // Disegna il triangolo iniziale
                    drawTriangle(ctx, centerX + 100, centerY, 30);
                    
                    // Disegna le frecce di rotazione
                    ctx.beginPath();
                    ctx.moveTo(centerX + 40, centerY);
                    ctx.lineTo(centerX + 60, centerY);
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.moveTo(centerX + 140, centerY);
                    ctx.lineTo(centerX + 160, centerY);
                    ctx.stroke();
                },
                options: [
                    "180 gradi",
                    "270 gradi",
                    "300 gradi",
                    "360 gradi"
                ],
                correct: 1,
                explanation: "Il cerchio ruota di 180° (45° × 4) in senso orario, il triangolo di 120° (30° × 4) in senso antiorario. La differenza totale è 180° + 120° = 300°."
            },
            {
                question: "Completa la sequenza di figure geometriche:",
                drawFunction: () => {
                    const sequence = ['triangle', 'square', 'pentagon', 'hexagon'];
                    animateGeometricSequence(sequence);
                },
                options: [
                    "Triangolo",
                    "Quadrato",
                    "Pentagono",
                    "Esagono"
                ],
                correct: 2,
                explanation: "La sequenza si ripete ogni 4 figure. 15 diviso 4 dà resto 3, quindi sarà la terza figura della sequenza: Pentagono."
            },
            {
                question: "In una griglia di simboli, ogni riga contiene 4 simboli tra stelle, lune e soli. Se in ogni riga la somma di stelle e lune deve essere pari e ci devono essere almeno 2 soli, quante combinazioni diverse sono possibili?",
                drawFunction: () => {
                    const symbols = ['star', 'moon', 'sun', 'star', 'moon', 'sun', 'star', 'moon', 'sun'];
                    animateGrid(symbols, 3, 3);
                },
                options: [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                correct: 2,
                explanation: "Considerando le restrizioni (somma pari di stelle e lune, almeno 2 soli), ci sono 10 combinazioni possibili."
            },
            {
                question: "Se in una sequenza ogni figura è composta da un numero di lati pari alla somma dei lati delle due figure precedenti, e le prime due figure sono un triangolo e un quadrato, quanti lati avrà la quinta figura della sequenza?",
                options: [
                    "21",
                    "24",
                    "28",
                    "34"
                ],
                correct: 2,
                explanation: "Triangolo (3), Quadrato (4), 7 lati, 11 lati, 18 lati, 28 lati. È come la sequenza di Fibonacci ma partendo da 3 e 4."
            },
            {
                question: "In un pattern di figure bianche e nere, ogni figura segue questa regola: se le due figure precedenti sono diverse, la figura è nera; se sono uguali, è bianca. Se la sequenza inizia con Bianca, Nera, quale sarà il colore della ottava figura?",
                options: [
                    "Bianca",
                    "Nera",
                    "Non può essere determinato",
                    "Dipende dalla sesta figura"
                ],
                correct: 0,
                explanation: "Seguendo la regola: B,N,N,B,N,N,B,B. L'ottava figura sarà Bianca perché le due precedenti sono diverse."
            },
            {
                question: "In una serie di dadi, ogni dado successivo viene ruotato di 90° verso destra e poi di 90° verso l'alto. Se si parte con il numero 1 in alto, quale numero sarà in alto dopo 5 rotazioni?",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correct: 2,
                explanation: "Seguendo le rotazioni: 1→3→2→4→5. Dopo 5 rotazioni, il numero 5 sarà in alto."
            },
            {
                question: "In una sequenza di figure concentriche (cerchio, triangolo, quadrato), ogni nuova figura alterna tra essere interna o esterna alle precedenti. Se la sequenza inizia con un cerchio, come sarà composta la quarta figura della sequenza?",
                options: [
                    "Quadrato esterno al cerchio",
                    "Triangolo interno al cerchio",
                    "Cerchio esterno al triangolo",
                    "Quadrato interno al triangolo"
                ],
                correct: 3,
                explanation: "La sequenza è: cerchio, triangolo interno, quadrato esterno, triangolo interno al quadrato."
            },
            {
                question: "In un orologio logico, le ore si muovono di 3 posizioni in avanti e i minuti di 15 posizioni indietro ad ogni passaggio. Se si parte dalle 3:00, che ora sarà dopo 4 passaggi?",
                options: [
                    "7:00",
                    "11:00",
                    "2:00",
                    "5:00"
                ],
                correct: 1,
                explanation: "Le ore: 3→6→9→12→3. I minuti: 00→45→30→15→00. Quindi sarà 11:00."
            },
            {
                question: "In una griglia di simboli, ogni riga contiene 4 simboli tra stelle, lune e soli. Se in ogni riga la somma di stelle e lune deve essere pari e ci devono essere almeno 2 soli, quante combinazioni diverse sono possibili?",
                options: [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                correct: 2,
                explanation: "Considerando le restrizioni (somma pari di stelle e lune, almeno 2 soli), ci sono 10 combinazioni possibili."
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
                question: "Quale principio di design meglio rappresenta l'approccio di Apple all'interfaccia utente?",
                options: [
                    "Massima personalizzazione per ogni utente",
                    "Semplicità e chiarezza prima di tutto",
                    "Funzionalità avanzate in primo piano",
                    "Design artistico e creativo"
                ],
                correct: 1,
                explanation: "Apple privilegia la semplicità e la chiarezza, rendendo le interfacce intuitive e facili da usare per tutti gli utenti."
            },
            {
                question: "In un'app di fotografia, quale sarebbe il modo migliore per presentare le funzioni di editing?",
                options: [
                    "Mostrare tutte le opzioni disponibili contemporaneamente",
                    "Presentare le funzioni più comuni e nascondere quelle avanzate in un menu secondario",
                    "Nascondere tutte le funzioni in menu a tendina",
                    "Creare un tutorial obbligatorio per ogni funzione"
                ],
                correct: 1,
                explanation: "Le HIG suggeriscono di mantenere l'interfaccia semplice mostrando le funzioni più comuni, permettendo agli utenti di accedere a funzionalità avanzate quando necessario."
            },
            {
                question: "Come dovrebbe essere gestito il feedback dopo che un utente salva un documento?",
                options: [
                    "Mostrare un popup che richiede conferma",
                    "Non mostrare alcun feedback per non disturbare",
                    "Fornire un feedback sottile ma chiaro, come un'animazione o un indicatore temporaneo",
                    "Riprodurre un suono di notifica"
                ],
                correct: 2,
                explanation: "Il feedback dovrebbe essere chiaro ma non invasivo, confermando l'azione senza interrompere il flusso di lavoro dell'utente."
            },
            {
                question: "Quale approccio è più appropriato per la gestione degli errori in un form?",
                options: [
                    "Mostrare tutti gli errori alla fine della compilazione",
                    "Evidenziare gli errori in tempo reale mentre l'utente digita",
                    "Bloccare l'input quando viene rilevato un errore",
                    "Resettare il form in caso di errori"
                ],
                correct: 1,
                explanation: "Il feedback immediato aiuta gli utenti a correggere gli errori mentre compilano il form, migliorando l'esperienza utente."
            },
            {
                question: "In un'app di navigazione, come dovrebbero essere presentate le direzioni?",
                options: [
                    "Mostrare tutte le informazioni possibili contemporaneamente",
                    "Fornire solo le informazioni essenziali per il passo corrente",
                    "Nascondere le direzioni in un menu",
                    "Usare solo indicazioni testuali"
                ],
                correct: 1,
                explanation: "Presentare solo le informazioni rilevanti per il momento riduce il carico cognitivo e aiuta l'utente a concentrarsi sul task corrente."
            },
            {
                question: "Come dovrebbe essere implementato il Dark Mode secondo le HIG?",
                options: [
                    "Come una semplice inversione dei colori",
                    "Come un'esperienza completamente riprogettata",
                    "Come una modalità che mantiene la gerarchia visiva e la leggibilità",
                    "Come un'opzione nascosta per utenti avanzati"
                ],
                correct: 2,
                explanation: "Il Dark Mode dovrebbe mantenere la gerarchia visiva e la leggibilità, non essere una semplice inversione dei colori."
            },
            {
                question: "Quale approccio è migliore per la navigazione in un'app complessa?",
                options: [
                    "Utilizzare un menu hamburger per nascondere tutte le opzioni",
                    "Mostrare una tab bar con le funzioni principali e organizzare logicamente le secondarie",
                    "Creare un menu a più livelli",
                    "Utilizzare gesture nascoste"
                ],
                correct: 1,
                explanation: "Una tab bar con le funzioni principali offre accesso immediato alle funzionalità più importanti, mantenendo l'app navigabile."
            },
            {
                question: "Come dovrebbe essere gestito il caricamento dei dati?",
                options: [
                    "Mostrare una schermata di caricamento a tutto schermo",
                    "Non mostrare indicatori di caricamento",
                    "Utilizzare indicatori di progresso contestuali e skeleton screens",
                    "Bloccare l'interfaccia durante il caricamento"
                ],
                correct: 2,
                explanation: "Gli indicatori contestuali e le skeleton screens mantengono l'app reattiva e informano l'utente senza bloccare l'interfaccia."
            },
            {
                question: "Quale approccio è migliore per presentare le impostazioni dell'app?",
                options: [
                    "Mostrare tutte le impostazioni in una lunga lista",
                    "Organizzare le impostazioni in categorie logiche con descrizioni chiare",
                    "Nascondere le impostazioni avanzate",
                    "Utilizzare un sistema di ricerca per le impostazioni"
                ],
                correct: 1,
                explanation: "Organizzare le impostazioni in categorie logiche aiuta gli utenti a trovare facilmente quello che cercano."
            },
            {
                question: "Come dovrebbe essere implementata la funzione di annullamento di un'azione?",
                options: [
                    "Chiedere sempre conferma prima di ogni azione",
                    "Non permettere l'annullamento delle azioni",
                    "Offrire un modo semplice e immediato per annullare le azioni recenti",
                    "Nascondere l'opzione di annullamento in un menu"
                ],
                correct: 2,
                explanation: "Permettere l'annullamento immediato dà sicurezza agli utenti e migliora l'esperienza d'uso."
            },
            {
                question: "Quale approccio è migliore per la gestione dei permessi dell'app?",
                options: [
                    "Richiedere tutti i permessi all'avvio",
                    "Richiedere i permessi solo quando necessari, spiegandone il motivo",
                    "Non richiedere mai permessi",
                    "Nascondere le richieste di permessi nelle impostazioni"
                ],
                correct: 1,
                explanation: "Richiedere i permessi nel contesto appropriato, spiegando perché sono necessari, aiuta gli utenti a prendere decisioni informate."
            },
            {
                question: "Come dovrebbe essere gestita la personalizzazione dell'interfaccia?",
                options: [
                    "Offrire infinite opzioni di personalizzazione",
                    "Non permettere personalizzazioni",
                    "Offrire opzioni di personalizzazione mirate che migliorano l'esperienza utente",
                    "Nascondere le opzioni di personalizzazione"
                ],
                correct: 2,
                explanation: "Le opzioni di personalizzazione dovrebbero essere significative e migliorare l'esperienza senza complicare l'interfaccia."
            },
            {
                question: "Quale approccio è migliore per i tutorial in-app?",
                options: [
                    "Tutorial obbligatori e dettagliati",
                    "Nessun tutorial",
                    "Tutorial contestuali e opzionali che guidano l'utente quando necessario",
                    "Video tutorial all'avvio"
                ],
                correct: 2,
                explanation: "I tutorial contestuali permettono agli utenti di imparare mentre usano l'app, senza interrompere il loro flusso di lavoro."
            },
            {
                question: "Come dovrebbe essere implementata la ricerca in un'app con molti contenuti?",
                options: [
                    "Un semplice campo di ricerca testuale",
                    "Una ricerca avanzata con molti filtri",
                    "Una ricerca intelligente con filtri contestuali e suggerimenti",
                    "Nessuna funzione di ricerca"
                ],
                correct: 2,
                explanation: "Una ricerca intelligente con suggerimenti aiuta gli utenti a trovare rapidamente ciò che cercano."
            },
            {
                question: "Quale approccio è migliore per la gestione degli aggiornamenti dell'app?",
                options: [
                    "Aggiornamenti forzati immediati",
                    "Nessuna notifica di aggiornamento",
                    "Notifiche non intrusive con la possibilità di rimandare",
                    "Aggiornamenti automatici nascosti"
                ],
                correct: 2,
                explanation: "Gli aggiornamenti dovrebbero essere comunicati in modo non intrusivo, dando agli utenti il controllo su quando installarli."
            },
            {
                question: "Come dovrebbe essere gestita la condivisione dei contenuti?",
                options: [
                    "Offrire tutte le possibili opzioni di condivisione",
                    "Limitare la condivisione a poche opzioni",
                    "Mostrare le opzioni più rilevanti per il contenuto e il contesto",
                    "Nascondere le opzioni di condivisione in un menu"
                ],
                correct: 2,
                explanation: "Le opzioni di condivisione dovrebbero essere contestuali e rilevanti per il tipo di contenuto."
            },
            {
                question: "Quale approccio è migliore per il feedback aptico?",
                options: [
                    "Usare il feedback aptico per ogni interazione",
                    "Non usare mai il feedback aptico",
                    "Usare il feedback aptico in modo mirato per azioni significative",
                    "Lasciare che l'utente configuri ogni feedback"
                ],
                correct: 2,
                explanation: "Il feedback aptico dovrebbe essere usato in modo significativo per rafforzare azioni importanti."
            },
            {
                question: "Come dovrebbe essere gestita la privacy dei dati utente?",
                options: [
                    "Raccogliere tutti i dati possibili",
                    "Non raccogliere alcun dato",
                    "Raccogliere solo i dati necessari e comunicarlo chiaramente",
                    "Nascondere la raccolta dati"
                ],
                correct: 2,
                explanation: "La trasparenza nella raccolta dati costruisce fiducia e rispetta la privacy degli utenti."
            },
            {
                question: "Quale approccio è migliore per la gestione delle notifiche?",
                options: [
                    "Inviare notifiche frequenti per ogni evento",
                    "Non inviare mai notifiche",
                    "Inviare notifiche rilevanti e personalizzabili",
                    "Lasciare tutte le notifiche nelle impostazioni"
                ],
                correct: 2,
                explanation: "Le notifiche dovrebbero essere rilevanti e permettere agli utenti di controllarle."
            },
            {
                question: "Come dovrebbe essere implementato il multitasking?",
                options: [
                    "Permettere sempre tutte le operazioni contemporaneamente",
                    "Non supportare il multitasking",
                    "Supportare il multitasking in modo contestuale e intuitivo",
                    "Nascondere le funzionalità di multitasking"
                ],
                correct: 2,
                explanation: "Il multitasking dovrebbe essere supportato quando ha senso per l'utente e l'app."
            },
            {
                question: "Quale approccio è migliore per la gestione degli errori di rete?",
                options: [
                    "Mostrare un errore tecnico dettagliato",
                    "Non mostrare alcun errore",
                    "Mostrare un messaggio chiaro con possibili soluzioni",
                    "Chiudere l'app in caso di errore"
                ],
                correct: 2,
                explanation: "Gli errori dovrebbero essere comunicati in modo comprensibile e offrire soluzioni quando possibile."
            },
            {
                question: "Come dovrebbe essere implementata la modalità offline?",
                options: [
                    "Non supportare l'uso offline",
                    "Bloccare tutte le funzionalità offline",
                    "Offrire funzionalità chiave offline con sincronizzazione intelligente",
                    "Nascondere le funzionalità offline"
                ],
                correct: 2,
                explanation: "La modalità offline dovrebbe mantenere le funzionalità essenziali e sincronizzare quando possibile."
            },
            {
                question: "Quale approccio è migliore per i form lunghi?",
                options: [
                    "Mostrare tutti i campi in una singola schermata",
                    "Dividere il form in step logici con indicatori di progresso",
                    "Nascondere i campi opzionali",
                    "Utilizzare solo campi obbligatori"
                ],
                correct: 1,
                explanation: "Dividere i form lunghi in step logici riduce il carico cognitivo e migliora il completamento."
            },
            {
                question: "Come dovrebbe essere gestita l'accessibilità per gli utenti con disabilità visive?",
                options: [
                    "Offrire un'app separata per l'accessibilità",
                    "Ignorare l'accessibilità",
                    "Integrare l'accessibilità in modo nativo con supporto per screen reader",
                    "Limitare le funzionalità per semplificare l'accesso"
                ],
                correct: 2,
                explanation: "L'accessibilità dovrebbe essere integrata nativamente nell'app per garantire un'esperienza inclusiva."
            },
            {
                question: "Quale approccio è migliore per la gestione del testo in diverse lingue?",
                options: [
                    "Supportare solo la lingua principale",
                    "Tradurre automaticamente tutto",
                    "Supportare più lingue con localizzazione appropriata",
                    "Usare icone invece del testo"
                ],
                correct: 2,
                explanation: "La localizzazione dovrebbe rispettare le convenzioni linguistiche e culturali di ogni lingua."
            },
            {
                question: "Come dovrebbe essere implementato il supporto per schermi di diverse dimensioni?",
                options: [
                    "Creare layout fissi",
                    "Ignorare alcuni dispositivi",
                    "Utilizzare layout adattivi e responsive",
                    "Creare app separate per ogni dimensione"
                ],
                correct: 2,
                explanation: "I layout adattivi garantiscono una buona esperienza su tutti i dispositivi."
            },
            {
                question: "Quale approccio è migliore per la gestione dei dati sensibili?",
                options: [
                    "Salvare tutto localmente",
                    "Salvare tutto nel cloud",
                    "Utilizzare un approccio ibrido con crittografia appropriata",
                    "Non salvare dati sensibili"
                ],
                correct: 2,
                explanation: "La sicurezza dei dati dovrebbe bilanciare comodità e protezione."
            },
            {
                question: "Come dovrebbe essere implementata la ricerca vocale?",
                options: [
                    "Come unica opzione di input",
                    "Non implementarla",
                    "Come opzione complementare con feedback chiaro",
                    "Come funzione nascosta"
                ],
                correct: 2,
                explanation: "La ricerca vocale dovrebbe essere un'opzione aggiuntiva con feedback chiaro sull'interpretazione."
            },
            {
                question: "Quale approccio è migliore per la gestione delle gesture?",
                options: [
                    "Usare gesture complesse per tutte le azioni",
                    "Non usare gesture",
                    "Usare gesture standard e intuitive con alternative visibili",
                    "Nascondere le funzionalità dietro gesture"
                ],
                correct: 2,
                explanation: "Le gesture dovrebbero essere intuitive e avere alternative visibili per la scoperta."
            },
            {
                question: "Come dovrebbe essere implementato il feedback sonoro?",
                options: [
                    "Usare suoni per ogni interazione",
                    "Non usare suoni",
                    "Usare suoni in modo mirato e rispettoso del contesto",
                    "Lasciare i suoni nelle impostazioni"
                ],
                correct: 2,
                explanation: "Il feedback sonoro dovrebbe essere contestuale e rispettare le preferenze di sistema."
            },
            {
                question: "Quale approccio è migliore per la visualizzazione di dati complessi?",
                options: [
                    "Mostrare tutti i dati in tabelle",
                    "Semplificare eccessivamente i dati",
                    "Utilizzare visualizzazioni appropriate con livelli di dettaglio",
                    "Nascondere i dati complessi"
                ],
                correct: 2,
                explanation: "Le visualizzazioni dovrebbero rendere i dati comprensibili mantenendo la complessità necessaria."
            },
            {
                question: "Come dovrebbe essere gestita la performance dell'app?",
                options: [
                    "Ottimizzare solo per dispositivi high-end",
                    "Ignorare la performance",
                    "Bilanciare performance e funzionalità per tutti i dispositivi",
                    "Limitare le funzionalità per la performance"
                ],
                correct: 2,
                explanation: "La performance dovrebbe essere ottimizzata per offrire una buona esperienza su tutti i dispositivi."
            },
            {
                question: "Quale approccio è migliore per l'onboarding degli utenti?",
                options: [
                    "Tutorial lungo e dettagliato",
                    "Nessun onboarding",
                    "Onboarding progressivo e contestuale",
                    "Video introduttivo obbligatorio"
                ],
                correct: 2,
                explanation: "L'onboarding dovrebbe guidare gli utenti progressivamente attraverso le funzionalità chiave."
            },
            {
                question: "Come dovrebbe essere implementata la ricerca avanzata?",
                options: [
                    "Mostrare tutti i filtri possibili",
                    "Non offrire filtri",
                    "Offrire filtri contestuali e rilevanti",
                    "Nascondere i filtri avanzati"
                ],
                correct: 2,
                explanation: "I filtri di ricerca dovrebbero essere pertinenti e facili da usare."
            },
            {
                question: "Quale approccio è migliore per la gestione degli allegati?",
                options: [
                    "Permettere qualsiasi tipo di file",
                    "Non permettere allegati",
                    "Supportare formati comuni con limiti chiari",
                    "Limitare a un solo tipo di file"
                ],
                correct: 2,
                explanation: "La gestione degli allegati dovrebbe essere chiara e supportare i formati più comuni."
            },
            {
                question: "Come dovrebbe essere implementato il supporto per Apple Pencil?",
                options: [
                    "Come unica opzione di input",
                    "Non implementarlo",
                    "Come opzione complementare con funzionalità dedicate",
                    "Come funzione nascosta"
                ],
                correct: 2,
                explanation: "Il supporto per Apple Pencil dovrebbe aggiungere valore quando appropriato."
            },
            {
                question: "Quale approccio è migliore per la gestione della batteria?",
                options: [
                    "Ignorare il consumo della batteria",
                    "Limitare tutte le funzionalità",
                    "Ottimizzare il consumo con modalità di risparmio",
                    "Disabilitare funzioni in background"
                ],
                correct: 2,
                explanation: "L'ottimizzazione della batteria dovrebbe bilanciare funzionalità e durata."
            },
            {
                question: "Come dovrebbe essere implementata la sincronizzazione dei dati?",
                options: [
                    "Sincronizzare continuamente tutto",
                    "Non sincronizzare",
                    "Sincronizzare in modo intelligente e configurabile",
                    "Sincronizzare solo manualmente"
                ],
                correct: 2,
                explanation: "La sincronizzazione dovrebbe essere efficiente e rispettare le preferenze dell'utente."
            },
            {
                question: "Quale approccio è migliore per la gestione dei temi?",
                options: [
                    "Un solo tema fisso",
                    "Infinite opzioni di personalizzazione",
                    "Temi ben progettati che rispettano le linee guida",
                    "Temi generati automaticamente"
                ],
                correct: 2,
                explanation: "I temi dovrebbero mantenere coerenza e usabilità seguendo le linee guida."
            },
            {
                question: "Come dovrebbe essere implementato il supporto per widget?",
                options: [
                    "Widget con tutte le funzionalità dell'app",
                    "Nessun widget",
                    "Widget focalizzati su informazioni e azioni chiave",
                    "Widget puramente decorativi"
                ],
                correct: 2,
                explanation: "I widget dovrebbero fornire informazioni utili e azioni rapide pertinenti."
            },
            {
                question: "Quale approccio è migliore per la gestione degli errori di input?",
                options: [
                    "Bloccare l'input non valido",
                    "Accettare qualsiasi input",
                    "Validare e guidare verso input corretti",
                    "Ignorare gli errori"
                ],
                correct: 2,
                explanation: "La validazione dovrebbe aiutare gli utenti a inserire dati corretti."
            },
            {
                question: "Come dovrebbe essere implementata la modalità landscape?",
                options: [
                    "Forzare l'orientamento portrait",
                    "Ignorare l'orientamento landscape",
                    "Adattare il layout in modo appropriato",
                    "Creare un'interfaccia separata"
                ],
                correct: 2,
                explanation: "Il supporto landscape dovrebbe offrire un'esperienza ottimizzata quando appropriato."
            },
            {
                question: "Quale approccio è migliore per la gestione dei permessi della fotocamera?",
                options: [
                    "Richiedere accesso all'avvio",
                    "Non usare la fotocamera",
                    "Richiedere accesso quando necessario con spiegazione",
                    "Nascondere le funzioni della fotocamera"
                ],
                correct: 2,
                explanation: "I permessi della fotocamera dovrebbero essere richiesti nel contesto appropriato."
            },
            {
                question: "Come dovrebbe essere implementato il supporto per le scorciatoie da tastiera?",
                options: [
                    "Nessuna scorciatoia",
                    "Scorciatoie per tutto",
                    "Scorciatoie intuitive per azioni comuni",
                    "Scorciatoie personalizzabili"
                ],
                correct: 2,
                explanation: "Le scorciatoie dovrebbero migliorare l'efficienza per gli utenti della tastiera."
            },
            {
                question: "Quale approccio è migliore per la gestione del testo lungo?",
                options: [
                    "Mostrare tutto il testo",
                    "Troncare sempre il testo",
                    "Utilizzare tecniche appropriate di presentazione",
                    "Nascondere il testo lungo"
                ],
                correct: 2,
                explanation: "Il testo lungo dovrebbe essere presentato in modo leggibile e accessibile."
            },
            {
                question: "Come dovrebbe essere implementata la ricerca in-app?",
                options: [
                    "Solo ricerca globale",
                    "Nessuna ricerca",
                    "Ricerca contestuale con filtri appropriati",
                    "Ricerca solo per tag"
                ],
                correct: 2,
                explanation: "La ricerca dovrebbe essere contestuale e aiutare gli utenti a trovare ciò che cercano."
            },
            {
                question: "Quale approccio è migliore per la gestione delle animazioni?",
                options: [
                    "Animazioni elaborate ovunque",
                    "Nessuna animazione",
                    "Animazioni sottili e funzionali",
                    "Animazioni casuali"
                ],
                correct: 2,
                explanation: "Le animazioni dovrebbero migliorare la comprensione e il feedback."
            },
            {
                question: "Come dovrebbe essere implementato il supporto per il drag and drop?",
                options: [
                    "Per ogni elemento",
                    "Mai",
                    "Quando migliora l'interazione",
                    "Solo tra app"
                ],
                correct: 2,
                explanation: "Il drag and drop dovrebbe essere implementato dove ha senso per l'utente."
            },
            {
                question: "Quale approccio è migliore per la gestione dei contenuti dinamici?",
                options: [
                    "Aggiornare continuamente",
                    "Contenuti statici",
                    "Aggiornamenti intelligenti e configurabili",
                    "Aggiornamenti manuali"
                ],
                correct: 2,
                explanation: "Gli aggiornamenti dei contenuti dovrebbero bilanciare freschezza e prestazioni."
            },
            {
                question: "Come dovrebbe essere implementata la condivisione tra app?",
                options: [
                    "Condividere tutto",
                    "Nessuna condivisione",
                    "Condivisione contestuale e sicura",
                    "Condivisione limitata"
                ],
                correct: 2,
                explanation: "La condivisione tra app dovrebbe essere sicura e appropriata al contesto."
            },
            {
                question: "Quale approccio è migliore per il feedback degli utenti?",
                options: [
                    "Richiedere feedback continuo",
                    "Non raccogliere feedback",
                    "Offrire canali appropriati per il feedback",
                    "Feedback solo tramite recensioni"
                ],
                correct: 2,
                explanation: "Il feedback degli utenti dovrebbe essere facile da fornire quando desiderato."
            },
            {
                question: "Come dovrebbe essere implementato il supporto per più finestre?",
                options: [
                    "Una sola finestra",
                    "Infinite finestre",
                    "Supporto appropriato al contesto",
                    "Finestre solo per admin"
                ],
                correct: 2,
                explanation: "Il supporto multi-finestra dovrebbe migliorare la produttività quando appropriato."
            },
            {
                question: "Quale approccio è migliore per la gestione dei contenuti offline?",
                options: [
                    "Tutto disponibile offline",
                    "Niente offline",
                    "Contenuti chiave disponibili offline",
                    "Solo cache temporanea"
                ],
                correct: 2,
                explanation: "I contenuti offline dovrebbero essere gestiti in modo intelligente e utile."
            },
            {
                question: "Come dovrebbe essere implementata l'integrazione con Siri?",
                options: [
                    "Nessuna integrazione",
                    "Controllo totale via Siri",
                    "Integrazione per azioni chiave",
                    "Siri come unica interfaccia"
                ],
                correct: 2,
                explanation: "L'integrazione con Siri dovrebbe fornire scorciatoie utili per le azioni principali."
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
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results');
    const score = calculateScore();
    const totalQuestions = getCurrentQuiz().questions.length;
    const percentage = (score / totalQuestions) * 100;

    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    let resultMessage = `
        <h2>Risultati del Quiz</h2>
        <p>Hai risposto correttamente a ${score} domande su ${totalQuestions}</p>
        <p>Percentuale di successo: ${percentage.toFixed(1)}%</p>
    `;

    // Aggiungo il video tutorial per il quiz OOP
    if (currentCategory === 'oop' && percentage >= 60) {
        resultMessage += `
            <div class="tutorial-section">
                <h3>Complimenti! Vuoi approfondire le tue conoscenze?</h3>
                <p>Guarda questo tutorial su UI/UX Design:</p>
                <div class="video-container">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/6FzLp5j-Rl4?start=578" 
                        title="Tutorial UI/UX Design" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <p class="tutorial-description">
                    Questo video ti aiuterà a consolidare le tue conoscenze di UI/UX Design 
                    e a comprendere meglio i concetti affrontati nel quiz.
                </p>
            </div>
        `;
    }

    resultMessage += `
        <button onclick="restartQuiz()" class="btn">Riprova</button>
        <button onclick="goToHome()" class="btn">Torna alla Home</button>
    `;

    resultsContainer.innerHTML = resultMessage;
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

// Funzioni di disegno per Canvas
function drawCircle(ctx, x, y, radius, color = '#000000') {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

function drawSquare(ctx, x, y, size, color = '#000000') {
    ctx.fillStyle = color;
    ctx.fillRect(x - size/2, y - size/2, size, size);
    ctx.strokeRect(x - size/2, y - size/2, size, size);
}

function drawTriangle(ctx, x, y, size, color = '#000000') {
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size, y + size);
    ctx.lineTo(x - size, y + size);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

function drawPolygon(ctx, x, y, radius, sides) {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI / sides) - Math.PI / 2;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;
        if (i === 0) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.closePath();
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
}

function drawDice(ctx, x, y, size, number) {
    // Disegna il dado
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x - size/2, y - size/2, size, size);
    ctx.strokeRect(x - size/2, y - size/2, size, size);
    
    // Disegna i punti
    const dotSize = size/8;
    const positions = {
        1: [[0, 0]],
        2: [[-1, -1], [1, 1]],
        3: [[-1, -1], [0, 0], [1, 1]],
        4: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
        5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]],
        6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]]
    };
    
    ctx.fillStyle = '#000000';
    positions[number].forEach(pos => {
        drawCircle(ctx, x + pos[0] * size/3, y + pos[1] * size/3, dotSize);
    });
}

function drawDomino(ctx, x, y, size, top, bottom) {
    const width = size;
    const height = size * 2;
    
    // Disegna il domino
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x - width/2, y - height/2, width, height);
    ctx.strokeRect(x - width/2, y - height/2, width, height);
    
    // Linea divisoria
    ctx.beginPath();
    ctx.moveTo(x - width/2, y);
    ctx.lineTo(x + width/2, y);
    ctx.stroke();
    
    // Disegna i punti
    const dotSize = size/8;
    const positions = {
        0: [],
        1: [[0, 0]],
        2: [[-1, -1], [1, 1]],
        3: [[-1, -1], [0, 0], [1, 1]],
        4: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
        5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]],
        6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]]
    };
    
    ctx.fillStyle = '#000000';
    // Punti superiori
    positions[top].forEach(pos => {
        drawCircle(ctx, x + pos[0] * size/3, y - height/4 + pos[1] * size/3, dotSize);
    });
    // Punti inferiori
    positions[bottom].forEach(pos => {
        drawCircle(ctx, x + pos[0] * size/3, y + height/4 + pos[1] * size/3, dotSize);
    });
} 