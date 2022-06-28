var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var adicionar = document.getElementsByName('adicionar');
var subtrair = document.getElementsByName('subtrair');

adicionar[0].addEventListener("click", increment);
subtrair[0].addEventListener("click", decrement);

function verificarContador() {
    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = 'black';
    }
}

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    verificarContador();
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    verificarContador();
}