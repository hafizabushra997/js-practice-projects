let keyInput=document.getElementById('keyInput')
let keyDisplay=document.getElementById('keyDisplay')
keyInput.addEventListener('keydown', (e) => {
    const key = e.key === ' ' ? 'Space' : e.key;
    keyDisplay.innerText = key;
});
