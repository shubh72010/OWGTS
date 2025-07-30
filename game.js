// 1. Get a reference to the canvas element
const canvas = document.getElementById('gameCanvas');

// 2. Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Game variables (we'll add more later)
let playerX = 50; // Initial player X position
let playerY = 50; // Initial player Y position
const playerSize = 30; // Size of our player square
const playerSpeed = 5; // How fast the player moves

// --- Game Loop Functions ---

// Function to update game state (e.g., player position, enemy AI)
function update() {
    // For now, we're not doing much updating here,
    // as movement will be handled by keyboard input directly later.
    // This function will become more complex as the game grows.
}

// Function to draw everything on the canvas
function draw() {
    // Clear the entire canvas before drawing new frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player (a simple red square for now)
    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

// The main game loop function
function gameLoop() {
    update(); // Update game logic
    draw();   // Draw everything

    // Request the browser to call gameLoop again before the next repaint
    // This creates a smooth animation loop (typically 60 frames per second)
    requestAnimationFrame(gameLoop);
}

// Start the game loop when the script loads
gameLoop();

console.log("Game script loaded! Canvas initialized.");
