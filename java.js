// Function to start the game
function startGame() {
  document.querySelector('.landing-page').classList.remove('active');
  document.querySelector('.game-section').classList.add('active');
}

// Function to proceed to the next challenge
function nextChallenge() {
  document.querySelector('.game-section').classList.remove('active');
  document.querySelector('.final-page').classList.add('active');
}

// Function to handle "Yes" button click
function sayYes() {
  alert("Yay! You've made me the happiest person in the world! ❤️");
  createConfetti();
}

// Function to move the "No" button
function moveNoButton() {
  const noButton = document.querySelector('.no-button');
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

// Function to create confetti
function createConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}

// Initialize the landing page as active
document.querySelector('.landing-page').classList.add('active'); 