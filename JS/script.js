let myContainer = document.getElementById('myDiv');
let increaseButton = document.getElementById('inc');
let decreaseButton = document.getElementById('dec');
let resetButton = document.getElementById('res');


increaseButton.addEventListener('click', (event) => {
    let content = Number.parseInt(myContainer.innerText);
    content++;
    myContainer.innerText = content;
})

decreaseButton.addEventListener('click', (event) => {
    let content = Number.parseInt(myContainer.innerText);
    content--;
    myContainer.innerText = content;
})

resetButton.addEventListener('click', (event) => {
    myContainer.innerText = "0";
})