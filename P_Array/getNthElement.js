function getNthElement(arr, index) {
	let len = arr.length - 1;
	if(len < 0)
		return undefined;
	if(index > len)
		return 'out of index range';
	return arr[index];
}