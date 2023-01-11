function exo5(array, k) {
  if (array.filter(e => array.includes(k - e)).length > 1) {
    return true;
  }
  return false;
}


console.log(exo5([10, 15, 3, 7], 17))
console.log(exo5([1, 8, 10, 21], 19))