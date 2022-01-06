//https://leetcode.com/problems/find-all-duplicates-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//First solution O(n)
let findDuplicates = function(nums) {
    let map = {};
    let arr = [];
    for(let i in nums){
        if(map[nums[i]]){
            map[nums[i]]++;
        }else{
            map[nums[i]] = 1;
        }
    }
    
    for(let i in map){
        if(map[i] > 1){
            arr.push(i);
        }
    }
    return arr;
};