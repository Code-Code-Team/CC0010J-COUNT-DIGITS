const firstNumElement = document.getElementById('number1');
const secondNumElement = document.getElementById('number2');
const givenDigitElement = document.getElementById('digit');
const resultElement = document.getElementById('result');
const buttonElement = document.getElementById('count');

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
