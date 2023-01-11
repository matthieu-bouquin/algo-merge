const fs = require('fs');
const fileName = process.argv[2];

var arrayFile;
try {
  const data = fs.readFileSync(fileName, 'utf8');
  arrayFile = data.split(' ').map(x => Number.parseInt(x))

} catch (error) {
  console.error(error.message);
  return
}
console.log(fileName, arrayFile)

var count = 0;

function merge(arrayLeft, arrayRight) {
  const sorted = []
  while(arrayLeft.length && arrayRight.length) {
    count++;
    if (arrayLeft[0] <= arrayRight[0]) {
      sorted.push(arrayLeft.shift())    
    } else {
      sorted.push(arrayRight.shift())
    }
  }
  while (arrayLeft.length) {
    sorted.push(arrayLeft.shift());
}
  while (arrayRight.length) {
    sorted.push(arrayRight.shift());
  }
return sorted; 
}

function divide(array) {
  if (array.length < 2) {
    return array
  }
  const middle = Math.floor(array.length/2)
  const arrayLeft = array.slice(0, middle)
  const arrayRight = array.slice(middle)
  return merge(divide(arrayLeft), divide(arrayRight))
}

console.log(`Tri Fusion: ${count} comparaisons -` ,divide(arrayFile))
console.log(`Tri Fusion: ${count} comparaisons - ${divide(arrayFile)}`)
console.log("Tri Fusion: ", divide(arrayFile),`- ${count} comparaisons`)

