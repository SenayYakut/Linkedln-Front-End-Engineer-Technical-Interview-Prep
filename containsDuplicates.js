//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    let visitedNumber ={};
    for(let i = 0; i< nums.length; i++){
      let num = nums[i];
      if(visitedNumber[num]){
        return true;
      }else{
        visitedNumber[num] = true;
      }   
    }
    return false;
};
