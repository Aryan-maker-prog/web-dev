const guessForm = document.getElementById('guessForm');
const guessInput = document.getElementById('guessInput');
const resultMessage = document.getElementById('resultMessage');
const resetBtn = document.getElementById('resetBtn');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let gameOver = false;

// Handle Guess Form submit
guessForm.addEventListener('submit', e => {
  e.preventDefault();
  if(gameOver) return;

  const guess = Number(guessInput.value);

  if (guess < 1 || guess > 20) {
    resultMessage.textContent = "Please enter a number between 1 and 20!";
    resultMessage.classList.remove('text-green-500');
    resultMessage.classList.add('text-red-600');
    return;
  }

  if (guess === secretNumber) {
    resultMessage.textContent = "🎉 Correct! You guessed the number!";
    resultMessage.classList.remove('text-red-600');
    resultMessage.classList.add('text-green-500');
    gameOver = true;
    resetBtn.classList.remove('hidden');
  } else if (guess > secretNumber) {
    resultMessage.textContent = "📉 Too high! Try again.";
    resultMessage.classList.remove('text-green-500');
    resultMessage.classList.add('text-yellow-500');
  } else {
    resultMessage.textContent = "📈 Too low! Try again.";
    resultMessage.classList.remove('text-green-500');
    resultMessage.classList.add('text-yellow-500');
  }

  guessInput.value = '';
  guessInput.focus();
});

// Reset Game
resetBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  gameOver = false;
  resultMessage.textContent = '';
  resetBtn.classList.add('hidden');
  guessInput.value = '';
  guessInput.focus();
});
