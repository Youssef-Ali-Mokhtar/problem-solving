// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//First solution O(n^2)
let findDisappearedNumbers = function(nums) {
    let disNums = [];
      let flag = 0;
      for(let i=1; i<=nums.length; i++){
          for(let j=0;j<nums.length;j++){
              if(i == nums[j]){
                  flag = 1;
              }
          }
          if(flag == 0){
              disNums.push(i);
          }else{
              flag = 0;
          }
      }
      return disNums;
};

//Second solution (optimized) O(n)
let findDisappearedNumbers = function(nums) {
    let mySet = new Set(nums);
    let myArr = [];

    for(let i=1; i<=nums.length; i++){
        if(!mySet.has(i)){
            myArr.push(i);
        }
    }
    return myArr;
};