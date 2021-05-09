/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

const ans1 = prompt("Name a programming language that is also a gem.");
const ans2 = prompt("Name a programming language that is also a snake.");
const ans3 = prompt("What language do you use to style web pages?");
const ans4 = prompt("What language do you use to build the structure of web pages?");
const ans5 = prompt("What language do you use to add interactivity to a web page.");

// 2. Store the rank of a player

let score = 0;
let correctAnswer = 1;
let message;

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/


if (ans1.toUpperCase() === 'RUBY') {
  score += correctAnswer;
} else {
  
}

if (ans2.toUpperCase() === 'PYTHON') {
  score += correctAnswer;
} else {

}

if (ans3.toUpperCase() === 'CSS') {
  score += correctAnswer;
} else {

}

if (ans4.toUpperCase() === 'HTML') {
  score += correctAnswer;
} else {

}

if (ans5.toUpperCase() === 'JAVASCRIPT') {
  score += correctAnswer;
} else {

}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( score === 5 ) {
  message = `<h2>You got ${score} out of 5 questions correct.</h2>
  <p>Crown earned: Gold </p>`;
} else if ( score === 3 || score === 4 ) {
  message = `<h2>You got ${score} out of 5 questions correct.</h2>
  <p>Crown earned: Silver</p>`;
} else if ( score === 1 || score === 2 ) {
  message = `<h2>You got ${score} out of 5 questions correct.</h2>
  <p>Crown earned: Bronze</p>`;
} else {
  message = `<h2>You got ${score} out of 5 questions correct.</h2>
  <p>Crown earned: No Crown</p>`;
}


// 6. Output results to the <main> element

document.querySelector('main').innerHTML = message;


console.log(score);
