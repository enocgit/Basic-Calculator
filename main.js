/************** buttons ***************/

const calcButton = document.getElementById('calc-button');
const clearButton = document.querySelector('.clear-btn');


/************ input fields **************/

const firstInput = document.getElementById('input-num1');
const secondInput = document.getElementById('input-num2');


/*********** output field ********************/

const outputField = document.getElementById('display-answer');


/*********** operators *************************/

const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const division = document.getElementById('divide');
const multiplication = document.getElementById('multiply');

const operatorCol = document.querySelector('.op-col');


/*********** functions **********************/

function outputAnswer() {
    if (firstInput.value && secondInput.value) {
        outputField.style.fontSize = '2rem';
        outputField.style.padding = '10px';
        /***! DONT'T FORGET TO CONVERT VALUES OF THE TEXT FIELDS INTO NUMBER */

        if (addition.checked) {
            const answer = Number(firstInput.value) + Number(secondInput.value); //. if the values hadn't been converted,
            outputField.value = answer;                                          // the result would *NOT* have been a Number.
        } else if (subtraction.checked) {
            const answer = Number(firstInput.value) - Number(secondInput.value); // without converting to Number,
            outputField.value = answer;                          // the result *STILL* ends up as Number (weird).
        } else if (division.checked) {
            const answer = Number(firstInput.value) / Number(secondInput.value); // without converting to Number,
            outputField.value = answer.toFixed(2);               // the result *STILL* ends up as Number (weird).
        } else if (multiplication.checked) {
            const answer = Number(firstInput.value) * Number(secondInput.value); // without converting to Number,
            outputField.value = answer;                          // the result *STILL* ends up as Number (weird).
        }
        // Find out why "outputField.value = answer" can't be here
        clearButton.style.visibility = 'visible';
        // clearButton.style.transition = '4s ease-in-out';
    }
}


function showAnswer() {
    if (firstInput.value && secondInput.value && outputField.value == '') {
        outputField.style.fontSize = '.8rem';
        outputField.style.padding = '23.5px';
        if (addition.checked) {
            const answer = Number(firstInput.value) + Number(secondInput.value);
            outputField.placeholder = answer;                                   
        } else if (subtraction.checked) {
            const answer = Number(firstInput.value) - Number(secondInput.value);
            outputField.placeholder = answer;                         
        } else if (division.checked) {
            const answer = Number(firstInput.value) / Number(secondInput.value); 
            outputField.placeholder = answer.toFixed(2);
        } else if (multiplication.checked) {
            const answer = Number(firstInput.value) * Number(secondInput.value);
            outputField.placeholder = answer;
        }
}

}


function removeAnswer() {
    // outputField.style.fontSize = '2rem';
    // outputField.style.padding = '10px';
    outputField.placeholder = '='
}


function erase() {
    firstInput.value = '';
    secondInput.value = '';
    outputField.value = '';
    outputField.placeholder = '='
    clearButton.style.visibility = 'hidden';
    clearButton.style.transition = '.2s ease-out';
} 


function showClear() {
    if (firstInput.value !== '' || secondInput.value !== '') {
        clearButton.style.visibility = 'visible';
    } else {
        clearButton.style.visibility = 'hidden'; 
    }
}


/**************  Event listeners *************/

calcButton.addEventListener('click', outputAnswer);

calcButton.addEventListener('mouseover', showAnswer);

calcButton.addEventListener('mouseout', removeAnswer);

clearButton.addEventListener('click', erase);

firstInput.addEventListener('input', showClear);

secondInput.addEventListener('input', showClear);