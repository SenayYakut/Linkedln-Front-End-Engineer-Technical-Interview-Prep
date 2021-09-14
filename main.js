//Determine if a string is a palindrome

function isTextPalindrome(text){
  if(text === undefined){
    return false;
  }
  let left = 0;
  let right = text.length -1;
  while(left < right){
    if(text[left++] !== text[right--]){
      return false;
    }
  }
  return true;
}

function isPhrasePalindrome(text){
  let chars = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return isTextPalindrome(chars);

}

console.log(isTextPalindrome("sees"));
console.log(isPhrasePalindrome("madam"));
