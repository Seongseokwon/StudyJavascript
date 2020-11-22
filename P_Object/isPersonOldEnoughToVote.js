//객체를 입력받아 객체가 가진 age 속성값이 합법적으로 
//투표할 수 있는 나이(18세 이상)인지 여부를 리턴해야 합니다.
function isPersonOldEnoughToVote(obj) {
	if(obj.age >= 18)
		return true;
	return false;
}


/*
	1.객체가 age라는 속성을 갖고있는걸 알때 접근방법 생각해보기
		- 닷 노테이션, 브라켓 노테이션 둘다 사용가능
		- obj.age  || obj['age']  두가지 방법으로 접근할 수 있다.
*/

let myObj ={
	name : 'seokwon',
	age : 27
}

console.log(isPersonOldEnoughToVote(myObj));