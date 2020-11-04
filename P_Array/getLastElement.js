function getLastElement(arr) {
	let len = arr.length;
	return arr[len - 1];
}

/* 
arr.length를 통해서 배열의 길이를 구해줍니다.
[100,200,300,400]의 배열의 길이를 구해보면 4가 나오게 됩니다.
하지만 배열을 0번부터 시작을 하기 때문에 마지막 요소의 인덱스값은
총길이 -1이라는것을 아실수 있습니다. 그 점을 활용하여 문제를 풀면
쉽게 풀수 있습니다.*/