const usernameText = document.getElementById('username-text');
const caret = document.getElementById('caret');
let username = '';

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (username) {
            console.log('Username:', username);
        }
    } else if (event.key === 'Backspace') {
        username = username.slice(0, -1);
        usernameText.textContent = username;
    } else if (event.key.length === 1) { // Handle printable characters
        username += event.key;
        usernameText.textContent = username;
    }
});
