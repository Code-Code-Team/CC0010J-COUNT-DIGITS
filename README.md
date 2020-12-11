# CC0010J-COUNT-DIGITS

## [See How it works](https://code-code-team.github.io/CC0010J-COUNT-DIGITS/)

## All the numbers between number1 and number 2 are pushed into an Array in this function

```bash
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
```

## Any given value are counted in this function

```bash
function inArrayCount(val) {
	array.forEach((element) => {
		if (element == val) {
			counter += 1;
		}
	});
	return counter;
}
```
