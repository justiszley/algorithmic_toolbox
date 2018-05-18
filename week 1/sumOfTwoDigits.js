const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", numbers => {
	const numArr = numbers.split(' ');
	console.log(+numArr[0] + +numArr[1])
	rl.close();
});