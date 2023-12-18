const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  for(let i = 0; i < matrix.length; i++) {
    for(let k = 0; k < matrix[i].length; k++) {
      
    }
  }
  /* let columns = matrix[0].length
  for(let i = 0; i < matrix.length; i++) {
    for(let k = 0; k < columns; k++) {
      //console.log(matrix[i][k - 1])
      console.log(matrix[k][i + 1])
    }
  } */
  /* let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let temp = [];
    for (let k = 0; k < matrix[i].length; k++) {
      if (
        matrix[i][k + 1] === true ||
        matrix[i][k - 1] === true ||
        matrix[k][i + 1] === true ||
        matrix[k][i - 1] === true ||
        matrix[k + 1][i + 1] === true ||
        matrix[k - 1][i - 1] === true
      ) {
        temp.push(Number(true));
      } else {
        temp.push(Number(false));
      }
    }
    res.push(temp);
  }
  return res; */
}

/* minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]); */
minesweeper([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

module.exports = {
  minesweeper,
};
