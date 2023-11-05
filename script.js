let counter = 0;
const displayCounter = document.getElementById('mycounter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');

//the counter
function newDisplay() {
    displayCounter.textContent = counter;
}

newDisplay();

// + for the counter
plusBtn.addEventListener('click', function () {
    counter++;
    newDisplay();
});

// - for the counter
minusBtn.addEventListener('click', function () {
    counter--;
    newDisplay();
});

// reset the counter
resetBtn.addEventListener('click', function () {
    counter = 0;
    newDisplay();
});


