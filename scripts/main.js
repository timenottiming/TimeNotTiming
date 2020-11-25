//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}

function multiply(num1,num2){
  let result = num1*num2
  return result;
}

alert(multiply(2,3));

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/colour-scheme.png') {
      myImage.setAttribute('src','images/instructions.png');
    } else {
      myImage.setAttribute('src','images/colour-scheme.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'PohSia is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Poh Sia is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
