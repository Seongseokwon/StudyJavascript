function getAllLetters(str) {
	let alpha = [];
	for(let i = 0; i < str.length; i++){
		alpha[i] = str[i];
	}
	return alpha;
}

//빈 배열을 선언해 줍니다.
//반본문을 돌면서 빈배열에 alpha에 str배열의 0번째 붙어 넣어줍니다.
//완료되면 리턴 ~~ 