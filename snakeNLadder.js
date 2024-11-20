function dice() {
  let diceValue = Math.random() * 6;
  diceValue = Math.ceil(diceValue);

  return diceValue;
}

function snakeOrLadder(currentPlayerPos) {
  switch (currentPlayerPos) {
    case 5: return 58;
    case 14: return 59;
    case 38: return 20;
    case 42: return 60;
    case 45: return 7;
    case 51: return 10;
    case 53: return 72;
    case 64: return 83;
    case 65: return 54;
    case 75: return 94;
    case 91: return 73;
    case 97: return 3;
    default: return currentPlayerPos;
  }
}

function updatePosition(currentPlayerPos, playerNumber) {
  prompt('\n' + playerNumber + "'s turn");
  console.clear();
  const diceValue = dice();
  currentPlayerPos += currentPlayerPos + diceValue <= 100 ? diceValue : 0;
  const updatedPlayerPos = snakeOrLadder(currentPlayerPos);
  if (updatedPlayerPos < currentPlayerPos) {
    console.log('\nOhh noo😱.... 🐍 A snake bite you..');
  }
  if (updatedPlayerPos > currentPlayerPos) {
    console.log('\nHurray 🙌.... 🪜 You climbed a ladder..');
  }
  if (updatedPlayerPos === currentPlayerPos) {
    console.log('\nMoved Forward by ' + diceValue + '...😊');
  }
  console.log(playerNumber + ' Your Current Position is : ' + updatedPlayerPos + '\n');
  return updatedPlayerPos;
}

function player1() {
  let p1Position = 1;
  let p2Position = 1;
  let p3Position = 1;
  let p4Position = 1;
  console.log('\n!!!SNAKE AND LADDER!!!');
  const noOfPlayer = prompt('Enter No Of Players : ');
  let value = 0;

  while (p1Position !== 100 && p2Position !== 100 && p3Position !== 100 && p4Position !== 100) {

    if (value % noOfPlayer === 0) {
      p1Position = updatePosition(p1Position, 'Player 1');
      value = 1;
    }
    if (value % noOfPlayer === 1) {
      p2Position = updatePosition(p2Position, 'Player 2');
      value = 2;
    }
    if (value % noOfPlayer === 2) {
      p3Position = updatePosition(p3Position, 'Player 3');
      value = 3;
    }
    if (value % noOfPlayer === 3) {
      p4Position = updatePosition(p4Position, 'Player 4');
      value = 4;
    }

  }

  if (p1Position === 100) { return '🥳 Player 1 Won.. 🎊\n'; }
  if (p2Position === 100) { return '🥳 Player 2 Won.. 🎊\n'; }
  if (p3Position === 100) { return '🥳 Player 3 Won.. 🎊\n'; }
  if (p4Position === 100) { return '🥳 Player 4 Won.. 🎊\n'; }
}

console.log(player1());
