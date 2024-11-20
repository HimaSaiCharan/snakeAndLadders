function dice() {
  let diceValue = Math.random() * 6;
  diceValue = Math.ceil(diceValue);

  return diceValue;
}

function snakeOrLadder(currentPlayerPos) {
  switch (currentPlayerPos) {
    case 5: return 58;
    case 38:  return 20;
    case 45:  return 7;
    case 51:  return 10;
    case 65:  return 54;
    case 91:  return 73;
    case 97:  return 3;
    case 14:  return 59;
    case 42:  return 60;
    case 53:  return 72;
    case 64:  return 83;
    case 75:  return 94;
    default:  return currentPlayerPos;
  }
}

function updatePosition(currentPlayerPos, playerNumber) {
  if (confirm(playerNumber + " Roll the Dice ?")) {
    const diceValue = dice();
    currentPlayerPos += currentPlayerPos + diceValue <= 100 ? diceValue : 0;
    currentPlayerPos = snake(currentPlayerPos);
    currentPlayerPos = ladder(currentPlayerPos);

    return currentPlayerPos;
  }
}

function player1() {
  let p1Position = 1;
  let p2Position = 1;
  let value = 1;

  while (p1Position !== 100 && p2Position !== 100) {
    if (value % 2 === 1) {
      p1Position = updatePosition(p1Position, 'Player 1');
      console.log('Player 1 is at: ' + p1Position);
    } else {
      p2Position = updatePosition(p2Position, 'Player 2');
      console.log('Player 2 is at: ' + p2Position);
    }
    value++;
  }

  return p1Position === 100 ? "p1 Won " : "p2 Won";
}

console.log(player1());