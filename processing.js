// Funzioni di Processing per il quiz di logica
let currentAnimation = null;
let animationProgress = 0;
let isAnimating = false;

function setup() {
    createCanvas(800, 400);
    background(255);
    frameRate(60);
}

function draw() {
    background(255);
    if (currentAnimation && isAnimating) {
        currentAnimation();
    }
}

// Funzione per disegnare una sequenza di figure con punti
function drawSequenceWithPoints(sequence) {
    background(255);
    let x = 100;
    const y = height / 2;
    
    sequence.forEach((fig, i) => {
        // Disegna la figura base
        if (fig.type === 'square') {
            rect(x - 25, y - 25, 50, 50);
        } else if (fig.type === 'circle') {
            ellipse(x, y, 50, 50);
        }
        
        // Disegna i punti
        for (let j = 0; j < fig.points; j++) {
            const angle = (j * TWO_PI) / fig.points;
            const px = x + cos(angle) * 20;
            const py = y + sin(angle) * 20;
            ellipse(px, py, 10, 10);
        }
        
        x += 100;
    });
}

// Funzione per disegnare una griglia di simboli
function drawSymbolGrid(symbols, rows, cols) {
    background(255);
    const cellSize = 50;
    const startX = (width - cols * cellSize) / 2;
    const startY = (height - rows * cellSize) / 2;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const x = startX + j * cellSize;
            const y = startY + i * cellSize;
            
            // Disegna il bordo della cella
            rect(x, y, cellSize, cellSize);
            
            // Disegna il simbolo
            const symbol = symbols[i * cols + j];
            if (symbol === 'star') {
                drawStar(x + cellSize/2, y + cellSize/2, 20);
            } else if (symbol === 'moon') {
                drawMoon(x + cellSize/2, y + cellSize/2, 20);
            } else if (symbol === 'sun') {
                drawSun(x + cellSize/2, y + cellSize/2, 20);
            }
        }
    }
}

// Funzione per disegnare una stella con effetti di brillantezza
function drawStar(x, y, size) {
    push();
    translate(x, y);
    
    // Effetto di brillantezza
    for(let i = 0; i < 3; i++) {
        const pulse = sin(frameCount * 0.05 + i) * 5;
        const starSize = size + pulse;
        
        beginShape();
        for (let i = 0; i < 5; i++) {
            const angle = TWO_PI * i / 5 - HALF_PI;
            const px = cos(angle) * starSize;
            const py = sin(angle) * starSize;
            vertex(px, py);
        }
        endShape(CLOSE);
    }
    
    // Punto centrale luminoso
    fill(255, 255, 0);
    noStroke();
    circle(0, 0, size/2);
    pop();
}

// Funzione per disegnare una luna con effetto di fase
function drawMoon(x, y, size) {
    push();
    translate(x, y);
    
    // Effetto di rotazione
    rotate(frameCount * 0.02);
    
    // Luna principale
    fill(200);
    noStroke();
    arc(0, 0, size * 2, size * 2, -HALF_PI, HALF_PI);
    
    // Effetto di luminosità
    for(let i = 0; i < 3; i++) {
        const glow = sin(frameCount * 0.03 + i) * 5;
        const glowSize = size * 2 + glow;
        fill(200, 200, 255, 50);
        arc(0, 0, glowSize, glowSize, -HALF_PI, HALF_PI);
    }
    pop();
}

// Funzione per disegnare un sole con raggi animati
function drawSun(x, y, size) {
    push();
    translate(x, y);
    
    // Raggi del sole
    for(let i = 0; i < 8; i++) {
        const angle = TWO_PI * i / 8;
        const rayLength = size * 1.5 + sin(frameCount * 0.05 + i) * 5;
        const px = cos(angle) * rayLength;
        const py = sin(angle) * rayLength;
        
        stroke(255, 255, 0);
        strokeWeight(2);
        line(0, 0, px, py);
    }
    
    // Sole principale
    fill(255, 255, 0);
    noStroke();
    circle(0, 0, size * 2);
    
    // Effetto di brillantezza
    for(let i = 0; i < 3; i++) {
        const pulse = sin(frameCount * 0.03 + i) * 3;
        const glowSize = size * 2 + pulse;
        fill(255, 255, 0, 50);
        circle(0, 0, glowSize);
    }
    pop();
}

// Funzione per disegnare una sequenza di figure geometriche
function drawGeometricSequence(sequence) {
    background(255);
    let x = 100;
    const y = height / 2;
    
    sequence.forEach((fig, i) => {
        if (fig === 'triangle') {
            drawTriangle(x, y, 30);
        } else if (fig === 'square') {
            rect(x - 25, y - 25, 50, 50);
        } else if (fig === 'pentagon') {
            drawPolygon(x, y, 30, 5);
        } else if (fig === 'hexagon') {
            drawPolygon(x, y, 30, 6);
        }
        x += 100;
    });
}

