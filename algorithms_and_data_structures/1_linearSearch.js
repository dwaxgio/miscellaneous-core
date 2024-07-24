const linearSearch = (arr, target) => {
  //   console.log(arr, target);
  //   console.log(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch("test", "s"));
