/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
//2022. Convert 1D Array Into 2D Array O(n)?
 let construct2DArray = function(original, m, n) {
    if(m*n!=original.length){
       return [];
    }
    let arr2d = [];
    for(let i=0;i<m;i++){
      let innerArr =[];
      for(let j=i*n;j<(i*n)+n;j++){
        innerArr.push(original[j]);
      }
      arr2d.push(innerArr);
    }
    return arr2d;
};