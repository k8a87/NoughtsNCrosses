'use strict';
const tl = document.querySelector('.tl'); //1
const tm = document.querySelector('.tm'); //2
const tr = document.querySelector('.tr'); //3
const cl = document.querySelector('.cl'); //4
const cm = document.querySelector('.cm'); //5
const cr = document.querySelector('.cr'); //6
const bl = document.querySelector('.bl'); //7
const bm = document.querySelector('.bm'); //8
const br = document.querySelector('.br'); //9
const grid = document.querySelectorAll('.grid');
const resetEl = document.querySelector('.reset');
const iconEl = document.querySelectorAll('.iconStyle');
const scoreOEl = document.querySelector('.scoreO');
const scoreXEl = document.querySelector('.scoreX');
const drawScoreEl = document.querySelector('.draw');

//Variables for start of game
let activePlayer = 0;
let gameActive = true;
let xScore = 0;
let oScore = 0;
let drawScore = 0;

//Function to change background when won
const winnerBackground = function (pos) {
  pos.classList.remove('bg--circle', 'bg--cross', 'bg--grid');
  pos.classList.add('bg--winner');
};

//Function when O wins
const winnerO = () => {
  oScore++;
  scoreOEl.textContent = oScore;
  resetEl.textContent = 'Player O wins!';
  gameActive = false;
};
//Function when X wins
const winnerX = () => {
  xScore++;
  scoreXEl.textContent = xScore;
  resetEl.textContent = 'Player X wins!';
  gameActive = false;
};

// Function for when draw
const draw = () => {
  drawScore++;
  drawScoreEl.textContent = drawScore;
  resetEl.textContent = `It's a Draw!`;
  gameActive = false;
};

