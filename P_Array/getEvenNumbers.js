function getEvenNumbers(arr) {
	let evenArr = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0)
			evenArr.push(arr[i]);
	}
	return evenArr;
}

//요소가 짝수인것을 담아줄 배열을 하나 선언해 줍니다.
//반복문을 돌면서 요소의 값이 짝수인지 확인해주고
//짝수가 맞다면 push를 통해서 배엻에 담아줍니다.