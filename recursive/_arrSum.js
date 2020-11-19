//배열을 입력받아 모든 요소의 합을 리턴하기
function _arrSum(arr) {
	if(arr.length === 0){
		return 0;
	}

	let head = arr[0];
	let tail = arr.slice(1);

	return head + _arrSum(tail);
}

console.log(_arrSum([1,2,3,4,5]));


/*
	배열을 머리부분과 꼬리부분으로 나누어서 생각하는 방법이 있다.
	이렇게해주면 이전 예제들과 마찬가지로 배열이 비었을때 0값을 리턴받아
	그 값을 다시 더하면서 올라와서 최종적인 토탈을 구한다고 할수있다.
*/