//For every grid element, check first if game is active and that there are no active squares (So you can't click on the same square twice). Then check which player is active.
for (let i = 0; i < grid.length; i++) {
  grid[i].addEventListener('click', function () {
    if (
      gameActive &&
      !grid[i].classList.contains('oWin') &&
      !grid[i].classList.contains('xWin')
    ) {
      if (activePlayer === 0) {
        iconEl[i].classList.add('far', 'fa-circle');
        grid[i].classList.remove('bg--grid');
        grid[i].classList.add('bg--circle');
        grid[i].classList.add('oWin');
        resetEl.textContent = "Player X's turn";

        //Check to see if three O's in a row

        if (
          //top horizontal
          tl.classList.contains('oWin') &&
          tm.classList.contains('oWin') &&
          tr.classList.contains('oWin')
        ) {
          winnerBackground(tl);
          winnerBackground(tm);
          winnerBackground(tr);
          winnerO();
        } else if (
          //center horizontal
          cl.classList.contains('oWin') &&
          cm.classList.contains('oWin') &&
          cr.classList.contains('oWin')
        ) {
          winnerBackground(cl);
          winnerBackground(cm);
          winnerBackground(cr);
          winnerO();
        } else if (
          //bottom horizontal
          bl.classList.contains('oWin') &&
          bm.classList.contains('oWin') &&
          br.classList.contains('oWin')
        ) {
          winnerBackground(bl);
          winnerBackground(bm);
          winnerBackground(br);
          winnerO();
        } else if (
          //left vertical
          tl.classList.contains('oWin') &&
          cl.classList.contains('oWin') &&
          bl.classList.contains('oWin')
        ) {
          winnerBackground(tl);
          winnerBackground(cl);
          winnerBackground(bl);
          winnerO();
        } else if (
          //center vertical
          tm.classList.contains('oWin') &&
          cm.classList.contains('oWin') &&
          bm.classList.contains('oWin')
        ) {
          winnerBackground(tm);
          winnerBackground(cm);
          winnerBackground(bm);
          winnerO();
        } else if (
          //right vertical
          tr.classList.contains('oWin') &&
          cr.classList.contains('oWin') &&
          br.classList.contains('oWin')
        ) {
          winnerBackground(tr);
          winnerBackground(cr);
          winnerBackground(br);
          winnerO();
        } else if (
          //diagonal tl to br
          tl.classList.contains('oWin') &&
          cm.classList.contains('oWin') &&
          br.classList.contains('oWin')
        ) {
          winnerBackground(tl);
          winnerBackground(cm);
          winnerBackground(br);
          winnerO();
        } else if (
          //diagonal bl to tr
          bl.classList.contains('oWin') &&
          cm.classList.contains('oWin') &&
          tr.classList.contains('oWin')
        ) {
          winnerBackground(bl);
          winnerBackground(cm);
          winnerBackground(tr);
          winnerO();
        }
        (tl.classList.contains('oWin') || tl.classList.contains('xWin')) &&
        (tm.classList.contains('oWin') || tm.classList.contains('xWin')) &&
        (tr.classList.contains('oWin') || tr.classList.contains('xWin')) &&
        (cl.classList.contains('oWin') || cl.classList.contains('xWin')) &&
        (cm.classList.contains('oWin') || cm.classList.contains('xWin')) &&
        (cr.classList.contains('oWin') || cr.classList.contains('xWin')) &&
        (bl.classList.contains('oWin') || bl.classList.contains('xWin')) &&
        (bm.classList.contains('oWin') || bm.classList.contains('xWin')) &&
        (br.classList.contains('oWin') || br.classList.contains('xWin')) &&
        !grid[i].classList.contains('bg--winner')
          ? draw()
          : console.log('Game on');
        //switch players
        activePlayer = activePlayer === 0 ? 1 : 0;
      } else if (activePlayer === 1) {
        iconEl[i].classList.add('fas', 'fa-times');
        grid[i].classList.remove('bg--grid');
        grid[i].classList.add('bg--cross');
        grid[i].classList.add('xWin');
        resetEl.textContent = "Player O's turn";

        if (
          //top horizontal
          tl.classList.contains('xWin') &&
          tm.classList.contains('xWin') &&
          tr.classList.contains('xWin')
        ) {
          winnerBackground(tl);
          winnerBackground(tm);
          winnerBackground(tr);
          winnerX();
        } else if (
          //center horizontal
          cl.classList.contains('xWin') &&
          cm.classList.contains('xWin') &&
          cr.classList.contains('xWin')
        ) {
          winnerBackground(cl);
          winnerBackground(cm);
          winnerBackground(cr);
          winnerX();
        } else if (
          //bottom horizontal
          bl.classList.contains('xWin') &&
          bm.classList.contains('xWin') &&
          br.classList.contains('xWin')
        ) {
          winnerBackground(bl);
          winnerBackground(bm);
          winnerBackground(br);
          winnerX();
        } else if (
          //left vertical
          tl.classList.contains('xWin') &&
          cl.classList.contains('xWin') &&
          bl.classList.contains('xWin')
        ) {
          winnerBackground(tl);
          winnerBackground(cl);
          winnerBackground(bl);
          winnerX();
        } else if (
          //center vertical
          tm.classList.contains('xWin') &&
          cm.classList.contains('xWin') &&
          bm.classList.contains('xWin')
        ) {
          winnerBackground(tm);
          winnerBackground(cm);
          winnerBackground(bm);
          winnerX();
        } else if (
          //right vertical
          tr.classList.contains('xWin') &&
          cr.classList.contains('xWin') &&
          br.classList.contains('xWin')
        ) {
          winnerBackground(tr);
          winnerBackground(cr);
          winnerBackground(br);
          winnerX();
        } else if (
          //diagonal tl to br
          tl.classList.contains('xWin') &&
          cm.classList.contains('xWin') &&
          br.classList.contains('xWin')
        ) {
          winnerBackground(tl);
          winnerBackground(cm);
          winnerBackground(br);
          winnerX();
        } else if (
          //diagonal bl to tr
          bl.classList.contains('xWin') &&
          cm.classList.contains('xWin') &&
          tr.classList.contains('xWin')
        ) {
          winnerBackground(bl);
          winnerBackground(cm);
          winnerBackground(tr);
          winnerX();
        }
        // Check fro draw... but not really needed here because O always starts first so ends the game last.
        // (tl.classList.contains('oWin') || tl.classList.contains('xWin')) &&
        // (tm.classList.contains('oWin') || tm.classList.contains('xWin')) &&
        // (tr.classList.contains('oWin') || tr.classList.contains('xWin')) &&
        // (cl.classList.contains('oWin') || cl.classList.contains('xWin')) &&
        // (cm.classList.contains('oWin') || cm.classList.contains('xWin')) &&
        // (cr.classList.contains('oWin') || cr.classList.contains('xWin')) &&
        // (bl.classList.contains('oWin') || bl.classList.contains('xWin')) &&
        // (bm.classList.contains('oWin') || bm.classList.contains('xWin')) &&
        // (br.classList.contains('oWin') || br.classList.contains('xWin')) &&
        // !grid[i].classList.contains('bg--winner')
        //   ? draw()
        //   : console.log('Game on');
        activePlayer = activePlayer === 0 ? 1 : 0;
      }
    }
  });
}
// Reset
const resetGame = () => {
  iconEl.forEach(i => {
    i.classList.remove('far', 'fa-circle', 'fas', 'fa-times');
  });
  grid.forEach(i => {
    i.classList.remove('bg--circle', 'bg--cross', 'bg--winner', 'xWin', 'oWin');
    i.classList.add('bg--grid');
  });
  gameActive = true;
  activePlayer = 0;
  resetEl.textContent = "Player O's turn";
};

resetEl.addEventListener('click', resetGame);

// Draw;
// MAKE A COUNTER FOR 9 SQUARES IF REACHED TO 0 THEN GAME OVER
// grid.forEach(i => {
//   i.addEventListener('click', function () {
//     !i.classList.contains('bg--winner')
//       ? (resetEl.textContent = `It's a Draw!`) && (gameActive = false)
//       : console.log('Play');
//   });
// });

// Change the background colour and text of Button on hover.
resetEl.addEventListener('mouseover', function () {
  resetEl.textContent = 'Clear board';
  resetEl.style.backgroundColor = '#f7ff12';
});
// Only if the game is active, then the button will say who's turn it is.
resetEl.addEventListener('mouseout', function () {
  resetEl.style.backgroundColor = '#51ff00';
  gameActive === false
    ? (resetEl.textContent = "Let's play again!")
    : activePlayer === 0
    ? (resetEl.textContent = "Player O's turn")
    : (resetEl.textContent = "Player X's turn");
});
