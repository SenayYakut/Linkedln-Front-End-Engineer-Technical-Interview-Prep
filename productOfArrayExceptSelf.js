/*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.*/


var productExceptSelf = function(nums) {
   let output = nums.map(num=>1);
   product =1;
   
   for(let i = 0; i< nums.length; i++){
     output[i] = output[i] * product;
     product *= nums[i];
  }
    
    product = 1;
    for(let j = nums.length -1; j >=0; j--){
      output[j] = output[j] * product;
      product *= nums[j];
  }
    return output;
};

console.log(productExceptSelf([1,2,3,4]));//[ 24, 12, 8, 6 ]
   
console.log(productExceptSelf([1,-1,0,-3,3]));//[ 0, -0, 9, -0, 0 ]


 
