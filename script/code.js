// Defining variables

const amount = document.querySelector('#enterAmount');
const celString = "°C";
const farString = "°F";
const range = document.querySelector('#choose');
let tempInput = document.querySelector('#enterAmount');
const button = document.querySelector('#calculate')
const answer = document.querySelector('#myAnswer')

// Functions

button.addEventListener('click',()=>{
    
    let toFarhenheit = tempInput.value * 9 / 5 + 32;
    let toCelsius = (tempInput.value*5/9 -32).toFixed(2);

    if (range.checked){
        let finalAnswer = parseFloat(toCelsius)
        answer.innerHTML = parseFloat(finalAnswer) + "°C"
    } else{
        let finalAnswer2 = parseFloat(toFarhenheit)
        answer.innerHTML = parseFloat(finalAnswer2) + "°F"
}
})
