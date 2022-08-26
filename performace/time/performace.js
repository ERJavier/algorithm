// const performance = require('perf_hooks');
function contar(n){
    for(let i=0; i< n; i++){
        console.log(i);
    }
}
// performance.performance.now();
console.time('time');
contar(5);
console.timeEnd('time');
// let end = performance.performance.now();
// let total = begin - end;

// console.log(`total time is ${total}` )