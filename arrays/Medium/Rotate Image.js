//https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//First solution Using another 2d matrixay
let rotate2 = function(matrix) {

    let arr = Array.from(Array(matrix[0].length), () => new Array(matrix.length));
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            matrix[j][i] = matrix[i][j];
        }
    }

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<parseInt(arr[0].length/2);j++){
            let temp = arr[i][j];
            arr[i][j] = arr[i][arr[0].length-1-j];
            arr[i][arr[0].length-1-j] = temp;
        }
    }

    return arr;
};


//Second solution Without allocating another 2d array

let rotate = function(matrix) {

    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix.length;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }

    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<parseInt(matrix[0].length/2);j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[0].length-1-j];
            matrix[i][matrix[0].length-1-j] = temp;
        }
    }

    return matrix;
}