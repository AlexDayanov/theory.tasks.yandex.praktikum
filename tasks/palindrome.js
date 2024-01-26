const palindrome = (str) => {
  let arr = Array.from(str.toLowerCase());
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] != arr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

module.exports = palindrome;
