//Write a function that rotates a NxN matrix 90 degrees clockwise.

function rotateMatrix (matrix) {
  var rotated = [];
  var dim = matrix[0].length;

  for (i = dim - 1; i >= 0; i--) {
    for (j = 0; j < dim; j++) {
      if (!rotated[j]) {
        rotated[j] = [matrix[i][j]];
      } else {
        rotated[j].push(matrix[i][j])
      }
    }
  }

  return rotated;
}
