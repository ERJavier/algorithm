function contar(n){
    for(let i=0; i< n; i++){
        console.log(i);
    }
}

function repeat(array){
    let array_repear = array;
    return array_repear;
}

function string(array){
    let result = array.map(element => element.toString());
    return result;
}

// console.log(string([1,2,3]));

function two(value) {
    let x = new Array(value);
    for(let i=0; i<value; i++) {
        x[i] = new Array(value).fill(0)
    }
    return x;
}
console.log(two(5))