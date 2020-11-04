function getAllElementsButFirst(arr) {
	let newArr = [];
	if(arr.length === 0)
		return newArr;
	newArr = arr.slice(1);
	return newArr;
}

//빈 배열을 만들어 줍니다. arr.length가 0이면 들어온 배열이 
//빈배열이므로 빈배열을 리턴해줍니다.
