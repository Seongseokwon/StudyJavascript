function getElementsAfter(arr, n) {
	let newArr = [];
	if(arr.length === 0)
		return newArr;
	newArr = arr.slice(n+1, arr.length);
	return newArr;
}

