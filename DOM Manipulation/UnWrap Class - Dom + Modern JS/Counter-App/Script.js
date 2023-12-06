const counterValue = document.getElementById('counter');

function increment() {
    // get the value from UI
    let value = parseInt(counterValue.innerText);
    // Update the value
    value = value + 1;
    // set the value onto UI
    counterValue.innerText = value;
}

function decrement() {
    // get the value from UI
    let value = parseInt(counterValue.innerText);
    // Update the value
    value = value - 1;
    // set the value onto UI
    counterValue.innerText = value;
}