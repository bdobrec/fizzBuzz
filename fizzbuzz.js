// FizzBuzz seems to be a common test for competency in a variety of languages, here are a few takes on how to do it in javascript

// Version One, Single Line no if statements
for (var i = 1; i <= 100; i++) console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i)

//Version Two using if statements (prints to log)
for (var i = 1; i <= 100; i++) {
	var divisibleByThree = i % 3 === 0;
	var divisibleByFive = i % 5 === 0;

	if (divisibleByThree && divisibleByFive) {
		console.log('FizzBuzz');
	}
	else if (divisibleByThree) {
		console.log('Fizz');
	}
	else if (divisibleByFive) {
		console.log('Buzz');
	}
	else {
		console.log(i);
	}
}