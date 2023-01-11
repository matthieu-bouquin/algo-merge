const perform = (array, sum) => {
    var len = array.length
    for (var i = 0; i < len; i++) {
        var toCompare = array.filter((element) => element != array[i])
        if (toCompare.includes(sum - array[i])) {
            return true;
        }
    } 
    return false;
}


var array = [10, 15, 3, 7]
var k = 17
var array2 = [1, 8, 10, 21]  
var k2 = 19

console.log(perform(array, k))
console.log(perform(array2, k2))

function exo3(array,k){ 
    for(let i = 0; i< array.length -1; i++){
        let slot = [...array];
        if(slot.includes(k-array[i])){
        return true;
    }
    }
        return false;
}

console.log(exo3([10, 15, 3, 7], 17))

console.log(exo3([1, 8, 10, 21], 19))