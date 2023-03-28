function findMissingNumber(arr) {
  let n = arr.length;
  // total array with the expected missing number
  let totalNumber = (n * (n + 1)) / 2;
  let totalWithMissingNumber = 0;
  // sum the array numbers
  for (let x of arr) {
    totalWithMissingNumber += x;
  }
  let missingNumber = totalNumber - totalWithMissingNumber;
  return missingNumber;
}

