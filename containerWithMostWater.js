/*Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.*/

var maxArea = function(height){
  let maxWaterAmount = 0;
  let start = 0;
  let end = height.length -1;
    
  while(start < end){
    currentWaterAmount = Math.min(height[start],height[end]) * (end-start);
    maxWaterAmount= Math.max(maxWaterAmount,currentWaterAmount);
    
    if(height[start] < height[end]){
     start++;
    }else{
      end--;
    }
   }
    return maxWaterAmount;
};

