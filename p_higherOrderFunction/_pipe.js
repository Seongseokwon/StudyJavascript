function _pipe() {
	//함수들이 입력되는 차례대로 작동하도록 구현하기!
	const args = Array.from(arguments);
	console.log(args)

	return function(num){
		let res = num;
		for(let i = 0; i < args.length; i++){
			res = args[i](res);
		}
		return (res);
	}
	
}



function square(num) {
	return num * num;
}

function add5(num) {
	return num + 5;
}

function mul3(num) {
	return num * 3;
}

function isOdd(num) {
	return num % 2 !== 0;
}

let output = _pipe(add5, square);
  console.log(output(4)); // --> 81

// output = pipe(square, add5, mul3);
// 	console.log(output(4)); // --> 63

// output = pipe(square, mul3, add5, add5, isOdd);
//   console.log(output(4)); // --> false