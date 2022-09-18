// built-in javascript

function numberCompare(num1, num2) {
  return num1 - num2;
}
// sorted by length
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
console.log(
  ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)
);
