function compose(func1, func2) {
	return function(num){
		console.log(num);
		return func1(func2(num));
	}
}

function square(num) {
	return num * num;
}

function add5(num) {
	return num + 5;
} 

function isOdd(num) {
	return num % 2 !== 0;
}

let output = compose(add5, square);
	console.log(output(4)); // --> 21
