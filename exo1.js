function exo1 (array,k) {
    for (let i = 0; i<array.length - 1; i++){
        let sum= array[i];
        for (let j=0; j<array.length;j++){
            let result = array[i] + array[j];
            if (result == k){
                return true;
            }
        } 
    }
    return false;
}

console.log(exo1([10, 15, 3, 7], 17))
console.log(exo1([1, 8, 10 , 21], 19))