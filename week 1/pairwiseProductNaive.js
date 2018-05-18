'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let arrayLength;

rl.on('line', data => {
	if (!arrayLength) {
		arrayLength = +data;
		return;
	}

	const numArr = data
									.split(' ')
									.map(num => +num)

	console.log(findProductNaive(numArr));

	rl.close();
	process.exit();
})

function findProductNaive(arr) {
	let product = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i != j) {
				const multiplied = arr[i] * arr[j];
				if (multiplied > product) product = multiplied;
			}
		}
	}

	return product;
}

module.exports = findProductNaive;