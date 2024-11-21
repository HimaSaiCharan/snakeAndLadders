function printDice1() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃        ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃        ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice2() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤      ┃\n';
  box += '┃        ┃\n';
  box += '┃     ⬤  ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice3() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃⬤       ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃      ⬤ ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice4() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┃        ┃\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice5() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice6() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤   ⬤  ┃ \n';
  box += '┃ ⬤   ⬤  ┃ \n';
  box += '┃ ⬤   ⬤  ┃ \n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice(diceNumber) {
  switch (diceNumber) {
    case 1: return printDice1();
    case 2: return printDice2();
    case 3: return printDice3();
    case 4: return printDice4();
    case 5: return printDice5();
    case 6: return printDice6();
  }
}

function dice() {
  return Math.ceil(Math.random() * 6);
}

function getALine(length) {
  let line = '';
  for (let iterator = 0; iterator < length; iterator += 1) {
    line += '━';
  }

  return line;
} 

function createMessageBox(message) {
  const box = '┏' + getALine(message.length) + '┓\n┃' + message + '┃\n┗';
  return box + getALine(message.length) + '┛\n';
}

function rollDice() {
  let diceValue = 0;

  for (let noOfTimes = 0; noOfTimes < 350; noOfTimes += 30) {
    for (let counter = 0; counter < noOfTimes * 1000000; counter += 1) {
    }

    console.clear();
    diceValue = dice();
    console.log(createMessageBox("Snake 🐍 And Ladder 🪜"));
    console.log(printDice(diceValue));
  }

  return diceValue;
}

function getSnakeOrLadder(playerPosition) {
  switch (playerPosition) {
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
    default: return playerPosition;
  }
}

function playerPosMessage(updatedPlayerPos, playerPosition, diceValue) {
  if (updatedPlayerPos < playerPosition) {
    console.log(createMessageBox("Ohh noo 😱.... 🐍 A snake bit you.."));
  }
  if (updatedPlayerPos > playerPosition) {
    console.log(createMessageBox("Hurray 🙌.... 🪜 You climbed a ladder.."));
  }
  if (updatedPlayerPos === playerPosition) {
    console.log(createMessageBox("Moved Forward by " + diceValue + "...😊"));
  }
}

function updatePosition(updatedPlayerPos, playerPosition, diceValue, playerNumber) {
  playerPosMessage(updatedPlayerPos, playerPosition, diceValue);
  console.log(playerNumber + " Current Position is: " + updatedPlayerPos);
}

function getNewPosition(playerPosition, playerNumber) {
  const diceValue = rollDice();

  playerPosition += (playerPosition + diceValue <= 100) ? diceValue : 0;
  const updatedPlayerPos = getSnakeOrLadder(playerPosition);

  updatePosition(updatedPlayerPos, playerPosition, diceValue, playerNumber);

  return updatedPlayerPos;
}

function didPlayerWin(p1Position, p2Position, p3Position, p4Position) {
  return p1Position === 100 || p2Position === 100 || p3Position === 100 || p4Position === 100;
}

function whoWon(p1Position, p2Position, p3Position, p4Position, playerNames) {
  if (p1Position === 100) { return '🥳..' + playerNames[0] + ' Won.. 🎊\n'; }
  if (p2Position === 100) { return '🥳..' + playerNames[1] + ' Won.. 🎊\n'; }
  if (p3Position === 100) { return '🥳..' + playerNames[2] + ' Won.. 🎊\n'; }
  if (p4Position === 100) { return '🥳..' + playerNames[3] + ' Won.. 🎊\n'; }
}

function getPlayerNames(noOfPlayer) {
  let playerNames = [];
  for (let player = 0; player < noOfPlayer; player += 1) {
    playerNames[player] = prompt("Enter name of Player: ");
  }

  return playerNames;
}

function printGrid(p1Position, p2Position, p3Position, p4Position) {
  console.log(getHeading());
  for (let row = 10; row > 0; row -= 1) {
    createGrids(p1Position, p2Position, p3Position, p4Position, row * 10);
  }
  console.log(getFooting());  
}


function getHeading() {
  return '┏━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┓';
}

function getFooting() {
  return '┗━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┛';
}

function getRowFooting() {
  return '┣━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━┫';
}

function createUpperPart(p1, p2, rowStartsWith, p1Name, p2Name) {
  let rowWallSAndL = '';
  for (let boxNumber = rowStartsWith; boxNumber > rowStartsWith - 10; boxNumber--) {
    
    rowWallSAndL += boxNumber === p1 ? p1Name + '  ' : '    ';
    rowWallSAndL += p2 > 0 && boxNumber === p2 ? '  ' + p2Name : '    ';
    rowWallSAndL += '┃';
  }
  
  return '┃' + rowWallSAndL;
}

function createMiddlePart(rowStartsWith) {
  let rowWallSAndL = '';
  for (let boxNumber = rowStartsWith; boxNumber > rowStartsWith - 10; boxNumber--) {
    
    const boxValue = boxNumberSnakeOrLadder(boxNumber);
    
    rowWallSAndL += boxValue === '100' ? boxValue + '  ┃   ' : boxValue + '   ┃   ';
  }
  
  return '┃   ' + rowWallSAndL;
}

function boxNumberSnakeOrLadder(boxNumber) {
  if (boxNumber === 5 || boxNumber === 14 || boxNumber === 42 || boxNumber === 53 || boxNumber === 64 || boxNumber === 75) {
    return '🪜';
  }
  
  if (boxNumber === 38 || boxNumber === 45 || boxNumber === 51 || boxNumber === 65 || boxNumber === 91 || boxNumber === 97) {
    return '🐍';
  }
  if (boxNumber < 10) {
    return "0" + boxNumber;
  }
  return '' + boxNumber;
}

function createGrids(p1, p2, p3, p4, rowStartsWith) {
  console.log(createUpperPart(p1, p2, rowStartsWith, '🟡', '🔴'));
  console.log(createMiddlePart(rowStartsWith));
  console.log(createUpperPart(p3, p4, rowStartsWith, '🟢', '🔵'));
  if (rowStartsWith != 10) {
    console.log(getRowFooting());
  }
}

function startPlay() {
  let p1Position = 1;
  let p2Position = 1;
  let p3Position = 1;
  let p4Position = 1;

  console.log(createMessageBox("Snake 🐍 And Ladder 🪜 "));

  const noOfPlayer = +prompt("Enter No Of Players : ", '1');
  const playerNames = getPlayerNames(noOfPlayer);

  let turn = 1;

  while (!didPlayerWin(p1Position, p2Position, p3Position, p4Position)) {
    printGrid(p1Position, p2Position, p3Position, p4Position);
    prompt(playerNames[turn - 1] + "'s turn");

    if (turn === 1) {
      p1Position = getNewPosition(p1Position, playerNames[turn - 1]);
    }
    if (turn === 2) {
      p2Position = getNewPosition(p2Position, playerNames[turn - 1]);
    }
    if (turn === 3) {
      p3Position = getNewPosition(p3Position, playerNames[turn - 1]);
    }
    if (turn === 4) {
      p4Position = getNewPosition(p4Position, playerNames[turn - 1]);
    }
    turn = turn === noOfPlayer ? 1 : turn + 1;
  }


  return whoWon(p1Position, p2Position, p3Position, p4Position, playerNames);
}

console.log(startPlay());
