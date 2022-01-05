//https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Time O(n), space O(1)
 let productExceptSelf = function(nums) {
  let answer = new Array(nums.length);
  for(let i=0;i<nums.length;i++){
      if(i === 0){
          answer[0] = 1;
      }else{
          answer[i] = answer[i-1] * nums[i-1];
      }
  }

  let postfix = 1;
  for(let i=nums.length-1;i>=0;i--){
      if(i === nums.length-1){
          answer[nums.length-1] = answer[nums.length-1] * postfix;
      }else{
          postfix *= nums[i+1];
          answer[i] = postfix * answer[i];
      }
  }
  return answer;
}
