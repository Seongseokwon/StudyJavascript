function getLargestElement(arr) {
	let max = 0;
	max = arr[0];

	for(let i = 1; i <arr.length; i++){
		if(arr[i] > max)
			max = arr[i]
	}
	return max;
}
//배열의 첫번째 요소를 max값이라고 지정을 해줍니다
//그후 반복문을 돌면서 그다음 수부터 비교하면서 그 값 보다 크다면
//max의 값에 대입을 해줍니다.