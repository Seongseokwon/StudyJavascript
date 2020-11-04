function getElementsUpTo(arr, n) {
	let newArr = [];
	if(arr.length === 0 || arr.length < n)
		return newArr;
	newArr = arr.slice(0, n);
	return newArr;
}

//빈배열은 선언해주고 예외조건에 해당하면 빈배열을 그대로 리턴해줍니다.
//그렇지 않을 경우에는 arr에서 입력받은 n만큼 자른 값을 newArr에 담아주고
//리턴을 해줍니다.