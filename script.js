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

firstNumVal = firstNumElement.value;
secondNumVal = secondNumElement.value;
givenDigitVal = givenDigitElement.value;




buttonElement.addEventListener('click', () => {
	console.log(
		firstNumElement.value,
		secondNumElement.value,
		givenDigitElement.value
	);
});
