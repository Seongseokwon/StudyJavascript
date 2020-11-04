function mergeArrays(arr1, arr2) {
	let mergeArr = [];

	mergeArr = arr1.concat(arr2);
	return mergeArr;
}

//두 배열을 이어주는 함수로 concat이라는 함수가 있습니다.
//새로운 배열을 선언해주고 그 안에 arr1과 arr2를 연결해줘서 넣어줌으로써 문제를 해결하였습니다.