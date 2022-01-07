//https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//Solution O(n)
 let spiralOrder = function(matrix) {
    let arr = [];

    if(matrix.length === 0){
        return arr;
    }
    
    let rowBegin = 0;
    let rowEnd = matrix.length-1;
    let colBegin = 0;
    let colEnd = matrix[0].length-1;

    while(rowBegin <= rowEnd && colBegin <= colEnd){
        for(let i=colBegin;i<=colEnd;i++){
            arr.push(matrix[rowBegin][i]);
        }
        rowBegin++;

       if(colBegin<=colEnd){
            for(let i=rowBegin;i<=rowEnd;i++){
                arr.push(matrix[i][colEnd])
            }
      }
        colEnd--;

       if(rowBegin<=rowEnd){
            for(let i=colEnd;i>=colBegin;i--){
                arr.push(matrix[rowEnd][i]);
            }
       }
    
        rowEnd--;
        
       if(colBegin<=colEnd){
            for(let i=rowEnd;i>=rowBegin;i--){
                arr.push(matrix[i][colBegin]);
            }
             
       }
        colBegin++;
    }
    return arr;
};



