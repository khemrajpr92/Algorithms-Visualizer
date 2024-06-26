const helper = (arr, l, r, k, steps, colorSteps, index) => {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    let colorKey = new Array(arr.length).fill(0);
    colorKey[mid] = 1;
    colorSteps.push(colorKey.slice());
    steps.push(arr.slice());

    if (arr[mid] === k) {
      colorKey[mid] = 2;
      colorSteps.push(colorKey.slice());
      steps.push(arr.slice());
      index.push(mid);
      return;
    }

    if (arr[mid] > k)
      return helper(arr, l, mid - 1, k, steps, colorSteps, index);

    return helper(arr, mid + 1, r, k, steps, colorSteps, index);
  }

  let colorKey = new Array(arr.length).fill(3);
  colorSteps.push(colorKey.slice());
  steps.push(arr.slice());
  index.push(-2);

  return;
};

const binarySearch = (array, steps, key, colorSteps, index) => {
  helper(array, 0, array.length - 1, key, steps, colorSteps, index);
};

export default binarySearch;
