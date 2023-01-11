function exo2 (array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let west = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) west = false;
    }
    if (west) result++;
  }
  return result;
};
console.log(exo2([3, 7, 8, 3, 6, 1]))
console.log(exo2([1, 4, 5, 8]))