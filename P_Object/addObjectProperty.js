//두 개의 객체와 키를 입력받아 첫번째 객체의 키에 두번째 객체를 할당해야 합니다.
function addObjectProperty(obj1, key, obj2) {
	obj1[key] = obj2;
}

/**
	문제를 잘 읽었다면 그리 어려운 문제가 아니다.
	이전 까지 키에 값을 할당해주는 문제들을 해결해왔다.
	여기서 값이 무엇이 되는지만 정확히 파악하면 어렵지 않은 문제이다.
 */


let obj1 = {}
let key = 'info';
let obj2 = {
	name : 'seokwon',
	age : 27
}
console.log(obj1); //함수 실행 전
addObjectProperty(obj1, key, obj2);
console.log(obj1); //함수 실행 후