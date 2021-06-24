/* Assignment Document Object Model
1) Make a heading saying "Hello" 
2) Insert one input field for your name
3) one input field for number
4) one button saying ‘Send Message’.
*/

alert(' Fill the required Fields by Typing Your Name and Contact Number');

function showAlert(){
let inputElement=document.querySelector('input'); // for input Name
let inputValue=inputElement.value;
console.log(inputValue);

let inputElement2=document.querySelector('#input2'); // for input Contact Number
let inputValue2=inputElement2.value;
console.log(inputValue2);

//let inputRequired=inputElement.required; // for access required fields
//inputRequired.innerHTML=false;
//console.log(inputRequired);


let headingElement=document.querySelector('h1 span') // for heading access
    headingElement.innerHTML=inputValue;

alert(inputValue+' '+inputValue2+' '+'The message has been sent on the given number')
}
