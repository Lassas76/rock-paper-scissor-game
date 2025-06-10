function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = `You: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer: ${computerChoice}`;

  let winner = '';

  if (userChoice === computerChoice) {
    winner = 'Draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = 'You win!';
  } else {
    winner = 'Computer wins!';
  }

  document.getElementById("winner").textContent = `Winner: ${winner}`;
}
