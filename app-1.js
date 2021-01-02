let a = [100, 200, 300, 400, 500]

const res1 = a.reduceRight((result, current) => result.concat(current), []);
console.log(res1);

const res2 = a.reduceRight((result, current) => result + current, 0);
console.log(res2);

const res3 = a.reduceRight((result, current) => result + current, '');
console.log(res3);

a = [50, 10, 20, 15, 40];
const res4 = a.reduceRight((prev, curr, index, arr) => {
    if (index > 0 && curr > arr[index - 1]) {
        console.log(`IDX -> ${index}, EL -> ${curr}`);
        return prev + curr;
    }
    return prev;
}, 0)
console.log(res4);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

