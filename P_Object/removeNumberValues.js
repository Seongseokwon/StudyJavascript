//객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거해야 합니다.
function removeNumberValues(obj) {
	for(let key in obj){
		let value = obj[key];
		if(typeof value === 'number')
			delete obj[key];
	}
}

/*
	객체를 어떻게 순회할 것인지 생각해보기
	1.for_in
		for(let key in obj){
			console.log(key)
		}
		for_in을 사용할때 위와같이 코드를 작성해서 확인해보면 key
		객체의 key값이 나오는걸 확인 할 수 있다. 그럼 그걸 활용해서 value를 찾을수 있다.
		value의 type이 number이면 지워주는 방법을 구현할 수 있다.
	2.for_of
		for(let [key,value] of Object.entries(obj)){
			console.log(key)
			console.log(value)
		}
		for_of를 사용하면 위와 같은 코드일때 키값과 밸류값을 확인 할 수 있다.
		for_in을 사용할때와 달리 새롭게 value를 담아주지 않아도 되기때문에 이 방법도 편리하다.
*/