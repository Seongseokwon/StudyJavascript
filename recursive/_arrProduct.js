//배열 요소들의 곱을 리턴하기
function _arrProduct(arr) {
	if(arr.length === 0)
		return 1;

	let head = arr[0];
	let tail = arr.slice(1);

	return head * _arrProduct(tail)
}

console.log(_arrProduct([1,2,3]))

/*
	배열 요소들의 합을 구하는 방법과 비슷한 방법으로 접근 할 수 있다.
	1. 요소들의 곱을 리턴해주는 문제이기 때문에 배열이 비게 되었을때 1을 return한다.
		-1. 0을 리턴하면 요소들의 곱은 항상 0 이 되기때문
*/