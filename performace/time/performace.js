const performance = require('perf_hooks');
function contar(n){
    for(let i=0; i< n; i++){
        console.log(i);
    }
}
let begin = performance.performance.now();
contar(5);
let end = performance.performance.now();
let total = begin - end;

console.log(`total time is ${total}` )