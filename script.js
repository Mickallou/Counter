let counter = 0;
let autoPlus
const speedAuto = 100;
const displayCounter = document.getElementById('mycounter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');

//the counter
function newDisplay() {
    displayCounter.textContent = counter;
}

newDisplay();

// + for auto the counter
function startAutoPlus() {
    if (!autoPlus) {
        autoPlus = setInterval(() => {
            counter++;
            newDisplay();
        }, speedAuto);
    };
};

function stopAutoPlus() {
    clearInterval(autoPlus);
    autoPlus = null;
};

plusBtn.addEventListener('mousedown', startAutoPlus);
plusBtn.addEventListener('mouseup', stopAutoPlus);
plusBtn.addEventListener('mouseleave', stopAutoPlus);


// - for the counter
function startAutoMinus() {
    if (!autoPlus) {
        autoPlus = setInterval(() => {
            counter--;
            newDisplay();
        }, speedAuto);
    };
};

function stopAutoMinus() {
    clearInterval(autoPlus);
    autoPlus = null;
};

minusBtn.addEventListener('mousedown', startAutoMinus);
minusBtn.addEventListener('mouseup', stopAutoMinus);
minusBtn.addEventListener('mouseleave', stopAutoMinus);



// reset the counter
resetBtn.addEventListener('click', function () {
    counter = 0;
    newDisplay();
});


