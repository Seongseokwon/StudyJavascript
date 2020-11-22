//객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거해야 합니다.
function removeOddValues(obj) {
	for(let [key, value] of Object.entries(obj)){
		if(typeof value === 'number')
			if(value % 2 !== 0)
				delete obj[key];
	}
}

/*
	문제 해결을 위해서 알아야 할 것
	1.obj를 순회하는 방법
		- for_in, for_of
	2. 값에 접근하는 방법
		- obj[key] => value
	3. 홀수를 판별하는 방법
		- % 연산을 통해서 2로 연산을 하였을때 1이 나오면 홀수로 판단.
	4. 숫자에 대해서만 적용을 해야하기 때문에 어떻게 확인할것인지
		- typof 연산자를 사용해서 number일때만 확인하도록 작성
	5. 속성을 지우는 방법
		- delete
*/

let myObj ={
	a : 1,
	b : 2,
	c : '3',
	d : 55
}

console.log(myObj); // 함수 실행 전
removeOddValues(myObj);
console.log(myObj); // 함수 실행 후
