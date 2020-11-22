//객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거해야 합니다.
function removeArrayValues(obj) {
	for(let key in obj){
		let value = obj[key];
		if(Array.isArray(value)){
			delete obj[key];
		}
	}
}

/*
	문제 해결을 위해서 알아야 할 것
	1.obj를 순회하는 방법
		- for_in, for_of
	2. 값에 접근하는 방법
		- obj[key] => value
	3. 값이 배열인지 아닌지 확인하는 방법
		- Array.isArray(value) value가 배열이면 true 아니면 false
	4. 속성을 지우는 방법
		- delete
*/

let myObj = {
	name : 'seokwon',
	address : ['서울시', '성동구']
}
console.log(myObj); // 함수 실행 전
removeArrayValues(myObj);
console.log(myObj); // 함수 실행 후