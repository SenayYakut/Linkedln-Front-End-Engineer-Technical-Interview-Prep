//You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

//Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

const rob = function(nums){
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let maxLootAmount = [nums[0], Math.max(nums[0], nums[1])];
    
    for(let i = 2; i < nums.length; i++){
      maxLootAmount.push(Math.max(nums[i] + maxLootAmount[i-2], maxLootAmount[i-1]));
  }
    return maxLootAmount.pop();//return maxLootAmount[maxLootAmount.length-1];

}

console.log(rob([1,2,2,1]));//3
console.log(rob([2,1,1,2]));//4
