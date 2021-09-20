//Determine if a string is a palindrome

const isPalindrome = function(s) {
    //sterilaize our string
    s = s.toLowerCase().replace(/[\W_]/g, "");
    //two pointers
    let left = 0;
    let right = s.length -1;
    while(left < right){
      if(s[left] !== s[right]){
        return false;      
      }
      left++;
      right--;
    }
    return true;    
};
console.log(isPalindrome("madam"));
console.log(isPalindrome("madam senay"));
