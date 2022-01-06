//https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
// First solution, brute force O(n^2)
let longestConsecutive = function(nums) {
    let max_sequence = 0;
      for(let i=0;i<nums.length;i++){
          let current_sequence = 1;
          let current_number = nums[i];
          while(numberExists(nums, current_number+1)){
              current_sequence++;
              current_number++;
          }
          max_sequence = Math.max(current_sequence, max_sequence);
      }
      return max_sequence;
  };
  
  function numberExists(arr, num){
      for(let i = 0;i<arr.length;i++){
          if(arr[i] === num){
              return true;
          }
      }
      return false;
  }
  
  
  
  // Second solution (Optimized) O(n)?
  
  let longestConsecutive = function(nums) {
      let max_sequence = 0;
      let set = new Set();
  
      for(let i in nums){
          set.add(nums[i]);
      }
  
      for(let i=0;i<nums.length;i++){
          let current_sequence = 1;
          let current_number = nums[i];
          if(!set.has(current_number-1)){
              while(set.has(current_number+1)){
                  current_sequence++;
                  current_number++;
              }
            }
          max_sequence = Math.max(current_sequence, max_sequence);
      }
      return max_sequence;
  };
  
  