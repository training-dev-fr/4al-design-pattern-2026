Array.prototype.forEach2 = function(prediacte) {
    for(let element of this){
        prediacte(element);
    }
}

Array.prototype.map2 = function(predicate){
    let result = [];
    for(let element of this){
        result.push(predicate(element));
    }
    return result;
}

Array.prototype.filter2 = function(prediacte){
    let result = [];
    for(let element of this){
        if(prediacte(element)){
            result.push(element);
        }
    }
    return result;
}

let arr = [1,2,3,4,5];

let arr2 = arr.filter(element => element >2);

console.log(arr);
console.log(arr2);

