const timerDisplay = document.getElementById('prompt-timer');
const promptText = document.getElementById('prompt-text');
const responseText = document.getElementById('prompt-response-text');
const wordCountDisplay = document.getElementById('word-count');
const body = document.querySelector('body');

let timeLeft = 30;
let response = '';
const maxWords = 20;

// 1. Countdown Timer
const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    // 2. Color Fade
    const progress = (30 - timeLeft) / 30;
    const red = 255;
    const green = 255 - (255 - 246) * progress;
    const blue = 255 - (255 - 198) * progress;
    const color = `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
    
    body.style.color = color;


    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        // Handle time up
    }
}, 1000);

// 3. Text Entry and Word Count
document.addEventListener('keydown', (event) => {
    if (timeLeft > 0) {
        if (event.key === 'Enter') {
            console.log('Response:', response);
            // Potentially submit the response
        } else if (event.key === 'Backspace') {
            response = response.slice(0, -1);
        } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) { // Allow printable characters, exclude control keys
            response += event.key;
        }
        
        responseText.textContent = response;
        
        // Update word count
        const words = response.trim().split(/\s+/).filter(Boolean);
        const wordCount = words.length;
        wordCountDisplay.textContent = `${wordCount} / ${maxWords}`;

        if (wordCount > maxWords) {
            wordCountDisplay.style.color = 'rgb(255, 246, 198)';
        } else {
            wordCountDisplay.style.color = ''; // Revert to default color
        }
    }
});
