//객체를 입력받아 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를
// 둔 단일 문자열을 fullName 속성값으로 할당해야 합니다.
function addFullNameProperty(obj) {
	let fullName = `${obj.firstName} ${obj.lastName}`;
	//obj.firstName + " " + obj.lastName 이 방법으로도 할 수 있다.
	obj['fullName'] = fullName;
}


/*
	firstName의 value와 lastName의 value를 가지고와서 
	새로운 변수에 저장을해주고 그 변수의 값을 fullName이라는 키에 맞춰서
	객체에 넣어주면 해결할 수 있다.
*/

let myObj = {
	firstName : 'seong',
	lastName : 'seokwon'
}

console.log(myObj); // 함수 실행 전
addFullNameProperty(myObj);
console.log(myObj); // 함수 실행 후