// Solution 1
function addUpto(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
// Solution 2
function addUpto(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpto(1000000000);
var t2 = performance.now();

// 1 second = 1000 milisecond
// t2 - t1 = Time that implemented addUpto(1000000000)
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
