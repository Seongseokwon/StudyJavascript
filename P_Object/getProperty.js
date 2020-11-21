//객체와 키를 입력받아 해당하는 값을 리턴하시오
function getProperty(obj, property) {
	return obj[property];
}

/*
	왜 닷 노테이션이아닌 브라켓 노테이션을 사용해야하는가 ?!
	property라는 키가 변수이기 때문이다. 닷 노테이션같은 경우는 
	안에 있는 값을 정확히 지정해서 사용

	Ex) let newObj = {
		name : 'seokwon',
		age : 27
	}
	위와 같은 객체가 있을때 newObj.name => 'seokwon'이 나오게 된다

	브라켓 노테이션도 newObj['name'] => 'seokwon' 이런식으로 지정해서 사용할수도있다.
	문제에서는 키값을 변수로 받기 때문에 변수로 들어오는 값을 브라켓 노테이션 안에 담아주는게 맞다고생각이든다.
*/

let myObj = {
	name : 'seokwon',
	age : 27
}
let key = 'age'

console.log(getProperty(myObj, key));