// get element by id    
let rootHW;
rootHW = document.getElementById('rootHW')

//inputs
rootHW.innerHTML = '<p>Name: <input></input></p> <p>Country:<input></input></p>';
let input = document.createElement('input');

var button = document.createElement('button')
// change button text
button.innerText = 'Console Log'
rootHW.appendChild(button)

let resetButton = document.createElement('button')
resetButton.innerText = 'Clear';
rootHW.appendChild(resetButton)

// console log all inputs
let content = document.getElementsByTagName('input')
button.addEventListener('click', logTextOnClick);

let canvas = document.getElementById('canvas');

function logTextOnClick() {
    console.log('Name: ' + content[0].value);
    console.log('Country: ' + content[1].value);
// append p to form with values of inputs when clicking the button
    canvas.innerText = content[0].value + ' is from ' + content[1].value;
};

let printingCanvas = document.createElement('hr');
rootHW.appendChild(printingCanvas)

//Clear button
resetButton.addEventListener('click', function () {
    document.location.href = document.location.href
})

// console log button 
console.log(button)

// add class to button and country input
button.setAttribute('class', 'classToBeStyled');
content[1].setAttribute('class', 'classToBeStyled')
button.setAttribute('style', 'color:red');
content[1].setAttribute('style', 'color:red');


/* change color of that class
let classToBeStyled = document.getElementsByClassName("classToBeStyled")
console.log(classToBeStyled)
classToBeStyled.setAttribute('style', 'color:red'); */
