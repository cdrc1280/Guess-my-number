'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// DOM Functions
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const numberWidth = function (numwidth) {
  document.querySelector('.number').style.width = numwidth;
};
const pScore = function (myScore) {
  document.querySelector('.score').textContent = myScore;
};

displayNumber('?');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // No input
  if (!guess) {
    displayMessage('No Number!');
    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    bodyColor('#60b347');
    numberWidth('30rem');
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //  When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too  low!');
      score--;
      pScore(score);
    } else {
      displayMessage('Game Over!');
      pScore(0);
      bodyColor('#aa1010');
    }
  }
  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //    displayMessage('Too high!') ;
  //     score--;
  //     pScore( score);
  //   } else {
  //    displayMessage('Game Over!');
  //     pScore(0) ;
  //     bodyColor('#aa1010') ;
  //   }
  // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //    displayMessage('Too low!') ;
  //     score--;
  //     pScore(score);
  //   } else {
  //    displayMessage( 'Game Over!');
  //     pScore(0) ;
  //     bodyColor('#aa1010)';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayNumber(secretNumber);
  pScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  bodyColor('#222');
  numberWidth('15rem');
});
