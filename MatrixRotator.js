/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
}

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  var newMatrix = [[],[],[],[],[]];

  if ( direction === Direction.CW ) {
    for (var i = 0; i < this.matrix.length; i++) {
      newMatrix[0].unshift(this.matrix[i][0]);
      newMatrix[1].unshift(this.matrix[i][1]);
      newMatrix[2].unshift(this.matrix[i][2]);
      newMatrix[3].unshift(this.matrix[i][3]);
      newMatrix[4].unshift(this.matrix[i][4]);
    }
  }

  if ( direction === Direction.CCW ) {
    for (var j = 0; j < this.matrix.length; j++) {
      newMatrix[0].push(this.matrix[j][4]);
      newMatrix[1].push(this.matrix[j][3]);
      newMatrix[2].push(this.matrix[j][2]);
      newMatrix[3].push(this.matrix[j][1]);
      newMatrix[4].push(this.matrix[j][0]);
    }
  }

  // if ( direction === Direction.CW ) {
  //   // handler for array 0
  //   newMatrix[0].push(this.matrix[4][0]);
  //   newMatrix[0].push(this.matrix[3][0]);
  //   newMatrix[0].push(this.matrix[2][0]);
  //   newMatrix[0].push(this.matrix[1][0]);
  //   newMatrix[0].push(this.matrix[0][0]);

  //   // handler for array 1
  //   newMatrix[1].push(this.matrix[4][1]);
  //   newMatrix[1].push(this.matrix[3][1]);
  //   newMatrix[1].push(this.matrix[2][1]);
  //   newMatrix[1].push(this.matrix[1][1]);
  //   newMatrix[1].push(this.matrix[0][1]);

  //   // handler for array 2
  //   newMatrix[2].push(this.matrix[4][2]);
  //   newMatrix[2].push(this.matrix[3][2]);
  //   newMatrix[2].push(this.matrix[2][2]);
  //   newMatrix[2].push(this.matrix[1][2]);
  //   newMatrix[2].push(this.matrix[0][2]);

  //   // handler for array 3
  //   newMatrix[3].push(this.matrix[4][3]);
  //   newMatrix[3].push(this.matrix[3][3]);
  //   newMatrix[3].push(this.matrix[2][3]);
  //   newMatrix[3].push(this.matrix[1][3]);
  //   newMatrix[3].push(this.matrix[0][3]);

  //   // handler for array 4
  //   newMatrix[4].push(this.matrix[4][4]);
  //   newMatrix[4].push(this.matrix[3][4]);
  //   newMatrix[4].push(this.matrix[2][4]);
  //   newMatrix[4].push(this.matrix[1][4]);
  //   newMatrix[4].push(this.matrix[0][4]);

  // }

  // if ( direction === Direction.CCW ) {
  //   // handler for array 0
  //   newMatrix[0].push(this.matrix[0][4]);
  //   newMatrix[0].push(this.matrix[1][4]);
  //   newMatrix[0].push(this.matrix[2][4]);
  //   newMatrix[0].push(this.matrix[3][4]);
  //   newMatrix[0].push(this.matrix[4][4]);

  //   // handler for array 1
  //   newMatrix[1].push(this.matrix[0][3]);
  //   newMatrix[1].push(this.matrix[1][3]);
  //   newMatrix[1].push(this.matrix[2][3]);
  //   newMatrix[1].push(this.matrix[3][3]);
  //   newMatrix[1].push(this.matrix[4][3]);

  //   // handler for array 2
  //   newMatrix[2].push(this.matrix[0][2]);
  //   newMatrix[2].push(this.matrix[1][2]);
  //   newMatrix[2].push(this.matrix[2][2]);
  //   newMatrix[2].push(this.matrix[3][2]);
  //   newMatrix[2].push(this.matrix[4][2]);

  //   // handler for array 3
  //   newMatrix[3].push(this.matrix[0][1]);
  //   newMatrix[3].push(this.matrix[1][1]);
  //   newMatrix[3].push(this.matrix[2][1]);
  //   newMatrix[3].push(this.matrix[3][1]);
  //   newMatrix[3].push(this.matrix[4][1]);

  //   // handler for array 4
  //   newMatrix[4].push(this.matrix[0][0]);
  //   newMatrix[4].push(this.matrix[1][0]);
  //   newMatrix[4].push(this.matrix[2][0]);
  //   newMatrix[4].push(this.matrix[3][0]);
  //   newMatrix[4].push(this.matrix[4][0]);
  // }

  // console.log(newMatrix);
  this.matrix = newMatrix;

};