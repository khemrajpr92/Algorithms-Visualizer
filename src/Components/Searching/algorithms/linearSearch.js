const linearSearch = (array, steps, key, colorSteps, idx) => {
  //   let found = false;
  for (let i = 0; i < array.length; i++) {
    let colorKey = new Array(array.length).fill(0);
    colorKey[i] = 1;
    colorSteps.push(colorKey.slice());
    steps.push(array.slice());
    // idx.push(i);
    if (array[i] === key) {
      colorKey[i] = 2;
      colorSteps.push(colorKey);
      steps.push(array.slice());
      idx.push(i);
      debugger;
      return;
    }
  }
  let colorKey = new Array(array.length).fill(3);
  colorSteps.push(colorKey.slice());
  steps.push(array.slice());
  idx.push(-2);
  //   swal("Oops!", "Something went wrong on the page!", "error");
  return;
};

export default linearSearch;
