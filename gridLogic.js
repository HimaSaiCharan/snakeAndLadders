const heading = '┏━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┓';
const rowFooting = '┣━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━╋━━━━━━━━┫';
const footing = '┗━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┻━━━━━━━━┛';


function createRowMiddlePart(rowStartsWith) {
  let rowWallSAndL = '';
  for (let boxNumber = rowStartsWith; boxNumber > rowStartsWith - 10; boxNumber--) {

    const boxValue = boxNumberSnakeOrLadder(boxNumber);

    rowWallSAndL += boxValue === '100' ? boxValue + '  ┃   ' : boxValue + '   ┃   ';
  }

  return '┃   ' + rowWallSAndL;
}

function createRowUpperPart(p1, p2, rowStartsWith) {
  let rowWallSAndL = '';
  for (let boxNumber = rowStartsWith; boxNumber > rowStartsWith - 10; boxNumber--) {

    rowWallSAndL += boxNumber === p1 ? 'p1  ' : '    ';
    rowWallSAndL += p2 > 0 && boxNumber === p2 ? '  p2' : '    ';
    rowWallSAndL += '┃';
  }

  return '┃' + rowWallSAndL;
}

function createRowLowerPart(p3, p4, rowStartsWith) {
  let rowWallSAndL = '';
  for (let boxNumber = rowStartsWith; boxNumber > rowStartsWith - 10; boxNumber--) {

    rowWallSAndL += boxNumber === p3 ? 'p3  ' : '    ';
    rowWallSAndL += p4 > 0 && boxNumber === p4 ? '  p4' : '    ';
    rowWallSAndL += '┃';
  }

  return '┃' + rowWallSAndL;
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
  console.log(createRowUpperPart(p1, p2, rowStartsWith));
  console.log(createRowMiddlePart(rowStartsWith));
  console.log(createRowLowerPart(p3, p4, rowStartsWith));
  if (rowStartsWith != 10) {
    console.log(rowFooting);
  }
}

console.log(heading);

for (let row = 10; row > 0; row -= 1) {

  createGrids(30, 72, 2, 100, row * 10);
}
console.log(footing);
