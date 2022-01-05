// https://leetcode.com/problems/contains-duplicate/

// First solution (non optimized) O(n^2)
let containsDuplicate = function(nums) {
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums.length; j++){
            if(i == j){
               continue;
            }else{
                if(nums[i] == nums[j]){
                    return true;
                } else{
                    continue;
                }
            }
        }
    }
};

// Second solution using hashmap O(n)
let containsDuplicate = function(nums){
    let myMap = {}
    for(let i = 0;i<nums.length;i++){
  
      if(myMap[nums[i]]){
        myMap[nums[i]] = myMap[nums[i]] + 1;
      }else{
        myMap[nums[i]] = 1;
      }
  
    }
  
    for(let i in myMap){
      if(myMap[i] > 1) {
        return true;
      }
    }
   return false;
  }
