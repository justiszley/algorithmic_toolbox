const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let arrayLength;

rl.on('line', input => {
	if (!arrayLength) {
		arrayLength = input;
	} else {
		const numArr = input
			.split(' ')
			.map(num => +num);

		console.log(findProductFast(numArr));
		rl.close();
		process.exit();	
	}

})

function findProductFast(arr) {
	const a = findMaxNum([...arr]);	

	const arrWithoutMax = [...arr.slice(0, arr.indexOf(a)), 
												...arr.slice(arr.indexOf(a) + 1)]

	const b = findMaxNum(arrWithoutMax);
	return a * b;
}

function findMaxNum(arr) {
	return arr.reduce((maxNum, newNum) => {
		return newNum > maxNum ? newNum : maxNum;
	}, 0)
}

module.exports = findProductFast;