// Funzione per disegnare un poligono regolare con effetti di rotazione
function drawPolygon(x, y, radius, sides) {
    push();
    translate(x, y);
    
    // Rotazione fluida
    rotate(frameCount * 0.01);
    
    // Effetto di pulsazione
    const pulse = sin(frameCount * 0.05) * 5;
    const currentRadius = radius + pulse;
    
    beginShape();
    for (let i = 0; i < sides; i++) {
        const angle = TWO_PI * i / sides - HALF_PI;
        const px = cos(angle) * currentRadius;
        const py = sin(angle) * currentRadius;
        vertex(px, py);
    }
    endShape(CLOSE);
    
    // Effetto di bordo luminoso
    for(let i = 0; i < 3; i++) {
        const glow = sin(frameCount * 0.03 + i) * 3;
        const glowRadius = currentRadius + glow;
        noFill();
        stroke(255, 200);
        strokeWeight(1);
        beginShape();
        for (let i = 0; i < sides; i++) {
            const angle = TWO_PI * i / sides - HALF_PI;
            const px = cos(angle) * glowRadius;
            const py = sin(angle) * glowRadius;
            vertex(px, py);
        }
        endShape(CLOSE);
    }
    pop();
}

// Funzione per disegnare un triangolo con effetti di rotazione e colore
function drawTriangle(x, y, size) {
    push();
    translate(x, y);
    
    // Rotazione fluida
    rotate(frameCount * 0.02);
    
    // Effetto di pulsazione
    const pulse = sin(frameCount * 0.05) * 5;
    const currentSize = size + pulse;
    
    // Colore che cambia
    const hue = (frameCount * 2) % 360;
    fill(hue, 100, 100);
    
    beginShape();
    for (let i = 0; i < 3; i++) {
        const angle = TWO_PI * i / 3 - HALF_PI;
        const px = cos(angle) * currentSize;
        const py = sin(angle) * currentSize;
        vertex(px, py);
    }
    endShape(CLOSE);
    
    // Effetto di bordo luminoso
    for(let i = 0; i < 3; i++) {
        const glow = sin(frameCount * 0.03 + i) * 3;
        const glowSize = currentSize + glow;
        noFill();
        stroke(255, 200);
        strokeWeight(1);
        beginShape();
        for (let i = 0; i < 3; i++) {
            const angle = TWO_PI * i / 3 - HALF_PI;
            const px = cos(angle) * glowSize;
            const py = sin(angle) * glowSize;
            vertex(px, py);
        }
        endShape(CLOSE);
    }
    pop();
}

// Animazione per la sequenza di figure
function animateSequence(sequence, callback) {
    let currentIndex = 0;
    let scale = 0;
    isAnimating = true;
    
    currentAnimation = () => {
        if (currentIndex < sequence.length) {
            scale = lerp(scale, 1, 0.1);
            const x = 100 + currentIndex * 150;
            const y = height/2;
            
            push();
            translate(x, y);
            scale(scale);
            
            if (sequence[currentIndex].type === 'square') {
                drawSquare(0, 0, 50);
                drawPoints(sequence[currentIndex].points);
            }
            pop();
            
            if (scale > 0.99) {
                currentIndex++;
                scale = 0;
            }
        } else {
            isAnimating = false;
            currentAnimation = null;
            if (callback) callback();
        }
    };
}

// Animazione per la griglia di simboli
function animateGrid(symbols, rows, cols, callback) {
    let revealed = 0;
    let total = rows * cols;
    isAnimating = true;
    
    currentAnimation = () => {
        background(255);
        const cellSize = 50;
        const startX = (width - cols * cellSize) / 2;
        const startY = (height - rows * cellSize) / 2;
        
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const index = i * cols + j;
                const x = startX + j * cellSize;
                const y = startY + i * cellSize;
                
                if (index < revealed) {
                    const symbol = symbols[index];
                    if (symbol === 'star') {
                        drawStar(x + cellSize/2, y + cellSize/2, 20);
                    } else if (symbol === 'moon') {
                        drawMoon(x + cellSize/2, y + cellSize/2, 20);
                    } else if (symbol === 'sun') {
                        drawSun(x + cellSize/2, y + cellSize/2, 20);
                    }
                } else {
                    fill(200);
                    rect(x, y, cellSize, cellSize);
                }
            }
        }
        
        if (revealed < total) {
            revealed++;
        } else {
            isAnimating = false;
            currentAnimation = null;
            if (callback) callback();
        }
    };
}

// Animazione per le figure geometriche
function animateGeometricSequence(sequence, callback) {
    let currentIndex = 0;
    let rotation = 0;
    isAnimating = true;
    
    currentAnimation = () => {
        background(255);
        if (currentIndex < sequence.length) {
            const x = 100 + currentIndex * 150;
            const y = height/2;
            
            push();
            translate(x, y);
            rotate(rotation);
            
            if (sequence[currentIndex] === 'triangle') {
                drawTriangle(0, 0, 30);
            } else if (sequence[currentIndex] === 'square') {
                drawSquare(0, 0, 50);
            } else if (sequence[currentIndex] === 'pentagon') {
                drawPolygon(0, 0, 30, 5);
            } else if (sequence[currentIndex] === 'hexagon') {
                drawPolygon(0, 0, 30, 6);
            }
            pop();
            
            rotation += 0.05;
            if (rotation > TWO_PI) {
                rotation = 0;
                currentIndex++;
            }
        } else {
            isAnimating = false;
            currentAnimation = null;
            if (callback) callback();
        }
    };
}

// Funzione per disegnare i punti con animazione
function drawPoints(numPoints) {
    for (let i = 0; i < numPoints; i++) {
        const angle = (i * TWO_PI / numPoints) - HALF_PI;
        const px = cos(angle) * 20;
        const py = sin(angle) * 20;
        fill(0);
        noStroke();
        circle(px, py, 5);
    }
} 