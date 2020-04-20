// @ts-check

/**
 * @param {number} [colCount]
 * @param {number} [rowCount]
 */
const initZeroMatrix = (rowCount, colCount) => {
  const defaultValue = 0;
  const matrix = [];

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const row = [];
    for (let colIndex = 0; colIndex < colCount; colIndex += 1) {
      row.push(defaultValue);
    }
    matrix.push(row);
  }

  return matrix;
};

/**
 * @param {any[]} matrixA
 * @param {any[]} matrixB
 */
const muliplyMatrix = (matrixA, matrixB) => {
  const rowsMatrixA = matrixA.length;
  const colMatrixA = matrixA[0].length;
  const rowsMatrixB = matrixB.length;
  const colMatrixB = matrixB[0].length;

  if (colMatrixA !== rowsMatrixB) {
    console.log("This set of matrices cann't be multiplied");
    return null;
  }

  const resultMatrix = initZeroMatrix(rowsMatrixA, colMatrixB);

  for (let i = 0; i < rowsMatrixA; i += 1) {
    for (let j = 0; j < colMatrixB; j += 1) {
      for (let k = 0; k < colMatrixA; k += 1) {
        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return resultMatrix;
};

export default muliplyMatrix;
