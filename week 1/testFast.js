const findProductFast = require('./pairwiseProductFast')

// console.log(findProductFast([2, 3, 4, 5]))

const arr = [];

for (let i = 0; i <= 200000; i++) {
	arr.push(i);
}

console.log(findProductFast(arr))

process.exit();