// Insertion Sort
function insertionSort(arr) {
  let n = arr.length;
  let i, j, current;
  for (i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    current = arr[i];
    // The last element of our sorted subarray
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
    console.log(arr);
  }
  return arr;
}
console.log(insertionSort([2, 1, 9, 76, 4]));
