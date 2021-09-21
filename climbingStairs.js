//You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
  if(n <= 3){
    return n;
  }
  let ways = [0,1,2,3];
  for(let i= 4; i<=n; i++){
    ways.push(ways[i-1] + ways[i-2])
  }
    return ways.pop();
};
console.log(climbStairs(1));
