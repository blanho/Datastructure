// Solution 1: Count number of occurrences for each char in a string
function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1; // Truthy and Falsthy
    }
  }
  return obj;
}
function isAlphaNumeric(char) {
  if (/^[a-z0-9]+$/i.test(char)) return true;
  return false;
}

console.log(charCount("Hello xyz"));
