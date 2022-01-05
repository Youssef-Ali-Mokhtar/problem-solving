//https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
//First solution O(n)
 let missingNumber = function(nums) {
    let totalCount = 0;
    let totalNums = 0;
    for(let i=0;i<=nums.length;i++){
        totalCount+=i;
        if(i!=nums.length){
            totalNums+=nums[i];
        }
    }
    return totalCount - totalNums;
};