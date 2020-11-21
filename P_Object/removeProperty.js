//객체와 키를 입력받아 키가 가르키는 속성(property)을 제거해야 합니다.
function removeProperty(obj, key) {
	delete obj[key];
}


/**
	delete 메소드를 사용하면 속성을 지울수있다.
 */

let myObj = {
	name : 'seokwon',
	age : 27
}

let key = 'age';
console.log(myObj); //함수 실행 전
removeProperty(myObj, key);
console.log(myObj); //함수 실행 후
