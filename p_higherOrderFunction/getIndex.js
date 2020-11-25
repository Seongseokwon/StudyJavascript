//정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우,
// num의 인덱스를 리턴해야 합니다.
function getIndex(arr, num) {
	let newArr = arr.filter(function(n){
		if(n < num)
			return n;
	})
	return (newArr.length);
}
/*
	filter를 통해서 num보다 작은값들로 구성된 새로운 배열을 만들어준다.
	그 다음 값으로는 num값이 들어 갈 것이기때문에 num의 인덱스는
	그 배열의 길이랑 같다고 추측할 수 있다.
*/

let output = getIndex([5, 4, 1, 3], 2);
console.log(output); // --> 1

output = getIndex([10, 5, 1, 3], 13);
console.log(output); // --> 4