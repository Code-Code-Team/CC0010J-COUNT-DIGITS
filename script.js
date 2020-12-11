const firstNumElement = document.getElementById('number1');
console.log('🚀 ~ file: script.js ~ line 2 ~ firstNum', firstNumElement);
const secondNumElement = document.getElementById('number2');
console.log('🚀 ~ file: script.js ~ line 4 ~ secondNum', secondNumElement);
const givenDigitElement = document.getElementById('digit');
console.log('🚀 ~ file: script.js ~ line 6 ~ givenDigit', givenDigitElement);
const resultElement = document.getElementById('result');
console.log('🚀 ~ file: script.js ~ line 7 ~ result', resultElement);
const buttonElement = document.getElementById('count');
console.log('🚀 ~ file: script.js ~ line 10 ~ buttonElement', buttonElement);

let array = [];
let counter = 0;

function arrayOfRange(num1, num2) {
	for (let i = num1; i <= num2; i++) {
		const numberLength = `${i}`.length;
		if (numberLength == 1) {
			array.push(`${i}`);
		} else {
			const digitizedNum = `${i}`.split('');
			array = array.concat(digitizedNum);
		}
	}
	return array;
}

function inArrayCount(val) {
	array.forEach((element) => {
		if (element == val) {
			counter += 1;
		}
	});
	return counter;
}

buttonElement.addEventListener('click', () => {
	array = [];
	counter = 0;
	const num1 = firstNumElement.value;
	const num2 = secondNumElement.value;
	const givenDigit = givenDigitElement.value;
	arrayOfRange(num1, num2);
	inArrayCount(givenDigit);
	resultElement.innerText = `${givenDigit} rakamı ${num1} ile ${num2} arasında ${counter} kez geçmektedir`;
});
