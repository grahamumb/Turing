const timerDisplay = document.getElementById('judging-timer');
const humanButton = document.getElementById('human-button');
const aiButton = document.getElementById('ai-button');
const body = document.querySelector('body');

let timeLeft = 7;
const totalTime = 7; // Total time for the countdown

// Countdown Timer
const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    // Color Fade
    const progress = (totalTime - timeLeft) / totalTime;
    const red = 255;
    const green = 255 - (255 - 246) * progress;
    const blue = 255 - (255 - 198) * progress;
    const color = `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
    
    body.style.color = color;
    humanButton.style.color = color;
    humanButton.style.borderColor = color;
    aiButton.style.color = color;
    aiButton.style.borderColor = color;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        // Handle time up - e.g., automatically select AI or move to next phase
        console.log('Time is up!');
    }
}, 1000);

// Button Listeners
humanButton.addEventListener('click', () => {
    console.log('Human button clicked!');
    clearInterval(timerInterval); // Stop timer on selection
    // Proceed with game logic for Human selection
});

aiButton.addEventListener('click', () => {
    console.log('AI button clicked!');
    clearInterval(timerInterval); // Stop timer on selection
    // Proceed with game logic for AI selection
});
