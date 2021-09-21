//Given a string s, return the longest palindromic substring in s.
var longestPalindrome = function(s) {
  let startIndex = 0;
  let maxLength = 1;

  function expandAround(left,right){
    while(left >=0 && right< s.length && s[left] === s[right]){
      let currentLength = right - left +1;
      if(currentLength > maxLength){
        maxLength = currentLength;
          startIndex = left;
      }
    right++;
    left--;
    }
  }
  for(let i =0; i<s.length; i++){
    expandAround(i-1,i+1);
    expandAround(i,i+1);
  }
  return s.slice(startIndex, startIndex + maxLength);

}

console.log(longestPalindrome("aba"));
