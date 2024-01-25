document.querySelector("#gameBtn").addEventListener('click', runGame);


function runGame(){
  const target = Math.floor(Math.random() * 100) + 1;

let guessString = '';
let guessNumber = 0;
let correct = false;
let numTries = 0;
let guesses = [];
//let incorrectGuessCount = 0;
let hintThreshold = 3; // Set the threshold after which a hint should be shown

do {
    if(numTries % hintThreshold === 0 && numTries > 3 && numTries < 10) {
     if (target % 2 === 0) {
         // Provide a hint based on the current number of tries
         alert("Hint: The number is even.");
     } else {
         alert("Hint: The number is odd.");
     }
    }   
    guessString = prompt('I am thinking of a number in the range 1 to 100.\n\nWhat is the number?')
    if (guessString === null) {
        return;
    }

    guessNumber = +guessString;
    numTries += 1;
    correct = checkGuess(guessNumber, target);
//player guesses history//
    guesses.push(guessNumber);
    alert("Your guesses so far: " + guesses.join(","));
} while (!correct);
    alert('You got it! The number was ' + target + '\n\nIt took you ' + numTries + ' tries to guess correctly.');
    
}
//odd or even hints//
/*if (!correct) {
    incorrectGuessCount++;
    if (incorrectGuessCount === 3) {  // The threshold for providing a hint
        let hint = target % 2 === 0 ? "Hint: the number is even." : "Hint: the number is odd.";
        alert(hint);
    }
}

numTries++;*/
//another way for odd or even hints//

    


function checkGuess(guessNumber, target){
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the 1 - 100 range.');
    } else if ((guessNumber < 1 || guessNumber > 100)) {
        alert('Please enter an integer in the 1-100 range.');
    } else if (guessNumber > target) {
        alert('Your number is too large!');
    } else if (guessNumber < target) {
        alert('Your number is too small!')
    } else {
        correct = true;
    }
    return correct;
}


