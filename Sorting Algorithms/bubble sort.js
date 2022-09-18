// bubble sort
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  const noSwap = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwap) break;
  }
  return arr;
}
console.log(bubbleSort([37, 45, 29, 8]));
