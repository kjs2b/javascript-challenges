//A robot located at the top left corner of an n x n grid is trying to 
//reach the bottom right corner. The robot can move either up, down, left, 
//or right, but cannot visit the same spot twice. How many possible 
//unique paths are there to the bottom right corner?

//Make your solution work for a grid of any size.

function robotPaths (n) {
  var paths = 0;
  var board = makeBoard(n);

  function makeMove (x, y) {

    //base case 1: completed path
    if (x === n-1 && y === n-1) {
      paths++;
      return;
    }
    //base case 2: dead end path
    if (x < 0 || x >= n || y < 0 || y >= n) {
      return;
    }
    if (board.hasBeenVisited(y, x)) {
      return;
    }

    board.togglePiece(y, x);
    
    //up
    makeMove(x, y - 1);
    //right
    makeMove(x + 1, y);
    //left
    makeMove(x - 1, y);
    //down
    makeMove(x, y + 1);

    board.togglePiece(y, x);

  }
  makeMove(0,0)
  
  return paths;
}