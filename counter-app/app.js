let countText = document.getElementById('count');
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');
let resetBtn = document.getElementById('reset');

let count = 0;
countText.innerHTML = count;

increaseBtn.addEventListener('click', () => {
    count++;
    countText.innerHTML = count;
});

decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        countText.innerHTML = count;
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countText.innerHTML = count;
});
