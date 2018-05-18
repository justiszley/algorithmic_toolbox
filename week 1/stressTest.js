const fast = require('./pairwiseProductFast');
const naive = require('./pairwiseProductNaive');

function stressTest(maxArrLength, maxNumValue) {
	let m = 10000;

	while (m > 0) {
		//creating an array's length
		const length = Math.round((maxArrLength - 2) * Math.random() + 2);
		const arr = [];

		for ( let i = 0; i < length; i++ ) {
			arr[i] = Math.round(Math.random() * maxNumValue);
		}

		console.log(arr);

		const result1 = fast(arr);
		const result2 = naive(arr);

		if (result1 == result2) {
			console.log('ok')
		} else {
			console.log('wrong answer', result1, result2);
			return;
		}

		m--;
	}
}

stressTest(10000, 2550000);

process.exit();