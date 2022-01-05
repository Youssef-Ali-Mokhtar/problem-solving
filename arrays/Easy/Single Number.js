//https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
//First solution, O(n)
 let singleNumber = function(nums) {
    let mySet = new Set(nums);
    let arr = Array.from(mySet);
    let numSum = 0;
    let arrSum = 0;
    
    for(let i=0;i<nums.length;i++){
        numSum+=nums[i];
    }
    
    for(let i =0;i<arr.length;i++){
        arrSum+=arr[i];
    }
    
    return (arrSum*2) - numSum;
  };