function superIncreasing(arr) {
	let result = true;
	let res =  arr.reduce((acc, cur) => {
		if(acc >= cur)
			result = false;
		return acc + cur
	})
	return result
}




let output = superIncreasing([979, 1737, -2146, -337, 1316]);
console.log(output); // --> true

// output = superIncreasing([1, 3, 5, 9]);
// console.log(output); // --> false