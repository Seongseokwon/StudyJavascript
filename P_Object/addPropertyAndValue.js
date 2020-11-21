//객체와 키, 값을 입력받아 키에 값을 할당해야 합니다.
function addPropertyAndValue(obj, key, value) {
	obj[key] = value;
}

/*
	객체에 키, 값을 넣어주는 방법을 확인하는 문제이다.
*/

let myObj = {};
let key = 'name';
let value = 'seokown';

console.log(myObj); //함수 실행 전
addPropertyAndValue(myObj, key, value);
console.log(myObj);//함수 실행 후