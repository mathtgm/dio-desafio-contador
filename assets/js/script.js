var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var adicionar = document.getElementsByName('adicionar');
var subtrair = document.getElementsByName('subtrair');

adicionar[0].addEventListener("click", increment);
subtrair[0].addEventListener("click", decrement);

function verificarBtn() {
    if((currentNumber + 1) > 10) {
        document.getElementsByName("adicionar")[0].disabled = true;
    } else {
        document.getElementsByName("adicionar")[0].disabled = false;
    }

    if((currentNumber - 1) < 0) {
        document.getElementsByName('subtrair')[0].disabled = true;
    } else {
        document.getElementsByName('subtrair')[0].disabled = false;
    }
}

function increment() {
    if(currentNumber < 10) {
        currentNumber++;
       verificarBtn();
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if(currentNumber > 0) {
        currentNumber--;
        verificarBtn();
    }
    
    currentNumberWrapper.innerHTML = currentNumber;
}