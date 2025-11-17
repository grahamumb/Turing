const playContainer = document.getElementById('play-container');
const playText = document.getElementById('play-text');
const caret = document.getElementById('caret');

const textToType = 'join lobby';
let animationStarted = false;

function startTypingAnimation() {
    if (animationStarted) {
        return;
    }
    animationStarted = true;
    

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < textToType.length) {
            playText.textContent += textToType.charAt(i);
            caret.style.display = 'none';
            i++;
        } else {
            clearInterval(typingInterval);
            
            playContainer.addEventListener('click', () => {
                // Add click functionality here
                console.log('Play button clicked!');
            });
        }
    }, 90);
}

playContainer.addEventListener('mouseover', startTypingAnimation);
document.addEventListener('keydown', startTypingAnimation);
