// Naive String Search
function naiveSearch(str, substr) {
  let count = 0;
  let subLength = substr.length;
  let parentLength = str.length;
  for (let i = 0; i < parentLength; i++) {
    for (let j = 0; j < subLength; j++) {
      if (substr[j] !== str[i + j]) break;
      if (j === subLength - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
