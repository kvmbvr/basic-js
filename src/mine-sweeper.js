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
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result.push(Array(cols).fill(0));
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        const directions = [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1],           [0, 1],
          [1, -1], [1, 0], [1, 1]
        ];
      
        for (const [dx, dy] of directions) {
          const newRow = i + dx;
          const newCol = j + dy;
      
          if (newRow >= 0 && newRow < result.length && newCol >= 0 && newCol < result[0].length) {
            result[newRow][newCol]++;
          }
        }
      }
    }
  }

  return result;
}


const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
];

const result = minesweeper(matrix);
console.log(result);


/* minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]); */
/* minesweeper([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); */

module.exports = {
  minesweeper,
};
