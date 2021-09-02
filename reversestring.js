// 1.- String Reverse
// DATA:
const str = 'alexander';
// console.log('Data: ', str);

// EXPECTED:
const expectedTest = 'rednaxela';
// console.log('Expected: ', expectedTest);

//CODE:
function reversestring(str) {
	// Step 1: split('')
	const reverseSTR1 = str.split('');
	console.log('Step1-split', reverseSTR1);
	// Step 2: reverse()
	const reverseSTR2 = str.split('').reverse();
	console.log('Step2-reverse', reverseSTR2);
	// Step 3: join('')
	const reverseSTR = str.split('').reverse().join('');
	console.log('Step3-join', reverseSTR);

	return reverseSTR;
}

// const result = reversestring(str);
// console.log('Result: ', result);

module.exports = reversestring;
