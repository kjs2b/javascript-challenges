//Given a full sudoku board, return 'solved' if the board is solved, or 
//'invalid' if the board is invalid.

function sudokuCheck (boardStr) {
  //split string into array containing rows
  var boardArrs = boardStr.split("\n");

  //split array into arrays of characters representing each row
  for (var i = 0; i < boardArrs.length; i++) {
    boardArrs[i] = boardArrs[i].split('');
    //check each row
    if(boardArrs[i].slice().sort().toString() !== '1,2,3,4,5,6,7,8,9') {
      return 'invalid';
    }
  }
  //Check each column
  for (var i = 0; i < boardArrs.length; i++) {
    var columnArr = [];
    for (var j = 0; j < 9; j++) {      
      columnArr.push(boardArrs[j][i]);
    }
    if (columnArr.sort().toString() !== '1,2,3,4,5,6,7,8,9') {
      return 'invalid';
    }
  }

  for (var i = 0; i < 9; i += 3) {
    for (var j = 0; j < 9; j += 3) {
      var subgridArr = boardArrs[i].slice(j, j + 3)
        .concat(boardArrs[i + 1].slice(j, j + 3))
        .concat(boardArrs[i + 2].slice(j, j + 3));

      if (subgridArr.sort().toString() !== '1,2,3,4,5,6,7,8,9') {
        return 'invalid';
      }
    }
  }

  //return boardArrs;
  return 'solved';
}
