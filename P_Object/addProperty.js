//객체와 키를 입력받아 키에 해당하는 값을 true로 설정
function addProperty(obj, property) {
	obj[property] = true;
}

/*
	이번 문제도 이전 문제와 같은이유로 닷 노테이션 대신 브라켓 노테이션을 사용해야한다.

*/

let myobj = {};
let property = 'seokwon';

addProperty(myobj, property);
console.log(myobj);